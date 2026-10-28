Hayyoh.charts = (() => {
  const palette = {
    primary: { light: '#1b84ff', dark: '#3d9bff' },
    cyan: { light: '#06b6d4', dark: '#22d3ee' },
    violet: { light: '#7239ea', dark: '#9b72f5' },
    sky: { light: '#0ea5e9', dark: '#38bdf8' },
    purple: { light: '#a855f7', dark: '#c084fc' },
    green: { light: '#17c653', dark: '#34d399' },
    red: { light: '#f8285a', dark: '#fb7185' },
    lightBlue: { light: '#22d3ee', dark: '#7dd3fc' },
    grey: { light: '#9ca3af', dark: '#6b7280' },
    amber: { light: '#f6b100', dark: '#fbbf24' }
  };

  const units = { tkUtil: '%', inFail: '%' };
  const registry = new Map();
  const resizeObserver = 'ResizeObserver' in window ? new ResizeObserver(resizeObserved) : null;
  let resizeTimer = null;

  const { escapeHtml } = Hayyoh;
  const { t, label } = Hayyoh.i18n;

  function color(name) {
    const entry = palette[name] || palette.primary;
    return entry[Hayyoh.theme.current()];
  }

  function cssValue(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function isRtl() {
    return document.documentElement.dir === 'rtl';
  }

  function formatValue(value, unit = '') {
    if (value === null || value === undefined || value === '') {
      return '–';
    }
    if (typeof value !== 'number') {
      return String(value);
    }
    return value.toLocaleString('en-US', { maximumFractionDigits: 2 }) + unit;
  }

  function formatCompact(value) {
    const absolute = Math.abs(value);
    if (absolute >= 1e6) {
      return (value / 1e6).toLocaleString('en-US', { maximumFractionDigits: 1 }) + 'M';
    }
    if (absolute >= 1e3) {
      return (value / 1e3).toLocaleString('en-US', { maximumFractionDigits: 1 }) + 'K';
    }
    return value.toLocaleString('en-US', { maximumFractionDigits: 2 });
  }

  function chartTheme() {
    return {
      text: cssValue('--text-primary'),
      muted: cssValue('--chart-text'),
      grid: cssValue('--chart-grid'),
      border: cssValue('--border-subtle'),
      tooltip: cssValue('--chart-tooltip'),
      font: getComputedStyle(document.body).fontFamily,
      mono: '"JetBrains Mono", "SFMono-Regular", Consolas, monospace'
    };
  }

  function tooltip(theme, unit, byAxis) {
    return {
      trigger: byAxis ? 'axis' : 'item',
      confine: true,
      backgroundColor: theme.tooltip,
      borderColor: theme.border,
      borderWidth: 1,
      padding: [8, 10],
      textStyle: { color: theme.text, fontFamily: theme.font, fontSize: 12 },
      extraCssText: `direction:${isRtl() ? 'rtl' : 'ltr'};text-align:start;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.28);font-variant-numeric:tabular-nums;`,
      axisPointer: byAxis ? { type: 'shadow', shadowStyle: { color: 'rgba(127,140,160,.08)' } } : undefined,
      formatter(params) {
        const items = Array.isArray(params) ? params : [params];
        if (!items.length) {
          return '';
        }
        const heading = escapeHtml(items[0].axisValueLabel ?? items[0].name);
        const rows = items.map((item) => {
          const seriesUnit = unit || ((item.seriesName || '').includes('(m)') ? ' m' : '');
          const share = typeof item.percent === 'number' ? ` <span style="opacity:.75">(${formatValue(item.percent, '%')})</span>` : '';
          const name = item.seriesName && item.seriesName !== heading ? item.seriesName : item.name;
          return `<div style="display:flex;justify-content:space-between;gap:14px"><span>${item.marker}${escapeHtml(name)}</span><span style="font-family:${theme.mono};font-weight:700">${formatValue(item.value, seriesUnit)}${share}</span></div>`;
        });
        return `<div style="font-weight:700;margin-bottom:4px">${heading}</div>${rows.join('')}`;
      }
    };
  }

  function valueAxis(theme, unit, showSplitLines = true) {
    return {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: showSplitLines, lineStyle: { color: theme.grid } },
      axisLabel: { color: theme.muted, fontFamily: theme.mono, fontSize: 11, formatter: (value) => formatCompact(value) + unit }
    };
  }

  function categoryAxis(theme, labels, horizontal) {
    return {
      type: 'category',
      data: labels.map(label),
      inverse: horizontal,
      axisLine: { lineStyle: { color: theme.border } },
      axisTick: { show: false },
      axisLabel: {
        color: theme.muted,
        fontFamily: theme.font,
        fontSize: 11,
        interval: horizontal ? 0 : 'auto',
        hideOverlap: true,
        formatter: (value) => (value.length > 22 ? `${value.slice(0, 20)}…` : value)
      }
    };
  }

  function legend(theme, show) {
    return {
      show,
      bottom: 0,
      type: 'scroll',
      icon: 'roundRect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: { color: theme.muted, fontFamily: theme.font, fontSize: 11 },
      pageTextStyle: { color: theme.muted },
      pageIconColor: theme.text,
      pageIconInactiveColor: theme.border
    };
  }

  function fadeArea(hex, strength) {
    return {
      color: {
        type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
        colorStops: [{ offset: 0, color: hex + strength }, { offset: 1, color: hex + '00' }]
      }
    };
  }

  function lineOption(spec, theme, unit) {
    const multiSeries = spec.series.length > 1;
    return {
      tooltip: tooltip(theme, unit, true),
      legend: legend(theme, multiSeries),
      grid: { left: 8, right: 14, top: 14, bottom: multiSeries ? 32 : 8, containLabel: true },
      xAxis: categoryAxis(theme, spec.labels, false),
      yAxis: valueAxis(theme, unit),
      series: spec.series.map((series) => {
        const hex = color(series.color);
        return {
          type: 'line',
          name: label(series.name),
          data: series.values,
          smooth: 0.35,
          symbol: 'circle',
          symbolSize: 6,
          connectNulls: false,
          lineStyle: { width: 2.5, color: hex },
          itemStyle: { color: hex },
          areaStyle: fadeArea(hex, '44')
        };
      })
    };
  }

  function barOption(spec, theme, unit) {
    const horizontal = Boolean(spec.horizontal);
    const data = spec.values.map((value, index) => (
      spec.colors ? { value, itemStyle: { color: color(spec.colors[index % spec.colors.length]) } } : value
    ));
    return {
      tooltip: tooltip(theme, unit, true),
      legend: legend(theme, false),
      grid: { left: 8, right: 14, top: 10, bottom: 8, containLabel: true },
      xAxis: horizontal ? valueAxis(theme, unit) : categoryAxis(theme, spec.labels, false),
      yAxis: horizontal ? categoryAxis(theme, spec.labels, true) : valueAxis(theme, unit),
      series: [{
        type: 'bar',
        name: '',
        data,
        barMaxWidth: 38,
        itemStyle: { color: color(spec.color), borderRadius: horizontal ? [0, 6, 6, 0] : [6, 6, 0, 0] },
        emphasis: { itemStyle: { opacity: 0.85 } }
      }]
    };
  }

  function stackedOption(spec, theme, unit) {
    return {
      tooltip: tooltip(theme, unit, true),
      legend: legend(theme, true),
      grid: { left: 8, right: 14, top: 10, bottom: 32, containLabel: true },
      xAxis: valueAxis(theme, unit),
      yAxis: categoryAxis(theme, spec.labels, true),
      series: spec.series.map((series) => ({
        type: 'bar',
        name: label(series.name),
        stack: 'total',
        data: series.values,
        barMaxWidth: 30,
        itemStyle: { color: color(series.color) },
        emphasis: { focus: 'series' }
      }))
    };
  }

  function donutOption(spec, theme, unit) {
    return {
      color: spec.colors.map(color),
      tooltip: tooltip(theme, unit, false),
      legend: legend(theme, true),
      series: [{
        type: 'pie',
        radius: ['56%', '78%'],
        center: ['50%', '44%'],
        avoidLabelOverlap: true,
        itemStyle: { borderColor: theme.tooltip, borderWidth: 2, borderRadius: 4 },
        label: { show: false },
        emphasis: { scale: true, scaleSize: 4, label: { show: false } },
        data: spec.labels.map((name, index) => ({ name: label(name), value: spec.values[index] }))
      }]
    };
  }

  function comboOption(spec, theme) {
    const barColor = color('violet');
    const lineColor = color('primary');
    const secondaryAxis = { ...valueAxis(theme, ' m', false), position: 'right' };
    return {
      tooltip: tooltip(theme, '', true),
      legend: legend(theme, true),
      grid: { left: 8, right: 14, top: 14, bottom: 32, containLabel: true },
      xAxis: categoryAxis(theme, spec.labels, false),
      yAxis: [valueAxis(theme, ''), secondaryAxis],
      series: [
        {
          type: 'bar',
          name: label(spec.bars.name),
          data: spec.bars.values,
          barMaxWidth: 30,
          itemStyle: { color: barColor, borderRadius: [6, 6, 0, 0] }
        },
        {
          type: 'line',
          name: label(spec.line.name),
          data: spec.line.values,
          yAxisIndex: 1,
          smooth: 0.35,
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: { width: 2.5, color: lineColor },
          itemStyle: { color: lineColor },
          areaStyle: fadeArea(lineColor, '33')
        }
      ]
    };
  }

  const optionBuilders = { line: lineOption, bar: barOption, stacked: stackedOption, donut: donutOption, combo: comboOption };

  function allValues(spec) {
    if (spec.series) {
      return spec.series.flatMap((series) => series.values);
    }
    if (spec.kind === 'combo') {
      return [...spec.bars.values, ...spec.line.values];
    }
    return spec.values || [];
  }

  function isEmpty(spec) {
    return !spec.labels.length || !allValues(spec).some((value) => value !== null && value !== undefined);
  }

  function chartTitle(element) {
    const card = element.closest('.chart-card');
    const title = card && card.querySelector('.card-title');
    return title ? title.textContent.trim() : element.getAttribute('aria-label') || '';
  }

  function renderTable(id, spec) {
    const container = document.getElementById(`${id}-table`);
    if (!container || !spec.generateTable) {
      return;
    }
    const unit = units[id] || '';
    const headings = [t('category')];
    let rows;
    if (spec.series) {
      spec.series.forEach((series) => headings.push(label(series.name)));
      rows = spec.labels.map((name, index) => (
        `<tr><th scope="row">${escapeHtml(label(name))}</th>${spec.series.map((series) => `<td>${formatValue(series.values[index], unit)}</td>`).join('')}</tr>`
      ));
    } else {
      headings.push(t('value'));
      rows = spec.labels.map((name, index) => (
        `<tr><th scope="row">${escapeHtml(label(name))}</th><td>${formatValue(spec.values[index], unit)}</td></tr>`
      ));
    }
    container.innerHTML = `<div class="table-wrap"><table class="data-table"><caption class="visually-hidden">${escapeHtml(chartTitle(document.getElementById(id)))}</caption><thead><tr>${headings.map((heading) => `<th scope="col">${escapeHtml(heading)}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`;
  }

  function render(id, spec) {
    const element = document.getElementById(id);
    if (!element || !window.echarts) {
      return null;
    }
    registry.set(id, spec);
    renderTable(id, spec);

    let instance = echarts.getInstanceByDom(element);
    if (isEmpty(spec)) {
      if (instance) {
        instance.dispose();
      }
      element.innerHTML = `<div class="chart-empty">${t('noData')}</div>`;
      return null;
    }

    if (!instance) {
      element.innerHTML = '';
      instance = echarts.init(element, null, { renderer: 'svg' });
      if (resizeObserver) {
        resizeObserver.observe(element);
      }
    }

    const previousSelection = instance.getOption()?.legend?.[0]?.selected;
    const theme = chartTheme();
    const option = optionBuilders[spec.kind](spec, theme, units[id] || '');
    option.textStyle = { fontFamily: theme.font };
    option.aria = { enabled: true, label: { description: `${chartTitle(element)} — ${t('fullDataInTable')}` } };
    if (previousSelection && option.legend) {
      option.legend.selected = previousSelection;
    }
    instance.setOption(option, { notMerge: true });
    instance.resize();
    return instance;
  }

  function isVisible(element) {
    return element.offsetParent !== null;
  }

  function resizeObserved(entries) {
    entries.forEach((entry) => {
      const instance = echarts.getInstanceByDom(entry.target);
      if (instance && isVisible(entry.target)) {
        instance.resize();
      }
    });
  }

  function resizeAll() {
    registry.forEach((spec, id) => {
      const element = document.getElementById(id);
      const instance = element && echarts.getInstanceByDom(element);
      if (instance && isVisible(element)) {
        instance.resize();
      }
    });
  }

  function refreshAll() {
    registry.forEach((spec, id) => render(id, spec));
  }

  function dispose(id) {
    const element = document.getElementById(id);
    const instance = element && echarts.getInstanceByDom(element);
    if (instance) {
      instance.dispose();
    }
    registry.delete(id);
  }

  function showView(id, view) {
    const chart = document.getElementById(id);
    if (!chart) {
      return;
    }
    const table = document.getElementById(`${id}-table`);
    const showTable = view === 'table';
    chart.hidden = showTable;
    if (table) {
      table.hidden = !showTable;
    }
    document.querySelectorAll(`.view-switch button[data-view-for="${id}"]`).forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.view === view));
    });
    if (!showTable) {
      requestAnimationFrame(() => echarts.getInstanceByDom(chart)?.resize());
    }
  }

  const line = (id, labels, series) => render(id, { kind: 'line', labels, series });
  const bar = (id, labels, values, options = {}) => render(id, { kind: 'bar', labels, values, ...options });
  const stacked = (id, labels, series) => render(id, { kind: 'stacked', labels, series });
  const donut = (id, labels, values, colors) => render(id, { kind: 'donut', labels, values, colors });
  const combo = (id, labels, bars, lineSeries) => render(id, { kind: 'combo', labels, bars, line: lineSeries });

  function initializeCharts() {
    document.addEventListener('click', (event) => {
      const button = event.target.closest('.view-switch button[data-view]');
      if (button) {
        showView(button.dataset.viewFor, button.dataset.view);
      }
    });
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeAll, 120);
    });
    Hayyoh.on('themechange', refreshAll);
    Hayyoh.on('languagechange', refreshAll);
  }

  Hayyoh.onReady(initializeCharts);

  return { render, line, bar, stacked, donut, combo, resizeAll, refreshAll, dispose, showView };
})();

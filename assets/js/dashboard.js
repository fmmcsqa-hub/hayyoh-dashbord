Hayyoh.dashboard = (() => {
  const { escapeHtml } = Hayyoh;
  const { t, pick } = Hayyoh.i18n;
  let returnFocusTo = null;

  function sum(values) {
    return values.reduce((total, value) => total + value, 0);
  }

  function sparkline(values) {
    if (!values.length) {
      return '';
    }
    const width = 96;
    const height = 26;
    const min = Math.min(...values);
    const range = Math.max(...values) - min || 1;
    const y = (value) => height - 3 - ((value - min) / range) * (height - 6);
    const points = values.map((value, index) => `${((index / Math.max(1, values.length - 1)) * width).toFixed(1)},${y(value).toFixed(1)}`).join(' ');
    return `<svg class="spark" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" aria-hidden="true" focusable="false"><polyline points="${points}" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="${width}" cy="${y(values[values.length - 1]).toFixed(1)}" r="2.2" fill="currentColor"/></svg>`;
  }

  function changeBadge(values) {
    if (values.length < 2 || !values[values.length - 2]) {
      return '';
    }
    const previous = values[values.length - 2];
    const change = ((values[values.length - 1] - previous) / Math.abs(previous)) * 100;
    const rising = change >= 0;
    return `<span class="delta ${rising ? 'is-positive' : 'is-negative'}">${rising ? '▲' : '▼'} ${Math.abs(change).toFixed(1)}%</span>`;
  }

  function updateKpis() {
    const period = Hayyoh.period.current();
    document.querySelectorAll('.kpi[data-series]').forEach((card) => {
      let series;
      try {
        series = period.slice(JSON.parse(card.dataset.series));
      } catch (error) {
        return;
      }
      if (!series.length) {
        return;
      }
      const value = card.dataset.aggregate === 'sum' ? sum(series) : series[series.length - 1];
      card.querySelector('.kpi-value').textContent = card.dataset.format === 'millions' ? `${value.toFixed(1)}m` : Math.round(value).toLocaleString();
      const trend = card.querySelector('.kpi-trend');
      if (trend) {
        trend.innerHTML = changeBadge(series) + sparkline(series);
      }
      const periodLabel = card.querySelector('.kpi-period');
      if (periodLabel) {
        periodLabel.textContent = Hayyoh.period.label();
      }
    });
  }

  function renderPage() {
    Hayyoh.currentPage().render(Hayyoh.period.current());
  }

  function detailBox(labelKey, content) {
    return `<div class="detail-box"><div class="detail-label">${t(labelKey)}</div><div class="detail-value">${content}</div></div>`;
  }

  function breakdownTable(breakdown) {
    const head = breakdown.head.map((heading) => `<th scope="col">${escapeHtml(heading)}</th>`).join('');
    const rows = breakdown.rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(typeof cell === 'number' ? cell.toLocaleString() : cell)}</td>`).join('')}</tr>`).join('');
    return `<section class="drawer-section"><h3 class="drawer-section-title">${t('breakdown')}</h3><div class="table-wrap"><table class="data-table"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div></section>`;
  }

  function trendSection() {
    return `<section class="drawer-section"><div class="drawer-section-head"><h3 class="drawer-section-title">${t('trend')}</h3>`
      + `<div class="view-switch" role="group" aria-label="${t('viewSwitch')}">`
      + `<button type="button" data-view="chart" data-view-for="detail-trend" aria-pressed="true">${t('chart')}</button>`
      + `<button type="button" data-view="table" data-view-for="detail-trend" aria-pressed="false">${t('table')}</button></div></div>`
      + `<div id="detail-trend" class="chart chart-compact" role="img" aria-label="${t('trend')}"></div><div id="detail-trend-table" hidden></div></section>`;
  }

  function insightSection(detail) {
    if (!detail.insight) {
      return '';
    }
    const action = detail.action ? `<p class="note note-success"><strong>${t('recommendedAction')}</strong> ${escapeHtml(detail.action)}</p>` : '';
    return `<section class="drawer-section"><h3 class="drawer-section-title">${t('meaning')}</h3><p class="note note-info">${escapeHtml(detail.insight)}</p>${action}</section>`;
  }

  function openDetails(id) {
    const detail = Hayyoh.currentPage().details[id];
    const drawer = document.getElementById('kpi-drawer');
    if (!detail || !drawer) {
      return;
    }
    const hasTrend = detail.trend && detail.trend.values.length;
    drawer.innerHTML = `<div class="drawer-header">`
      + `<div><p class="drawer-eyebrow" id="kpi-drawer-title">${escapeHtml(pick(detail.title, detail.titleAr))}</p>`
      + `<p class="drawer-value">${escapeHtml(detail.value)}</p>${detail.delta ? `<p class="drawer-delta">${escapeHtml(detail.delta)}</p>` : ''}</div>`
      + `<button type="button" class="icon-button" id="kpi-drawer-close" aria-label="${t('close')}">✕</button></div>`
      + `<div class="drawer-body">`
      + `<div class="detail-grid">${detailBox('status', `<span class="status status-${detail.statusLevel}">${escapeHtml(pick(detail.status, detail.statusAr))}</span>`)}`
      + detailBox('target', escapeHtml(detail.target || '–'))
      + detailBox('period', escapeHtml(Hayyoh.period.label()))
      + `</div><div class="detail-grid">`
      + detailBox('definition', escapeHtml(detail.definition))
      + detailBox('source', escapeHtml(detail.source))
      + detailBox('calculation', escapeHtml(detail.calculation))
      + `</div>${hasTrend ? trendSection() : ''}${detail.breakdown ? breakdownTable(detail.breakdown) : ''}${insightSection(detail)}</div>`;

    returnFocusTo = document.activeElement;
    document.getElementById('drawer-overlay').classList.add('is-visible');
    document.documentElement.setAttribute('data-drawer-open', '');
    drawer.classList.add('is-open');
    document.getElementById('kpi-drawer-close').addEventListener('click', closeDetails);
    requestAnimationFrame(() => document.getElementById('kpi-drawer-close').focus({ preventScroll: true }));

    Hayyoh.charts.dispose('detail-trend');
    if (hasTrend) {
      Hayyoh.charts.render('detail-trend', {
        kind: 'line',
        labels: detail.trend.labels,
        series: [{ name: 'Trend', values: detail.trend.values, color: 'primary' }],
        generateTable: true
      });
    }
  }

  function closeDetails() {
    const drawer = document.getElementById('kpi-drawer');
    if (!drawer || !drawer.classList.contains('is-open')) {
      return;
    }
    Hayyoh.charts.dispose('detail-trend');
    drawer.classList.remove('is-open');
    document.getElementById('drawer-overlay').classList.remove('is-visible');
    document.documentElement.removeAttribute('data-drawer-open');
    if (returnFocusTo && document.contains(returnFocusTo)) {
      returnFocusTo.focus({ preventScroll: true });
    }
  }

  function bindKpiCards() {
    document.addEventListener('click', (event) => {
      const card = event.target.closest('.kpi[data-detail]');
      if (card) {
        openDetails(card.dataset.detail);
      }
    });
    document.addEventListener('keydown', (event) => {
      const card = event.target.closest && event.target.closest('.kpi[data-detail]');
      if (card && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        openDetails(card.dataset.detail);
      }
      if (event.key === 'Escape') {
        closeDetails();
      }
    });
    const overlay = document.getElementById('drawer-overlay');
    if (overlay) {
      overlay.addEventListener('click', closeDetails);
    }
  }

  function bindKeyboardScrolling() {
    const scroller = document.querySelector('.app-main');
    if (!scroller) {
      return;
    }
    document.addEventListener('keydown', (event) => {
      const active = document.activeElement;
      if (active && active !== document.body) {
        return;
      }
      const page = scroller.clientHeight * 0.9;
      const distances = { ArrowDown: 48, ArrowUp: -48, PageDown: page, PageUp: -page, Home: -scroller.scrollHeight, End: scroller.scrollHeight };
      const distance = event.key === ' ' ? (event.shiftKey ? -page : page) : distances[event.key];
      if (distance !== undefined) {
        event.preventDefault();
        scroller.scrollBy({ top: distance });
      }
    });
  }

  function initializeDashboard() {
    bindKpiCards();
    bindKeyboardScrolling();
    renderPage();
    updateKpis();
    Hayyoh.on('periodchange', () => {
      renderPage();
      updateKpis();
    });
    Hayyoh.on('languagechange', updateKpis);
  }

  Hayyoh.onReady(initializeDashboard);

  return { openDetails, closeDetails, updateKpis };
})();

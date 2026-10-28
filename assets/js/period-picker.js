Hayyoh.period = (() => {
  const STORAGE_KEY = 'dashboard-reporting-period';
  const presets = { all: [0, 8], w: [8, 8], '4w': [5, 8], m: [5, 8], '3m': [0, 8] };

  let start = 0;
  let end = 8;
  let preset = 'all';
  let customFrom = '';
  let customTo = '';

  const weeks = () => Hayyoh.data.weeks;
  const lastWeek = () => weeks().labels.length - 1;

  function current() {
    return {
      start,
      end,
      preset,
      slice: (values) => values.slice(start, end + 1)
    };
  }

  function label() {
    if (start === 0 && end === lastWeek()) {
      return Hayyoh.i18n.t('sinceLaunch');
    }
    return `${weeks().labels[start]} – ${weeks().labels[end]}`;
  }

  function save() {
    Hayyoh.writeSetting(STORAGE_KEY, JSON.stringify({ start, end, preset, customFrom, customTo }), 'sessionStorage');
  }

  function restore() {
    try {
      const saved = JSON.parse(Hayyoh.readSetting(STORAGE_KEY, 'sessionStorage'));
      if (saved && Number.isInteger(saved.start) && Number.isInteger(saved.end)) {
        ({ start, end, preset } = saved);
        customFrom = saved.customFrom || '';
        customTo = saved.customTo || '';
      }
    } catch (error) {
      return;
    }
  }

  function setWindow(nextStart, nextEnd, nextPreset) {
    start = Math.max(0, nextStart);
    end = Math.min(lastWeek(), nextEnd);
    if (end < start) {
      end = start;
    }
    preset = nextPreset;
    save();
    Hayyoh.emit('periodchange', current());
  }

  function applyPreset(name) {
    const [presetStart, presetEnd] = presets[name];
    setWindow(presetStart, presetEnd, name);
  }

  function applyCustomRange(from, to) {
    const dates = weeks().dates;
    let rangeStart = 0;
    let rangeEnd = lastWeek();
    for (let index = 0; index < dates.length; index += 1) {
      if (dates[index] >= from) {
        rangeStart = index;
        break;
      }
    }
    for (let index = dates.length - 1; index >= 0; index -= 1) {
      if (dates[index] <= to) {
        rangeEnd = index;
        break;
      }
    }
    customFrom = from;
    customTo = to;
    setWindow(rangeStart, rangeEnd, 'custom');
  }

  function initializePicker() {
    restore();
    const trigger = document.getElementById('period-trigger');
    const menu = document.getElementById('period-menu');
    if (!trigger || !menu) {
      return;
    }
    const triggerLabel = document.getElementById('period-label');
    const customPanel = document.getElementById('period-custom');
    const fromInput = document.getElementById('period-from');
    const toInput = document.getElementById('period-to');
    const error = document.getElementById('period-error');
    const applyButton = document.getElementById('period-apply');
    const cancelButton = document.getElementById('period-cancel');
    const options = [...menu.querySelectorAll('.period-option')];
    let choosingCustom = false;

    function markSelection() {
      const selected = choosingCustom ? 'custom' : preset;
      options.forEach((option) => {
        const isSelected = option.dataset.period === selected;
        option.setAttribute('aria-checked', String(isSelected));
        option.tabIndex = isSelected ? 0 : -1;
      });
    }

    function updateTriggerLabel() {
      triggerLabel.textContent = label();
    }

    function resetCustomInputs() {
      fromInput.value = customFrom || fromInput.min;
      toInput.value = customTo || toInput.max;
    }

    function validateRange() {
      const from = fromInput.value;
      const to = toInput.value;
      let message = '';
      if (!from || !to) {
        message = Hayyoh.i18n.t('periodIncomplete');
      } else if (from > to) {
        message = Hayyoh.i18n.t('periodEndBeforeStart');
      } else if (from < fromInput.min || to > toInput.max) {
        message = Hayyoh.i18n.t('periodOutOfRange');
      }
      error.textContent = message;
      error.hidden = !message;
      applyButton.disabled = Boolean(message);
      return !message;
    }

    function openMenu() {
      choosingCustom = false;
      resetCustomInputs();
      customPanel.hidden = preset !== 'custom';
      if (preset === 'custom') {
        validateRange();
      }
      markSelection();
      menu.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(() => (options.find((option) => option.tabIndex === 0) || options[0]).focus({ preventScroll: true }));
    }

    function closeMenu(restoreFocus = true) {
      if (menu.hidden) {
        return;
      }
      choosingCustom = false;
      menu.hidden = true;
      error.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
      markSelection();
      if (restoreFocus) {
        trigger.focus({ preventScroll: true });
      }
    }

    trigger.addEventListener('click', () => (menu.hidden ? openMenu() : closeMenu()));

    menu.addEventListener('click', (event) => {
      const option = event.target.closest('.period-option');
      if (!option) {
        return;
      }
      if (option.dataset.period === 'custom') {
        choosingCustom = true;
        markSelection();
        customPanel.hidden = false;
        resetCustomInputs();
        validateRange();
        fromInput.focus();
        return;
      }
      applyPreset(option.dataset.period);
      closeMenu();
    });

    menu.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        closeMenu();
        return;
      }
      const index = options.indexOf(document.activeElement);
      if (index < 0) {
        return;
      }
      const moves = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
      if (moves[event.key]) {
        event.preventDefault();
        options[(index + moves[event.key] + options.length) % options.length].focus();
      } else if (event.key === 'Home') {
        event.preventDefault();
        options[0].focus();
      } else if (event.key === 'End') {
        event.preventDefault();
        options[options.length - 1].focus();
      }
    });

    [fromInput, toInput].forEach((input) => {
      input.addEventListener('input', validateRange);
      input.addEventListener('change', validateRange);
    });

    applyButton.addEventListener('click', () => {
      if (validateRange()) {
        applyCustomRange(fromInput.value, toInput.value);
        closeMenu();
      }
    });

    cancelButton.addEventListener('click', () => closeMenu());

    document.addEventListener('click', (event) => {
      if (!menu.hidden && !event.target.closest('#period-picker')) {
        closeMenu(false);
      }
    });

    Hayyoh.on('periodchange', updateTriggerLabel);
    Hayyoh.on('languagechange', () => {
      updateTriggerLabel();
      if (!error.hidden) {
        validateRange();
      }
    });
    updateTriggerLabel();
    markSelection();
  }

  Hayyoh.onReady(initializePicker);

  return { current, label, applyPreset, applyCustomRange };
})();

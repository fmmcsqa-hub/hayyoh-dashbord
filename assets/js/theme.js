Hayyoh.theme = (() => {
  const STORAGE_KEY = 'dashboard-theme-preference';
  const root = document.documentElement;
  let hasExplicitChoice = ['light', 'dark'].includes(Hayyoh.readSetting(STORAGE_KEY));

  function current() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function updateThemeButton() {
    const button = document.getElementById('theme-toggle');
    if (!button) {
      return;
    }
    const isDark = current() === 'dark';
    const actionLabel = Hayyoh.i18n.t(isDark ? 'switchToLight' : 'switchToDark');
    button.setAttribute('aria-label', actionLabel);
    button.title = actionLabel;
    button.querySelector('.icon-sun').hidden = !isDark;
    button.querySelector('.icon-moon').hidden = isDark;
    const status = document.getElementById('theme-status');
    if (status) {
      status.textContent = Hayyoh.i18n.t(isDark ? 'darkModeActive' : 'lightModeActive');
    }
  }

  function applyTheme(theme, persist = false) {
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    root.setAttribute('data-theme', nextTheme);
    root.style.colorScheme = nextTheme;
    if (persist) {
      hasExplicitChoice = true;
      Hayyoh.writeSetting(STORAGE_KEY, nextTheme);
    }
    updateThemeButton();
    Hayyoh.emit('themechange', nextTheme);
  }

  function followSystemTheme() {
    const query = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    if (!query || !query.addEventListener) {
      return;
    }
    query.addEventListener('change', (event) => {
      if (!hasExplicitChoice) {
        applyTheme(event.matches ? 'dark' : 'light');
      }
    });
  }

  function initializeTheme() {
    updateThemeButton();
    followSystemTheme();
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.addEventListener('click', () => applyTheme(current() === 'dark' ? 'light' : 'dark', true));
    }
    Hayyoh.on('languagechange', updateThemeButton);
  }

  Hayyoh.onReady(initializeTheme);

  return { current, applyTheme };
})();

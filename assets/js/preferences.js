(function () {
  var root = document.documentElement;

  function read(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  var theme = read('dashboard-theme-preference');
  if (theme !== 'light' && theme !== 'dark') {
    var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    theme = prefersLight ? 'light' : 'dark';
  }
  root.setAttribute('data-theme', theme);
  root.style.colorScheme = theme;

  if (read('dashboard-language-preference') === 'ar') {
    root.lang = 'ar';
    root.dir = 'rtl';
  }

  if (read('dashboard-sidebar-preference') === 'collapsed') {
    root.setAttribute('data-sidebar', 'collapsed');
  }
})();

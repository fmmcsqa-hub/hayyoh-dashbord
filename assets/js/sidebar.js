Hayyoh.sidebar = (() => {
  const STORAGE_KEY = 'dashboard-sidebar-preference';
  const root = document.documentElement;
  const mobileQuery = window.matchMedia('(max-width: 767px)');
  let returnFocusTo = null;

  const sidebar = () => document.getElementById('sidebar');
  const overlay = () => document.getElementById('sidebar-overlay');
  const menuButton = () => document.getElementById('menu-toggle');

  function isOpen() {
    return sidebar().classList.contains('is-open');
  }

  function openDrawer() {
    returnFocusTo = document.activeElement;
    sidebar().classList.add('is-open');
    overlay().classList.add('is-visible');
    root.setAttribute('data-nav-open', '');
    menuButton().setAttribute('aria-expanded', 'true');
    const firstLink = sidebar().querySelector('.nav-link');
    if (firstLink) {
      firstLink.focus({ preventScroll: true });
    }
  }

  function closeDrawer() {
    if (!isOpen()) {
      return;
    }
    sidebar().classList.remove('is-open');
    overlay().classList.remove('is-visible');
    root.removeAttribute('data-nav-open');
    menuButton().setAttribute('aria-expanded', 'false');
    (returnFocusTo && document.contains(returnFocusTo) ? returnFocusTo : menuButton()).focus({ preventScroll: true });
  }

  function isCollapsed() {
    return root.getAttribute('data-sidebar') === 'collapsed';
  }

  function updateCollapseButton() {
    const button = document.getElementById('sidebar-collapse');
    if (!button) {
      return;
    }
    const actionLabel = Hayyoh.i18n.t(isCollapsed() ? 'expandSidebar' : 'collapseSidebar');
    button.setAttribute('aria-pressed', String(isCollapsed()));
    button.setAttribute('aria-label', actionLabel);
    button.title = actionLabel;
  }

  function setCollapsed(collapsed) {
    if (collapsed) {
      root.setAttribute('data-sidebar', 'collapsed');
    } else {
      root.removeAttribute('data-sidebar');
    }
    Hayyoh.writeSetting(STORAGE_KEY, collapsed ? 'collapsed' : 'expanded');
    updateCollapseButton();
    setTimeout(Hayyoh.charts.resizeAll, 220);
  }

  function updateLinkTitles() {
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.title = link.querySelector('.nav-label').textContent.trim();
    });
  }

  function initializeSidebar() {
    if (!sidebar()) {
      return;
    }
    menuButton().addEventListener('click', () => (isOpen() ? closeDrawer() : openDrawer()));
    document.getElementById('sidebar-close').addEventListener('click', closeDrawer);
    overlay().addEventListener('click', closeDrawer);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && isOpen()) {
        closeDrawer();
      }
    });
    mobileQuery.addEventListener('change', (event) => {
      if (!event.matches) {
        closeDrawer();
      }
    });

    const collapseButton = document.getElementById('sidebar-collapse');
    if (collapseButton) {
      collapseButton.addEventListener('click', () => setCollapsed(!isCollapsed()));
    }

    updateCollapseButton();
    updateLinkTitles();
    Hayyoh.on('languagechange', () => {
      updateCollapseButton();
      updateLinkTitles();
    });
  }

  Hayyoh.onReady(initializeSidebar);

  return { openDrawer, closeDrawer, setCollapsed };
})();

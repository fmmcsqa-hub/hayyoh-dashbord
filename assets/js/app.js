const Hayyoh = (() => {
  const listeners = {};
  const initializers = [];
  let page = { details: {}, render() {} };

  function on(eventName, handler) {
    (listeners[eventName] = listeners[eventName] || []).push(handler);
  }

  function emit(eventName, detail) {
    (listeners[eventName] || []).forEach((handler) => handler(detail));
  }

  function readSetting(key, storage = 'localStorage') {
    try {
      return window[storage].getItem(key);
    } catch (error) {
      return null;
    }
  }

  function writeSetting(key, value, storage = 'localStorage') {
    try {
      window[storage].setItem(key, value);
    } catch (error) {
      return;
    }
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[character]);
  }

  function onReady(initializer) {
    initializers.push(initializer);
  }

  function registerPage(definition) {
    page = { details: {}, render() {}, ...definition };
  }

  function currentPage() {
    return page;
  }

  document.addEventListener('DOMContentLoaded', () => {
    initializers.forEach((initializer) => initializer());
  });

  return { on, emit, readSetting, writeSetting, escapeHtml, onReady, registerPage, currentPage };
})();

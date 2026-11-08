(() => {
  'use strict';

  const translations = {
    it: { flag: '🇮🇹', name: 'Italiano', home: 'Home', body: 'Body Inspector', lens: 'Lens Inspector', language: 'Lingua', newInspection: 'Nuova ispezione', export: 'Esporta JSON', import: 'Importa JSON', report: 'Rapporto PDF', all: 'Tutti i controlli', open: 'Apri strumento', offline: 'Offline e senza tracciamento', inspect: 'Verifica prima di acquistare.' },
    en: { flag: '🇬🇧', name: 'English', home: 'Home', body: 'Body Inspector', lens: 'Lens Inspector', language: 'Language', newInspection: 'New inspection', export: 'Export JSON', import: 'Import JSON', report: 'PDF report', all: 'All checks', open: 'Open tool', offline: 'Offline and no tracking', inspect: 'Inspect before you buy.' },
    es: { flag: '🇪🇸', name: 'Español', home: 'Inicio', body: 'Body Inspector', lens: 'Lens Inspector', language: 'Idioma', newInspection: 'Nueva inspección', export: 'Exportar JSON', import: 'Importar JSON', report: 'Informe PDF', all: 'Todos los controles', open: 'Abrir herramienta', offline: 'Sin conexión y sin seguimiento', inspect: 'Comprueba antes de comprar.' },
    de: { flag: '🇩🇪', name: 'Deutsch', home: 'Startseite', body: 'Body Inspector', lens: 'Lens Inspector', language: 'Sprache', newInspection: 'Neue Prüfung', export: 'JSON exportieren', import: 'JSON importieren', report: 'PDF-Bericht', all: 'Alle Prüfungen', open: 'Tool öffnen', offline: 'Offline und ohne Tracking', inspect: 'Prüfe vor dem Kauf.' },
    zh: { flag: '🇨🇳', name: '简体中文', home: '首页', body: 'Body Inspector', lens: 'Lens Inspector', language: '语言', newInspection: '新建检查', export: '导出 JSON', import: '导入 JSON', report: 'PDF 报告', all: '全部检查', open: '打开工具', offline: '离线使用且无跟踪', inspect: '购买前先检查。' }
  };

  const localeKey = () => localStorage.getItem('photo-utils-locale') || document.documentElement.lang || 'it';
  const t = (key) => (translations[localeKey()] || translations.it)[key] || translations.it[key] || key;
  const linkFor = (tool) => tool === 'body' ? 'body_inspector.html' : tool === 'lens' ? 'lens_inspector.html' : 'index.html';

  function logoMarkup() { return '<img src="assets/logo.svg" alt="Photo Utils" width="42" height="42">'; }
  function switcherMarkup(tool) {
    const current = localeKey();
    return `<nav class="pu-switcher" aria-label="${t('home')}"><a href="index.html">${t('home')}</a><a href="body_inspector.html" ${tool === 'body' ? 'aria-current="page"' : ''}>${t('body')}</a><a href="lens_inspector.html" ${tool === 'lens' ? 'aria-current="page"' : ''}>${t('lens')}</a><div class="pu-language"><label for="pu-locale">${t('language')}</label><select id="pu-locale" aria-label="${t('language')}">${Object.entries(translations).map(([key, value]) => `<option value="${key}" ${key === current ? 'selected' : ''}>${value.flag} ${value.name}</option>`).join('')}</select></div></nav>`;
  }
  function illustrationKind(card) {
    const value = `${card.dataset.id || ''} ${card.dataset.category || ''}`.toLowerCase();
    if (/sensor|dust|pixel|band|color|front|fungus|flare/.test(value)) return 'optic';
    if (/af|focus|shoot|meter|exposure|burst|stabil|shutter|image/.test(value)) return 'focus';
    if (/screen|lcd|display|evf|ovf|touch|port|slot|wifi|contact|flash|video/.test(value)) return 'interface';
    if (/battery|charge|power|reliab|startup|firmware|longuse/.test(value)) return 'power';
    return 'mechanic';
  }
  function illustrationSvg(kind) {
    const colors = { optic: ['#2563eb','#14b8a6'], focus: ['#ec4899','#f59e0b'], interface: ['#0f766e','#38bdf8'], power: ['#f59e0b','#ef4444'], mechanic: ['#475569','#8b5cf6'] };
    const [main, accent] = colors[kind] || colors.mechanic;
    const shapes = {
      optic: `<circle cx="50" cy="50" r="29" fill="#17243d" stroke="${main}" stroke-width="6"/><circle cx="50" cy="50" r="16" fill="${accent}"/><circle cx="44" cy="44" r="6" fill="#dffcff" opacity=".8"/>`,
      focus: `<path d="M20 68 35 33h30l15 35" fill="none" stroke="${main}" stroke-width="7" stroke-linejoin="round"/><circle cx="50" cy="49" r="13" fill="${accent}"/><path d="M28 75h44" stroke="#17243d" stroke-width="6" stroke-linecap="round"/>`,
      interface: `<rect x="20" y="22" width="60" height="52" rx="8" fill="#17243d"/><rect x="28" y="30" width="44" height="29" rx="3" fill="${accent}"/><path d="M37 67h26" stroke="${main}" stroke-width="6" stroke-linecap="round"/><circle cx="65" cy="66" r="3" fill="#fff"/>`,
      power: `<rect x="28" y="24" width="44" height="52" rx="7" fill="#17243d" stroke="${main}" stroke-width="5"/><path d="M46 35 38 53h10l-4 14 18-22H52l5-10z" fill="${accent}"/>`,
      mechanic: `<circle cx="50" cy="50" r="24" fill="#17243d" stroke="${main}" stroke-width="8"/><circle cx="50" cy="50" r="8" fill="${accent}"/><path d="M50 17v9m0 48v9M17 50h9m48 0h9" stroke="${main}" stroke-width="6" stroke-linecap="round"/>`
    };
    return `<svg viewBox="0 0 100 100" role="img" aria-label="${kind}" xmlns="http://www.w3.org/2000/svg">${shapes[kind]}</svg>`;
  }
  function addSharedChrome(tool) {
    const topbar = document.querySelector('.topbar');
    if (!topbar || topbar.querySelector('.pu-switcher')) return;
    const actions = topbar.querySelector('.top-actions');
    const fragment = document.createElement('div');
    fragment.innerHTML = switcherMarkup(tool);
    topbar.insertBefore(fragment.firstElementChild, actions || null);
  }
  function addIllustrations() {
    document.querySelectorAll('.test-card').forEach((card) => {
      if (card.querySelector('.control-visual')) return;
      const visual = document.createElement('div');
      const kind = illustrationKind(card);
      visual.className = 'control-visual';
      visual.dataset.illustration = kind;
      visual.innerHTML = illustrationSvg(kind);
      const head = card.querySelector('.test-head');
      if (head) head.appendChild(visual);
    });
  }
  function translateButtons() {
    const map = { '＋ Nuova ispezione': 'newInspection', '⇩ Esporta JSON': 'export', '⇧ Importa JSON': 'import', '▤ Rapporto PDF': 'report' };
    document.querySelectorAll('.top-btn').forEach((button) => { const key = map[button.textContent.trim()]; if (key) button.textContent = t(key); });
  }
  function applyLocale(tool) {
    const locale = localeKey();
    document.documentElement.lang = locale;
    document.querySelectorAll('[data-shared]').forEach((node) => { node.textContent = t(node.dataset.shared); });
    const select = document.querySelector('#pu-locale');
    if (select) select.value = locale;
    translateButtons();
    const subtitle = document.querySelector('.brand-sub');
    if (subtitle && locale !== 'it') subtitle.textContent = t('inspect');
    document.querySelectorAll('.pu-switcher').forEach((node) => { node.outerHTML = switcherMarkup(tool); });
    document.querySelector('#pu-locale')?.addEventListener('change', (event) => { localStorage.setItem('photo-utils-locale', event.target.value); location.reload(); });
  }
  function init({ tool = 'home' } = {}) {
    addSharedChrome(tool);
    addIllustrations();
    applyLocale(tool);
  }
  window.PhotoUtils = { init, t, translations, illustrationSvg, linkFor };
  document.addEventListener('DOMContentLoaded', () => init({ tool: document.body.dataset.tool || 'home' }));
})();

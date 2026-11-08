#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
for file in index.html body_inspector.html lens_inspector.html shared.css shared.js assets/logo.svg site.webmanifest README.md .nojekyll; do
  test -f "$root/$file"
done

grep -q 'shared.css' "$root/index.html"
grep -q 'shared.js' "$root/index.html"
grep -q 'data-tool="home"' "$root/index.html"
grep -q 'data-tool="body"' "$root/body_inspector.html"
grep -q 'data-tool="lens"' "$root/lens_inspector.html"
grep -q 'Add to Home Screen' "$root/README.md"
grep -q "en: { flag: '🇬🇧', name: 'English'" "$root/shared.js"
grep -q 'const checklistTranslations' "$root/shared.js"
grep -q 'const operationalTranslations' "$root/shared.js"
grep -q "'Superficie del sensore'" "$root/shared.js"
grep -q "'Lenti e trattamenti'" "$root/shared.js"
grep -q "Spegni la fotocamera. Rimuovi l'obiettivo solo in ambiente pulito" "$root/shared.js"
grep -q 'Rimuovi i tappi e osserva frontalmente e lateralmente' "$root/shared.js"
grep -q "flag: '🇮🇹'" "$root/shared.js"
grep -q 'Photo Utils is' "$root/README.md"

node - "$root/shared.js" <<'NODE'
const fs = require('fs');
const vm = require('vm');
const source = fs.readFileSync(process.argv[2], 'utf8');
const context = {
  window: {},
  document: { documentElement: { lang: 'it' }, addEventListener() {} },
  localStorage: { getItem() { return null; } },
  NodeFilter: { SHOW_TEXT: 4 },
  MutationObserver: function () {},
};
vm.runInNewContext(source, context, { filename: 'shared.js' });
const catalogs = context.window.PhotoUtils.catalogs;
test(catalogs, 'shared catalogs are exported');
for (const name of ['translations', 'uiTranslations', 'checklistTranslations', 'commonUiTranslations']) {
  test(catalogs[name], `${name} exists`);
  for (const locale of ['en', 'es', 'de', 'zh']) test(catalogs[name][locale], `${name}.${locale} exists`);
}
const required = {
  uiTranslations: ['Valutazione', 'Conferma', 'Da fare', 'Come eseguire il controllo', 'Apri istruzioni', 'Chiudi istruzioni'],
  checklistTranslations: ['Superficie del sensore', 'Lenti e trattamenti'],
  operationalTranslations: [
    "Spegni la fotocamera. Rimuovi l'obiettivo solo in ambiente pulito e osserva con luce morbida, senza toccare il sensore.",
    'Rimuovi i tappi e osserva frontalmente e lateralmente le lenti anteriore e posteriore, con luce morbida.'
  ],
  commonUiTranslations: ['Aggiungi una nota o un’anomalia…', 'Punteggio per'],
};
for (const [catalog, keys] of Object.entries(required)) {
  for (const key of keys) for (const locale of ['en', 'es', 'de', 'zh']) {
    test(typeof catalogs[catalog][locale][key] === 'string' && catalogs[catalog][locale][key].length > 0, `${catalog}.${locale}.${key}`);
  }
}
const html = file => fs.readFileSync(file, 'utf8');
const text = value => value.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
const extracted = new Set();
for (const file of ['body_inspector.html', 'lens_inspector.html']) {
  const source = html(`${require('path').dirname(process.argv[2])}/${file}`);
  for (const match of source.matchAll(/<div class="test-copy">[\s\S]*?<p>([\s\S]*?)<\/p>/g)) extracted.add(text(match[1]));
  for (const match of source.matchAll(/<li>([\s\S]*?)<\/li>/g)) extracted.add(text(match[1]));
  for (const match of source.matchAll(/<div class="help-side">[\s\S]*?<p>([\s\S]*?)<\/p>/g)) extracted.add(text(match[1]));
  for (const match of source.matchAll(/<section class="financial">[\s\S]*?<div class="panel-h">([\s\S]*?)<\/div>/g)) extracted.add(text(match[1]));
  for (const match of source.matchAll(/<section class="financial">[\s\S]*?<span>([\s\S]*?)<\/span>/g)) if (text(match[1]) !== '€') extracted.add(text(match[1]));
  for (const match of source.matchAll(/<section class="financial">[\s\S]*?<b>([\s\S]*?)<\/b>/g)) extracted.add(text(match[1]));
  for (const match of source.matchAll(/<section class="financial">[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g)) extracted.add(text(match[1]));
  for (const match of source.matchAll(/<div class="profile-heading">[\s\S]*?<h2>([\s\S]*?)<\/h2>/g)) extracted.add(text(match[1]));
  for (const match of source.matchAll(/<div class="profile-heading">[\s\S]*?<div class="subnote">([\s\S]*?)<\/div>/g)) extracted.add(text(match[1]));
  for (const match of source.matchAll(/<section class="intro-panel">[\s\S]*?<p>([\s\S]*?)<\/p>/g)) extracted.add(text(match[1]));
}
for (const key of extracted) {
  test(catalogs.operationalTranslations.it[key] === key, `operationalTranslations.it.${key}`);
  for (const locale of ['en', 'es', 'de', 'zh']) {
    const value = catalogs.operationalTranslations[locale][key];
    test(typeof value === 'string' && value.length > 0, `operationalTranslations.${locale}.${key}`);
    test(!/^\s*(EN|ES|DE|ZH):/.test(value), `operationalTranslations.${locale}.${key} has no placeholder`);
    test(value !== key, `operationalTranslations.${locale}.${key} is localized`);
  }
}
test(catalogs.operationalTranslations.zh["Su DSLR non azionare lo specchio a mano: usa soltanto la procedura di ispezione prevista dal produttore e una batteria carica."], 'zh distinctive DSLR instruction');
function test(value, message) {
  if (!value) throw new Error(`catalog coverage: ${message}`);
}
NODE

grep -q 'querySelectorAll.*test-card' "$root/shared.js"
grep -q 'dataset.illustration' "$root/shared.js"

echo 'site contract: ok'

# Photo Utils

[![Static HTML](https://img.shields.io/badge/site-static%20HTML-2563eb)](https://pages.github.com/)
[![Offline first](https://img.shields.io/badge/privacy-offline%20first-14b8a6)](https://github.com/)
[![Languages](https://img.shields.io/badge/languages-IT%20%7C%20EN%20%7C%20ES%20%7C%20DE%20%7C%20ZH-f59e0b)](https://github.com/)

Photo Utils è una piccola raccolta di strumenti gratuiti per controllare attrezzatura fotografica usata prima dell'acquisto. Tutto gira nel browser: nessun account, nessun servizio esterno, nessun tracciamento.

## Strumenti

- [Body Inspector](body_inspector.html): checklist per corpi macchina fotografici, con valutazione tecnica ed economica.
- [Lens Inspector](lens_inspector.html): checklist per obiettivi, con controlli ottici, meccanici, elettronici e di resa.

La [home](index.html) raccoglie i due strumenti e permette di passare rapidamente da uno all'altro. Le pagine supportano italiano, inglese, spagnolo, tedesco e cinese semplificato.

## Uso locale

Apri `index.html` direttamente nel browser oppure servi questa cartella con un server statico. Le ispezioni vengono conservate nel local storage del browser e possono essere esportate in JSON o stampate in PDF.

## Pubblicare su GitHub Pages

1. Crea un repository pubblico e carica il contenuto di questa cartella nel branch pubblicato.
2. In **Settings > Pages**, scegli la sorgente GitHub Actions oppure il branch e la cartella `/root`.
3. Apri l'URL generato da GitHub Pages: i link relativi funzionano anche quando il repository viene pubblicato sotto un sottopercorso.

Non serve una fase di build: GitHub Pages pubblica direttamente i file HTML, CSS, JavaScript e SVG locali.

## Installare come icona su iOS

Su iPhone o iPad apri la pagina in **Safari**, tocca **Condividi**, scegli **Aggiungi alla schermata Home** (*Add to Home Screen*) e conferma. La pagina si può così salvare come icona di app e riaprire rapidamente come utility, soprattutto dopo averla pubblicata su GitHub Pages.

## Struttura

- `index.html`: home pubblica.
- `body_inspector.html` e `lens_inspector.html`: utility offline.
- `shared.css` e `shared.js`: branding, navigazione, lingue e illustrazioni locali.
- `assets/logo.svg` e `site.webmanifest`: identità e metadati installabili.

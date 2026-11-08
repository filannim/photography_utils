# Photo Utils Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Publish the body and lens inspectors as a coherent, multilingual, GitHub Pages-ready static toolkit.

**Architecture:** Add a shared stylesheet and small shared JavaScript layer for branding, locale selection, navigation, and control illustrations. Keep each existing inspector's domain logic inline and add only stable hooks/metadata around it. Add a static home page, manifest, local SVG logo, and README.

**Tech Stack:** Dependency-free HTML, CSS, vanilla JavaScript, local SVG, GitHub Pages.

**Spec:** `docs/superpowers/specs/photo-utils-pages.md`

## Global Constraints
- Use local stylized SVG illustrations; do not introduce remote image/CDN dependencies.
- Preserve offline behavior and existing scoring/local-storage behavior.
- Support `it`, `en`, `es`, `de`, and `zh` in the shared locale selector.
- Keep every page directly openable without a build step.
- README must explicitly explain saving the page as an iOS app icon.

## Review Focus
- Opening any page directly from disk must still load shared assets and retain core controls.
- Switching language must persist and update shared labels without corrupting saved inspections.
- Tool navigation must work from both inspectors and the landing page.
- SVG illustrations must remain decorative/accessibly labelled and must not destabilize responsive cards.
- Manifest and relative links must work from a GitHub Pages project subpath.

### Task 1: Shared presentation layer

**Files:**
- Create: `shared.css`
- Create: `shared.js`
- Create: `assets/logo.svg`
- Create: `site.webmanifest`
- Modify: `body_inspector.html`, `lens_inspector.html`

**Interfaces:**
- `shared.js` exposes `PhotoUtils.init({ tool, localeRoot })` through a global script.
- Pages provide `data-tool`, `data-locale`, `data-illustration`, and `data-i18n` hooks.

- [ ] Add shared CSS tokens, responsive top navigation, locale control, tool switcher, illustration frame, and focus states.
- [ ] Add the local SVG logo and manifest with relative icons/name/theme metadata.
- [ ] Add shared JS locale dictionaries for common chrome, localStorage-backed language preference, relative tool links, and deterministic inline SVG illustrations for each control category.
- [ ] Add shared stylesheet/script/manifest references and common topbar hooks to both inspectors without changing their scoring code.
- [ ] Add an illustration slot to every `.test-card`, using its control id/category as the local illustration key and preserving the existing text as the accessible name.
- [ ] Verify both inspectors open as files and still expose existing controls, storage, and print actions.

### Task 2: Landing page

**Files:**
- Create: `index.html`
- Modify: `shared.js`, `shared.css` if needed

**Interfaces:**
- Uses the same `PhotoUtils.init` locale/navigation contract as the inspectors.

- [ ] Build a responsive landing page with shared logo, concise multilingual description, two utility cards, local illustrations, links, feature badges, and offline/privacy messaging.
- [ ] Add language selector and tool navigation consistent with the inspectors.
- [ ] Verify both cards link correctly using relative paths suitable for GitHub Pages subpaths.

### Task 3: Documentation and publication metadata

**Files:**
- Create: `README.md`
- Create: `.nojekyll`

- [ ] Document the two utilities, supported languages, offline behavior, GitHub Pages publication steps, and the explicit iOS instruction: open in Safari, use Share, then “Add to Home Screen” to save it as an app icon.
- [ ] Add modern repository badges that do not require a build service, plus a clear file map and usage notes.
- [ ] Add `.nojekyll` so static assets publish predictably.

### Task 4: Verification

**Files:**
- No new source files.

- [ ] Run HTML/script sanity checks for duplicate ids, missing referenced local assets, and malformed tags.
- [ ] Serve the folder locally and verify index, both inspectors, locale switching, tool navigation, illustration rendering, and responsive layout in a browser.
- [ ] Check the final diff for unrelated changes and confirm no remote asset dependency was introduced.

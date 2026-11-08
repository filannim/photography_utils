# Inspection Actions Menu Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Move import/export controls below the area-quality panel and consolidate them into an export menu plus an import button.

**Architecture:** Keep the existing button IDs and inline export/import handlers unchanged. Replace the header controls in both inspectors with a compact action group placed after the quality panel; use native `<details>` for the format menu and existing locale translation hooks for labels.

**Tech Stack:** Static HTML, inline CSS, vanilla JavaScript.

**Spec:** User-approved proposal in conversation.

## Global Constraints

- Preserve JSON, PDF, TXT, and JSON import behavior.
- Keep Body Inspector and Lens Inspector visually and behaviorally aligned.
- Do not stage or modify the user-edited README.
- Keep the site offline and dependency-free.

## Review Focus

- Existing handlers must still find their original IDs.
- Export menu must work on desktop and narrow/mobile layouts.
- Import must remain visually separate from export formats.
- Labels must pass through the existing locale system.

---

### Task 1: Relocate inspection actions

**Files:**
- Modify: `body_inspector.html`
- Modify: `lens_inspector.html`
- Modify: `shared.js` only if labels require new locale keys

- [ ] Replace header JSON/PDF/TXT/import buttons with only the new-inspection button.
- [ ] Add an export `<details>` menu and import button after the quality-by-area panel, preserving existing IDs.
- [ ] Add responsive styling for the action group and menu.
- [ ] Validate syntax, static contract, and browser behavior for both inspectors.

# Photo Utils Pages Design

## Goal
Turn the two offline photography checklists into a small, multilingual, GitHub Pages-ready toolkit for inspecting used camera bodies and lenses.

## Decisions
- Use local, stylized SVG illustrations rather than remote photography.
- Keep the project dependency-free and directly openable as static HTML.
- Add `index.html` as the public landing page and shared navigation to both utilities.
- Support Italian, English, Spanish, German, and Simplified Chinese through a shared client-side locale layer.
- Preserve the existing scoring and local-storage engines; add presentation and translated labels around them.
- Add a web app manifest, local brand assets, GitHub Pages instructions, and an explicit iOS home-screen installation note.

## Scope
The shared layer owns visual tokens, navigation, locale selection, illustration assignment, and common metadata. Each inspector keeps its domain-specific controls and calculations. Illustrations are compact local SVGs assigned by control id or category and are decorative but accessible through text alternatives.

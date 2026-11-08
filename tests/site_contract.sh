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
grep -q "en: { name: 'English'" "$root/shared.js"

grep -q 'querySelectorAll.*test-card' "$root/shared.js"
grep -q 'dataset.illustration' "$root/shared.js"

echo 'site contract: ok'

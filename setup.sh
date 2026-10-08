#!/usr/bin/env bash
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
DIST="$ROOT/dist/markdown-resume-builder"
rm -rf "$DIST"
mkdir -p "$DIST/templates" "$DIST/.well-known"
cp "$ROOT/index.html" "$ROOT/style.css" "$ROOT/script.js" "$ROOT/README.md" "$ROOT/LICENSE" "$ROOT/.gitignore" "$ROOT/robots.txt" "$ROOT/sitemap.xml" "$ROOT/manifest.json" "$ROOT/humans.txt" "$ROOT/favicon.svg" "$ROOT/og-image.svg" "$DIST/"
cp "$ROOT"/templates/*.css "$ROOT"/templates/*.md "$DIST/templates/"
cp "$ROOT/.well-known/security.txt" "$DIST/.well-known/security.txt"
cd "$ROOT/dist"
rm -f markdown-resume-builder.zip
zip -qr markdown-resume-builder.zip markdown-resume-builder
printf '%s\n' "Created: $DIST" "Created: $ROOT/dist/markdown-resume-builder.zip"

# CLAUDE.md

## Project overview

Personal portfolio website for Phil Powell, Fractional CTO. A multi-page static site served via GitHub Pages at feef.io.

## Tech stack

- Pure HTML5 — no build tools, no framework, no package manager
- Plain CSS with custom properties (CSS variables) — no Tailwind, no preprocessor
- Shared design system in `css/site.css` (tokens, nav, callouts, noise overlay)
- Fraunces (variable, via Google Fonts CDN) for headings/display
- System font stack (`-apple-system, BlinkMacSystemFont, …`) for body text
- Vanilla JS (one line: auto-populates copyright year in `index.html`)

## Running locally

```bash
python -m http.server 8000
# or
npx http-server
```

No build step. Open `http://localhost:8000` in a browser.

## Deployment

Push to `master` → GitHub Actions workflow (`.github/workflows/static.yml`) deploys to GitHub Pages. Live within seconds. Custom domain configured via `CNAME` (feef.io).

## File structure

```
index.html              # Main portfolio page
writing/index.html      # Writing index
roadmap/index.html      # "Why Your Roadmap Keeps Slipping" web book
css/site.css            # Shared design system — tokens, nav, callouts, noise overlay
CNAME                   # feef.io
.github/workflows/      # GitHub Actions Pages deploy
```

## Conventions

- All styling via custom CSS properties defined in `:root` blocks. No utility-class framework.
- Dark mode via `prefers-color-scheme: dark` media query — NOT a forced `class="dark"`. Pages respond to the user's system preference.
- Color palette (warm tones): `--paper` (background), `--ink` (foreground), `--ink-soft` (muted), `--rule` (borders), `--accent` (amber). Light and dark values set via media query.
- Shared tokens (nav, callouts) live in `css/site.css` and are used across all pages.
- Page-specific tokens and layout styles are in inline `<style>` blocks within each HTML file.
- Fraunces is used for display/heading type; system fonts for body.
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>` with proper heading hierarchy (h1 → h2 → h3).
- Accessibility: ARIA labels, focus-visible rings, `prefers-reduced-motion` support in `site.css`, `rel="noopener noreferrer"` on external links.
- Content tone: British English, professional, direct, understated.

## What not to do

- Don't introduce a build system, bundler, or package.json — the zero-dependency approach is intentional.
- Don't use a CSS framework or CDN stylesheet (no Tailwind, no Bootstrap) — the hand-written CSS is intentional.
- Don't add a local font directory — fonts are loaded via Google Fonts CDN.

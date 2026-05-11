# CLAUDE.md

## Project overview

Personal portfolio website for Phil Powell, Fractional CTO. A single-page static site served via GitHub Pages at feef.io.

## Tech stack

- Pure HTML5 — no build tools, no framework, no package manager
- Tailwind CSS via CDN (`https://cdn.tailwindcss.com`) configured for dark mode
- Custom CSS in `css/feef.css` (minimal — mostly superseded by Tailwind)
- Inter font (WOFF/WOFF2) served locally from `fonts/inter-3.3/`
- Vanilla JS (one function: auto-populates copyright year)

## Running locally

```bash
python -m http.server 8000
# or
npx http-server
```

No build step. Open `http://localhost:8000` in a browser.

## Deployment

Push to `master` → GitHub Pages auto-deploys. Live within seconds. Custom domain configured via `CNAME` (feef.io).

## File structure

```
index.html      # Entire site — all content, structure, and inline styles
css/feef.css    # Legacy custom CSS (minimal)
fonts/          # Inter SemiBold WOFF/WOFF2
CNAME           # feef.io
```

## Conventions

- All styling via Tailwind utility classes. Dark mode uses `dark:` variants; `<html>` has `class="dark"` hardcoded.
- Color palette: slate (backgrounds/text) + amber (accent).
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>` with proper heading hierarchy (h1 → h2 → h3).
- Accessibility: ARIA labels, focus-visible rings, `prefers-reduced-motion` support, `rel="noopener noreferrer"` on external links.
- Content tone: British English, professional, direct, understated.

## What not to do

- Don't introduce a build system, bundler, or package.json — the zero-dependency approach is intentional.
- Don't switch from CDN Tailwind to a local build — no build pipeline exists.
- Don't add pages — this is a single-page site by design.

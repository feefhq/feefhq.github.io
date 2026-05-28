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

## CTA, Analytics & Sharing Work (current focus)

### Goal

Add CTAs across the book to encourage sharing and professional connection,
plus privacy-friendly analytics. Restraint is deliberate — senior readers
(engineering + business leaders) reward a few well-placed asks over many.
Only two of the touchpoints below actively ask; the rest are ambient.

### CTA placement map

- **Two-thirds inline** (after the strongest chapter): leads with SHARE,
  with a quiet CONNECT link underneath. Conviction peaks here; use the
  soft "if this resonates" framing.
- **End of book** (highest intent): leads with CONNECT, with SHARE as the
  immediate second line ("if someone on your team is fighting this, send
  it their way").
- **Persistent thin footer bar**: both share + connect as small equal
  links. This is the ONLY place co-equal links are acceptable, because
  it's ambient, not a decision moment.
- **About/author block** (near the end): credibility bridge, not a button.
  One paragraph + LinkedIn link.

### Sequencing principle

Share and connect matter equally, but never present them as two co-equal
buttons at a decision moment — that causes readers to do neither. Let
page position prioritize: share at conviction peaks, connect at the end.

### Voice / content discipline

- Dual audience (engineering + business leaders) — keep CTA copy legible
  to both, no jargon that excludes either.
- Main text keeps its no-named-frameworks discipline. Do not introduce
  framework names into CTA copy.
- Tone is feedback pitch, NOT launch marketing. Avoid hype, newsletter
  capture, and aggressive asks.

### Analytics: Plausible

- Privacy-friendly, cookieless, GDPR-ready — no consent banner needed
  (and a banner would clash with the feedback-pitch tone, so don't add one).
- Scroll depth is built in by default (tracked as percentage). Read it
  alongside time-on-page — scroll depth alone overcounts fast scanners.
- CTA clicks = tagged custom events on outbound links (the
  `script.tagged-events.js` variant). Every CTA link should fire a
  trackable event so we can see whether reads convert to engagement.
- Skip Google Analytics: overkill, triggers consent obligations, wrong tone.

### Hosting

- Static HTML on GitHub Pages — do not migrate. Serve the book at a clean
  dedicated path/subdomain, not buried under the portfolio one-pager.

### Working rules for edits

- Work on a branch; surface diffs for review before committing.
- Let GitHub Pages deploy only after diffs are eyeballed — don't run
  unattended.

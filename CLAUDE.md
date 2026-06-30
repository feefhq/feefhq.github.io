# CLAUDE.md

## Project overview

Personal portfolio website for Phil Powell, Fractional CTO. A multi-page static site served via GitHub Pages at feef.io. Built with Astro 5.

## Tech stack

- **Astro 5** — static output, no UI framework (no React/Vue/Svelte)
- **TypeScript** — `tsconfig.json` present; content collection schema in `src/content/config.ts`
- **Plain CSS** with custom properties — no Tailwind, no preprocessor
- **Shared design tokens** in `src/styles/theme.css` (nav, callouts, noise overlay, buttons, footer)
- **Page-specific styles** in `src/styles/essay.css` and `src/styles/portfolio.css`
- **Fonts via Google Fonts CDN**: Fraunces (display/headings everywhere) + Spectral (body text on essays)
- **Plausible analytics** — integrated in `BaseLayout.astro`; tagged events via `window.plausible()`
- **Custom remark plugin** — `src/lib/remark-heading-attrs.mjs` adds attributes to headings during Markdown processing

## Running locally

```bash
npm run dev      # start dev server at http://localhost:4321
npm run build    # production build to dist/
npm run preview  # preview the built output
```

## Deployment

Push to `master` → GitHub Actions workflow (`.github/workflows/deploy.yml`) builds with `withastro/action@v3` and deploys to GitHub Pages. Custom domain via `public/CNAME` (feef.io).

## File structure

```text
src/
  pages/
    index.astro              # Portfolio/about page
    writing/index.astro      # Writing index (reads from content collection)
    roadmap/index.astro      # "Why Your Roadmap Keeps Slipping" essay page
    behavioural-drift/index.astro
    at-eye-level/index.astro
  layouts/
    BaseLayout.astro         # Shared shell: <head>, nav, footer, Plausible
    EssayLayout.astro        # Essay wrapper: progress bar, ToC rail, copy-link CTAs
  styles/
    theme.css                # Design tokens, nav, callouts, buttons, footer, noise overlay
    essay.css                # Essay-specific layout and typography
    portfolio.css            # Portfolio/writing-index layout
  content/
    config.ts                # Zod schema for essays collection
    essays/
      roadmap.md
      behavioural-drift.md
      at-eye-level.md
  lib/
    remark-heading-attrs.mjs # Custom remark plugin
public/
  images/                    # Favicons, OG images, icons
  CNAME                      # feef.io
  site.webmanifest
astro.config.mjs
```

## Conventions

- Design tokens defined in `:root` in `theme.css`; page-specific overrides go in that page's `.astro` `<style>` block or its CSS file.
- Dark mode via `prefers-color-scheme: dark` — NOT a class toggle.
- Color palette: `--paper`, `--ink`, `--ink-soft`, `--paper-raised`, `--rule`, `--accent` (orange/amber), `--accent-hover`.
- Essays use the `EssayLayout.astro` wrapper; the portfolio page and writing index use `BaseLayout.astro` directly.
- Essay content lives as Markdown in `src/content/essays/`. Frontmatter must satisfy the Zod schema in `config.ts`: `title`, `standfirst`, `description`, `summary`, `pubDate`, `revision`, plus optional `ogImage` and `toc`.
- The `toc` frontmatter field drives both the sidebar rail ToC and the inline ToC in `EssayLayout`. Each entry is `{ id, label }`.
- Plausible event tracking: CTA links get a class like `plausible-event-name=Connect:+rail`; copy-link buttons call `window.plausible(...)` directly in the `<script>` block of `EssayLayout`.
- Semantic HTML throughout: `<header>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy.
- Accessibility: `aria-label`, `aria-current` on nav links, `focus-visible` rings, `prefers-reduced-motion` in `theme.css`, `rel="noopener noreferrer"` on external links.
- Content tone: British English, professional, direct, understated.

## What not to do

- Don't add a UI framework (React, Vue, etc.) — Astro is used for its static build, not for interactivity.
- Don't use a CSS framework (no Tailwind, no Bootstrap) — hand-written CSS is intentional.
- Don't add a local font directory — fonts load via Google Fonts CDN.
- Don't commit the `dist/` directory — the CI workflow builds it.

## CTA & analytics

- **Plausible** is already wired up in `BaseLayout.astro`. Cookieless, GDPR-ready — no consent banner.
- CTA placements follow the sequencing principle: Share at conviction peak (two-thirds through), Connect at end-of-book; both equal in the persistent footer bar only.
- Tone is feedback pitch, not launch marketing — no hype, no newsletter capture.

## Visual verification

- **Playwright** is installed as a dev dependency (Chromium browser only) specifically for taking screenshots to verify UI changes — there's no test suite using it.
- With the dev server running (`npm run dev`), capture a screenshot via:

  ```bash
  npm run screenshot -- http://localhost:4321/ screenshot.png
  ```

  This wraps Playwright's built-in CLI (`playwright screenshot`) at a 1280×800 viewport. Pass any local URL (e.g. `http://localhost:4321/roadmap/`) and output path.
- Useful flags: `--full-page` (capture entire scrollable page), `--device="iPhone 13"` (emulate a device), `--color-scheme=dark` (test dark mode, relevant here since dark mode is `prefers-color-scheme`-driven).
- Browser binaries live in the global Playwright cache (`~/Library/Caches/ms-playwright`), not in the repo — no need to gitignore anything extra. If they're ever missing, reinstall with `npx playwright install chromium`.

## Working rules

- Work on a branch; surface diffs for review before committing.
- Let GitHub Pages deploy only after diffs are eyeballed — don't push unattended.

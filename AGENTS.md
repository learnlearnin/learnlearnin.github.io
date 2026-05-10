# AI Agent Guide — Learn Learnin'

## Project Overview

A Hugo-based digital garden / personal wiki at [learnlearn.in](https://learnlearn.in). A single-person knowledge aggregator with 200+ flat markdown pages covering computers, medicine, philosophy, and more.

## Tech Stack

- **Static site generator:** Hugo v0.161+
- **Theme:** Custom (`themes/learnlearnin/`) — not using any third-party theme
- **CSS:** SCSS via Hugo's built-in `css.Sass` transpiler (libsass)
- **JS:** Vanilla ES6, bundled via Hugo's `js.Build`
- **Fonts:** Inter (Google Fonts), system font stack fallback
- **Hosting:** Self-hosted on VPS 

## Key Directories & Files

| Path | Purpose |
|------|---------|
| `content/` | flat `.md` pages |
| `content/_index.md` | Home page content |
| `assets/main.scss` | Primary stylesheet (imports `normalize.sass`) |
| `assets/normalize.sass` | CSS reset |
| `assets/main.js` | Vanilla JS: permalinks, share button, search, theme toggle |
| `themes/learnlearnin/` | Custom Hugo theme (layouts, partials) |
| `themes/learnlearnin/layouts/_default/` | `baseof.html`, `single.html`, `list.html`, `home.html`, `reveal.html` |
| `themes/learnlearnin/layouts/partials/` | `head.html`, `header.html`, `footer.html`, `share.html`, `menu.html`, `terms.html`, `sidebar.html`, `head/css.html`, `head/js.html` |
| `themes/learnlearnin/layouts/partials/helpers/` | `sort-key.html` |
| `static/` | Static assets: favicon (`LofL.png`), images, `feed.atom`, `project.css`, lazyload |
| `hugo.toml` | Site config (baseURL, title, locale, theme) |

## Build & Development

```bash
hugo            # Build to public/
hugo server     # Dev server with live reload
```

No npm/package.json — all asset processing is done by Hugo's built-in pipeline.

## Theme Architecture

### Layouts

- **`baseof.html`** — Root template with `<html>`, `<head>`, `<body>`, `{{ partial "sidebar.html" }}`, wrapped in `<div class="content-wrapper">` with `<header>`, `<main>`, and `{{ partial "footer.html" }}`
- **`single.html`** — Renders individual content pages with `<h1>` title + `.Content`
- **`list.html`** — Same layout as single (wiki-style, not a traditional blog list)
- **`home.html`** — Home page (no title heading, just `.Content`)
- **`reveal.html`** — Presentation mode using reveal.js (separate full-page template)

### Asset Pipeline

- **SCSS:** `assets/main.scss` → `css.Sass` → minify → fingerprint → `<link>` in `<head>`
- **JS:** `assets/main.js` → `js.Build` → (minify in production) → fingerprint → `<script>` in `<head>`

## Styling Conventions

- **CSS custom properties** in `:root` for all colors, spacing, typography, shadows
- **Dark mode** via `@media (prefers-color-scheme: dark)` (auto) and `[data-theme="dark"]` / `[data-theme="light"]` (manual override via JS toggle)
- **Logo inversion:** `.site-icon` uses `filter: invert(1)` in dark mode
- **Responsive:** Breakpoints at 600px, 750px, 1200px
- **Theme toggle:** Button in footer cycles auto → dark → light, persisted in `localStorage`

### Color System

| Variable | Light | Dark |
|----------|-------|------|
| `--color-bg` | `#fafafa` | `#0f172a` |
| `--color-surface` | `#ffffff` | `#1e293b` |
| `--color-text` | `#1a1a2e` | `#e2e8f0` |
| `--color-accent` | `#2563eb` | `#60a5fa` |
| `--color-border` | `#e5e7eb` | `#334155` |

## Sidebar Navigation

- **`sidebar.html`** — Auto-generates a collapsing left-side nav from `.Site.RegularPages` + `.Site.Sections`
- **Sort order:** Latin-script (A–Z) → Numeric (0–9) → Non-Latin scripts (Malayalam, Kannada), via `helpers/sort-key.html`
- **Sections** (subdirectories with pages) appear as `<details>` elements at their alphabetical position, with child pages indented
- **Section title** auto-derived from directory name via `humanize | title` when no `_index.md` exists; uses front-matter `title` when it does
- **Active page** highlighted with accent border and background
- **Search bar** at top of sidebar filters pages by title client-side, expanding all sections while active

## Content Conventions

- **Front matter:** Uses either YAML (`---`) or TOML (`+++`) format
- **Common front matter keys:** `title`, `description`, `keywords`, `img`, `imgattr`, `relcanonical`
- **Linking:** Pages are extensively cross-linked using relative paths, e.g. `[computers](./computers/)`
- **Images:** Referenced as `/images/<filename>` via `img` param in front matter
- **No categories/tags** — navigation is through cross-links, DuckDuckGo site search, and the sidebar nav
- **YouTube embeds:** Use `<iframe class="youtube">` (rendered in markdown as raw HTML since `unsafe = true`)

## JS Behavior

- **`permalinks()`:** Wraps heading text in `<a class="linchor" href="#id">` for anchor links
- **`sharebuttons()`:** Replaces social share links with native `navigator.share()` on supported devices
- **`scrollToHash()`:** Scrolls to hash on page load
- **`setupSearch()`:** DuckDuckGo search form — appends `site:learnlearn.in` to query on submit
- **`setupTheme()`:** Theme toggle cycling auto/dark/light, persisted in localStorage, listens for system preference changes
- **`setupSidebar()`:** Collapsing left sidebar toggle (hamburger button in header). On desktop (< 750px) it's a fixed 260px panel; on mobile it's a full-screen overlay. State persisted in `localStorage`. Includes overlay, Escape-key dismiss, and resize handling.
- **`setupSidebarSearch()`:** Filters sidebar page list by title as you type. Case-insensitive, searches any position in title. Expands all section `<details>` when active, collapses when cleared.

## Maintenance Notes

- `public/` is gitignored (generated output)
- `resources/_gen/` is gitignored (Hugo cache)
- Built with `unsafe = true` in goldmark config (allows raw HTML in markdown)
- ServiceWorker registrations are proactively unregistered on page load

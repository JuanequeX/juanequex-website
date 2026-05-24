# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Node version

Next.js 16 requires Node ≥20.9. Use Node 22 (`.nvmrc` is set): `nvm use`

## Commands

```bash
npm run dev       # Start local dev server with Turbopack
npm run build     # Build for production (static export → out/)
npm run start     # Serve the built output locally (./out)
npm run deploy    # Build and push to GitHub Pages via gh-pages
```

## Architecture

Single-page personal website built with **Next.js 15** (App Router), mixing `.tsx` (app shell) and `.jsx` (components). All styles are global SCSS — no CSS modules.

**App Router entry points:**
- `app/layout.tsx` — root layout, imports `styles/application.scss`
- `app/page.tsx` — single client component that composes all sections in order: `Navigation → Sidebar → Hero → AboutUs → Roadmap → Contact → Footer`

**Component structure:**
- `components/` — top-level section components (Hero, AboutUs, Roadmap, Contact, Navigation, Footer)
- `components/helpers/` — shared UI primitives (Sidebar, Carousel, TypeWriterText, DrawSvg, Logo, PdfDownload, Vector, header items)
- `components/Data.js` — all static content (career timeline entries, Swiper carousel slide data with company images)

**Styling:**
- `styles/application.scss` — root manifest; imports Swiper CSS, then partials in order
- `styles/utils/_colors.scss` — design tokens (`$dark`, `$white`, `$magma`, font size variables)
- `styles/abstracts/_mixins.scss` — shared SCSS mixins
- `styles/layouts/App.scss` — base layout styles
- `styles/components/_*.scss` — per-component stylesheets

**Key libraries:** GSAP (animations), Swiper (carousel in AboutUs), typewriter-effect (Hero text), react-scroll (smooth nav links), styled-components (present as a dependency but SCSS is the primary styling approach).

**Deployment:** Static export hosted on GitHub Pages (`juanequex.github.io`). The `next.config.mjs` sets `images: { unoptimized: true }` to support static export.

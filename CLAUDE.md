# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (Vite, localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview production build locally
```

No test runner or linter is configured.

## Architecture

React 18 SPA with Vite. No router library -- navigation is handled by a `page` state string in `src/App.jsx`, which renders pages via a switch statement. Changing pages calls `navigate(pageId)`, which increments a `pageKey` ref to force remount and trigger the `fade-up` animation.

**Adding a page** (three places must stay in sync):
1. `src/data/nav.js` -- add nav entry
2. `src/App.jsx` -- add import and switch case
3. Create `src/pages/MyPage.jsx`

**Content data lives in `src/data/`** -- all page content (bio, contacts, skills, software, games) is defined in JS data files, not hardcoded in components. Edit data files to change displayed content; edit components only to change layout/structure.

**Styling** -- `src/styles/global.css` is the single source of truth for all design tokens (colors, fonts, spacing, radii). CSS custom properties are used throughout inline styles in JSX. No CSS modules or styled-components. Utility classes (`fade-up`, `delay-1..5`, `section-wrap`, `section-label`, `section-title`, `tag`) are defined in global.css and applied in JSX.

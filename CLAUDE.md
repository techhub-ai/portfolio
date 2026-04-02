# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build to dist/
npm run preview    # Preview production build
npm run lint       # Type-check with tsc --noEmit (no test runner configured)
npm run clean      # Remove dist/
```


## Architecture

This is a single-page portfolio app with a minimal file structure:

- `src/App.tsx` — entire UI in one file: navbar, hero, about, projects, skills, and contact sections. Uses `motion/react` (Framer Motion) for animations and `lucide-react` for icons.
- `src/constants.tsx` — data layer: `PROJECTS` and `SKILLS` arrays with their TypeScript interfaces (`Project`, `Skill`). **Add/edit portfolio content here.**
- `src/index.css` — global styles entry point for Tailwind CSS v4.
- `src/main.tsx` — React root, mounts `<App />` in StrictMode.

Tailwind CSS v4 is integrated via the `@tailwindcss/vite` plugin (not PostCSS). The `@` alias resolves to the project root.

The `SKILLS` data uses `category: "Frontend" | "Backend" | "Tools"` to group items in the UI. The skills grid filters by category, so new categories must also be added to the render loop in `App.tsx`.

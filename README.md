# Erwin Dela Cruz — Portfolio

Personal portfolio site built with React 19, TypeScript, and Tailwind CSS v4. Showcases my work history, projects, and technical skills as a full-stack developer.

**Live site:** _(deploy URL here)_

## About

Full-stack developer with 8+ years of experience across enterprise banking systems, agribusiness platforms, and freelance end-to-end products. Previously at Metrobank and Computer Professionals, Inc. — now working independently as a freelance developer.

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 19, TypeScript, Tailwind CSS v4, Framer Motion |
| Icons | Lucide React |
| Build | Vite 6, `@tailwindcss/vite` plugin |
| Server | Express (API / proxy layer) |
| Runtime | Node.js |

## Getting Started

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev        # Dev server → http://localhost:3000
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # Type-check (tsc --noEmit)
npm run clean      # Remove dist/
```

## Project Structure

```
src/
├── App.tsx          # All UI sections: navbar, hero, about, projects, skills, contact
├── constants.tsx    # Data layer: EXPERIENCE, PROJECTS, SKILLS arrays + TypeScript interfaces
├── index.css        # Tailwind CSS v4 entry point
└── main.tsx         # React root, mounts <App /> in StrictMode
```

### Editing Content

All portfolio data lives in `src/constants.tsx`:

- **`EXPERIENCE`** — work history (role, company, period, highlights)
- **`PROJECTS`** — featured projects (title, description, tech stack, links)
- **`SKILLS`** — skills grouped by `"Frontend" | "Backend" | "Tools"`

> Adding a new skill category requires updating both `SKILLS` in `constants.tsx` and the render loop in `App.tsx`.

## License

Private — all rights reserved.

# Erwin Dela Cruz — Developer Portfolio

A personal portfolio website built with Next.js 16, showcasing work experience, projects, skills, and contact information.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Animation**: Motion (Framer Motion)
- **Icons**: Lucide React, React Icons
- **Theme**: next-themes (light/dark mode)

## Project Structure

```
app/          # Next.js App Router pages and layouts
components/   # React components
  ui/         # shadcn/ui generated components (do not edit directly)
lib/          # Shared utilities
public/       # Static assets (images, CV, SVGs)
```

## Sections

- **Hero** — Intro, profile photo, social links
- **About** — Personal bio
- **Experience** — Work history
- **Projects** — Featured projects with screenshots
- **Skills** — Tech stack and tools
- **Contact** — Contact form / links

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (preferred) or npm

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

## Adding shadcn/ui Components

Never hand-write components inside `components/ui/`. Use the CLI:

```bash
npx shadcn@latest add <component-name>
```

# Project Instructions

## Commands

```bash
# Build
npm run build

# Lint & Format
npm run lint

# Dev
npm run dev
```

## Architecture

- `app/` — Next.js App Router pages and layouts
- `components/` — React components (including shadcn/ui)
- `lib/` — Shared utilities

## Key Decisions

## Domain Knowledge

## Workflow

- Run typecheck after making a series of code changes
- Prefer fixing the root cause over adding workarounds
- When unsure about approach, use plan mode (`Shift+Tab`) before coding

## Don'ts

- Don't modify generated files (`*.gen.ts`, `*.generated.*`)

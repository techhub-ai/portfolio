# UI/UX Improvement Tasks

Generated from ui-ux-pro-max review on 2026-04-02.

---

## Critical — Accessibility & Interaction

- [ ] **Add `cursor-pointer` to all interactive elements**
  - `src/App.tsx:153` — mobile menu `<button>`
  - `src/App.tsx:113–131` — desktop nav links
  - `src/App.tsx:176–184` — mobile menu nav links
  - `src/App.tsx:283–319` — hero social icon links (GitHub, LinkedIn, Mail)
  - `src/App.tsx:446–465` — project card overlay icon buttons
  - `src/App.tsx:623–660` — footer nav links

- [ ] **Add `aria-label` to all icon-only links**
  - `src/App.tsx:282` — GitHub icon link → `aria-label="GitHub"`
  - `src/App.tsx:295` — LinkedIn icon link → `aria-label="LinkedIn"`
  - `src/App.tsx:307` — Mail icon link → `aria-label="Email"`
  - `src/App.tsx:153` — mobile menu toggle button → `aria-label="Open menu"` / `aria-label="Close menu"`

- [ ] **Add visible focus states to all interactive elements**
  - Add `focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]` (or equivalent) to all `<a>` and `<button>` elements

- [ ] **Remove or gate the decorative `animate-bounce`**
  - `src/App.tsx:336` — ChevronDown scroll indicator uses `animate-bounce` continuously; either remove or wrap with `motion-safe:` Tailwind variant

- [ ] **Respect `prefers-reduced-motion`**
  - Wrap all Framer Motion animations with `useReducedMotion()` hook from `motion/react`, or add `@media (prefers-reduced-motion: reduce)` overrides in `src/index.css`

- [ ] **Fix vague alt text on profile image**
  - `src/App.tsx:358` — change `alt="Profile"` to `alt="Alex - Frontend Developer"`

- [ ] **Add skip-to-content link**
  - Add a visually hidden `<a href="#main" class="sr-only focus:not-sr-only ...">Skip to main content</a>` as the first element inside `<body>`, and add `id="main"` to the `<main>` tag

---

## High — Performance & Layout

- [ ] **Add `loading="lazy"` to all images**
  - `src/App.tsx:357` — profile image
  - `src/App.tsx:439` — project card images (all 3)

- [ ] **Add `width` and `height` attributes to images to prevent CLS**
  - Profile image: `width="800" height="800"`
  - Project images: `width="800" height="600"`

---

## Medium — Polish & Consistency

- [ ] **Fix semantically wrong skill icons** (`src/constants.tsx:52–55`)
  - `PostgreSQL` — replace `Globe` with a more appropriate icon (e.g., `Database`)
  - `Docker` — replace `Cpu` with `Box` or `Container`
  - `Motion` — replace `Cpu` with `Zap` or `Play`
  - `Git` — replace `Terminal` with `GitBranch`
  - `Node.js` — replace `Terminal` with `Server`

- [ ] **Fix `hover:scale-110` on project overlay buttons**
  - `src/App.tsx:448, 458` — replace `hover:scale-110 transition-transform` with a color/opacity transition to avoid layout shift inside `overflow-hidden` container

- [ ] **Normalize section numbering**
  - `src/App.tsx:207` — the hero "01" decorative number is fine, but ensure `SectionHeading` `index` prop is passed consistently: About=`02`, Projects=`03`, Skills=`04`
  - `src/App.tsx:566` — Contact section hardcodes `"05 — Get in touch"` as inline text; move to use the `<SectionHeading>` component with `index="05"` for consistency

---

## Low — Content & UX Improvements

- [ ] **Replace all `href="#"` placeholder links**
  - `src/App.tsx:283` — GitHub profile link
  - `src/App.tsx:295` — LinkedIn profile link
  - `src/App.tsx:307` — Mail link (or use `mailto:`)
  - `src/App.tsx:446` — per-project GitHub links
  - `src/App.tsx:456` — per-project live links
  - `src/App.tsx:623–660` — footer Twitter/GitHub/LinkedIn links
  - `src/constants.tsx:22–43` — `link` and `github` fields in PROJECTS array

- [ ] **Add a contact form or additional contact methods**
  - The contact section only has an email link; consider adding a simple form (name, email, message) or links to a Calendly/booking page for better conversion

- [ ] **Consider font pairing update**
  - Current: Cormorant Garamond (display) + Syne (body) — editorial/luxury feel
  - Recommended for dev portfolio: **Archivo + Space Grotesk** — cleaner, more modern tech aesthetic
  - Only change if the current tone doesn't match your target clients

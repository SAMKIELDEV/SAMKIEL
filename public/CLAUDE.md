# CLAUDE.md — Instructions for Claude Code

This file tells Claude Code how to work on the SAMKIEL landing page repo. Read this before doing anything else.

---

## Project Identity

- **Company:** SAMKIEL — a software company with an Agency arm and a Studio arm
- **Tagline:** "Digitalizing The World"
- **Domain:** samkiel.online
- **GitHub Org:** github.com/SAMKIELDEV
- **This repo:** SAMKIELDEV/SAMKIEL (company website)

---

## What You Are Building

A dark, premium company landing page for SAMKIEL. Single page, multiple scroll sections. See `PRD.md` for full section breakdown and `DOCUMENTATION.md` for technical architecture.

Do not invent new features. Do not add sections not in the PRD. If something is unclear, leave a `// TODO:` comment and continue.

---

## Stack

| Tool | Purpose |
|------|---------|
| Next.js (latest stable) | Framework (App Router) |
| TypeScript | Language — strict mode |
| Tailwind CSS v4 | Styling |
| Lucide React | Icons |
| Sonner | Toast notifications |
| Framer Motion | Scroll animations (optional, use if installed) |
| Google Fonts / Fontsource | Typography |

**Always use App Router.** No `pages/` directory.  
**Always use TypeScript.** No `.js` or `.jsx` files.  
**Never use `any` type.** Type everything properly.

---

## Folder Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout, font setup, metadata, Toaster
│   ├── page.tsx            # Main page — imports all sections
│   └── globals.css         # Global styles, CSS variables, Tailwind base
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Agency.tsx
│       ├── Studio.tsx
│       ├── About.tsx
│       └── Contact.tsx
├── lib/
│   └── utils.ts            # cn() helper and any shared utils
├── public/
│   └── (static assets)
├── PRD.md
├── CLAUDE.md
├── DOCUMENTATION.md
└── package.json
```

Do not create deeply nested component folders. Keep it flat and obvious.

---

## Code Style Rules

### General
- Use named exports for all components (not default exports), except `page.tsx` and `layout.tsx`
- Use `const` arrow functions for components: `const Hero = () => { ... }`
- No unused imports
- No `console.log` statements left in code
- All images use `next/image`
- All internal links use `next/link`

### TypeScript
- All props must have explicit interfaces or types
- Use `interface` for component props, `type` for unions and utility types
- No `as any` or type suppression

### Tailwind
- Use Tailwind classes only — no inline `style={{}}` unless absolutely necessary
- Group classes: layout → spacing → typography → color → border → shadow → animation
- Use responsive prefixes consistently: `sm:`, `md:`, `lg:`
- Define custom design tokens in `globals.css` as CSS variables, then expose to Tailwind

### Components
- Each section is its own component file in `components/sections/`
- Each component is self-contained with its own data (no global state needed)
- Sections accept no required props at this stage

---

## Design System

### Colors (CSS variables defined in `globals.css`)
```css
--bg:           #0A0A0A;
--surface:      #111111;
--border:       #1F1F1F;
--accent:       #E8FF47;
--text:         #D4D4D4;
--text-muted:   #888888;
--white:        #FFFFFF;
```

### Typography
- **Display/Heading font:** Syne or Cabinet Grotesk (bold, geometric, editorial)
- **Body font:** Figtree or DM Sans
- Import via `next/font/google` in `layout.tsx`
- Apply font variables to `<html>` tag, reference in `globals.css`

### Spacing
- Section vertical padding: `py-24 md:py-32`
- Content max width: `max-w-[1280px] mx-auto`
- Horizontal page padding: `px-6 md:px-12 lg:px-20`

### Accent Usage
The accent color `#E8FF47` is used sparingly:
- CTA button backgrounds
- Hover states on key interactive elements
- Section label tags (small pill/badge above headings)
- Highlighted text in hero
Never use it for body text or backgrounds.

---

## Section Labels

Every section should have a small label above the heading like this:
```tsx
<span className="section-label">Agency</span>
<h2>We build for your business</h2>
```

```css
.section-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  display: inline-block;
  margin-bottom: 16px;
}
```

---

## Navbar Behavior

- Default: transparent background, no border
- On scroll (>50px): add `backdrop-blur-md`, subtle `bg-[#0A0A0A]/80`, bottom border `border-b border-[#1F1F1F]`
- Use `useEffect` + `useState` to track scroll position
- Mobile: hamburger icon (Lucide `Menu`), opens a slide-down or overlay menu
- "Start a Project" button: accent colored, scrolls to `#contact`

---

## Contact Form

- Fields: `name`, `email`, `message`
- Controlled inputs with `useState`
- On submit:
  - Show loading state (disable button, change text)
  - Call form handler (leave as `// TODO: wire to Resend/Formspree/EmailJS`)
  - On success: `toast.success("Message sent. We'll be in touch.")`
  - On error: `toast.error("Something went wrong. Try again.")`
- Import `Toaster` from `sonner` and add to `layout.tsx`
- Position: `bottom-right`

---

## Studio Product Cards

Each product card should show:
- Product name (large)
- Tagline (1 line, muted)
- Short description (1–2 lines)
- Status badge: `Live` (green dot + text)
- External link button: "Visit →" opens in new tab

Products at launch:
- **BreezrChat** → `https://breezrchat.samkiel.online` (or current URL if subdomain not set yet: `https://breezrchat.onrender.com`)
- **SKDL** → `https://skdl.samkiel.online`

---

## Metadata (SEO)

In `layout.tsx`, set proper metadata:
```ts
export const metadata: Metadata = {
  title: 'SAMKIEL — Digitalizing The World',
  description: 'SAMKIEL is a software company building digital products and client solutions from Lagos, Nigeria.',
  metadataBase: new URL('https://samkiel.online'),
  openGraph: {
    title: 'SAMKIEL',
    description: 'Digitalizing The World',
    url: 'https://samkiel.online',
    siteName: 'SAMKIEL',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAMKIEL',
    description: 'Digitalizing The World',
  },
}
```

---

## What NOT To Do

- Do not add a blog, auth, or any feature not in the PRD
- Do not use `pages/` directory
- Do not use `.js` files — TypeScript only
- Do not use `any` type
- Do not use inline styles except as a last resort
- Do not add unnecessary dependencies
- Do not add placeholder lorem ipsum text — use real copy from the PRD
- Do not use stock photos or random images
- Do not add a light mode toggle
- Do not use generic fonts like Inter, Roboto, Arial, or system-ui

---

## Commit Style

Use conventional commits:
```
feat: add hero section
feat: add agency section with service cards
fix: navbar scroll behavior on mobile
style: adjust hero typography spacing
chore: add sonner toast to layout
```

---

## Running the Project

```bash
npm install
npm run dev       # localhost:3000
npm run build     # production build
npm run lint      # ESLint check
```

---

## Deployment

- Platform: Vercel
- Connect repo: SAMKIELDEV/SAMKIEL
- Domain: samkiel.online (add in Vercel dashboard)
- Environment variables: none needed at launch (add when wiring contact form)

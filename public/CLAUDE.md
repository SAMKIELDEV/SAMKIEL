# SAMKIEL Project Context (CLAUDE.md)

## Core Commands
- **Dev:** `npm run dev`
- **Build:** `npm run build`
- **Start:** `npm run start`
- **Lint:** `npm run lint`

## Project Identity
- **Name:** SAMKIEL
- **Tagline:** Digitalizing The World
- **Domain:** samkiel.tech
- **Location:** Ile Ife, Nigeria
- **Philosophy:** High Performance, Premium Aesthetics, No-BS Digitalization.

## Tech Stack (Next.js 16)
- **Framework:** Next.js 16 (App Router) - **Note: Next.js 16 contains breaking changes. Refer to local docs in node_modules/next/dist/docs if needed.**
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.0 (Alpha/Beta features like `@theme inline`)
- **Animation:** Framer Motion
- **Analytics:** Vercel Analytics + Speed Insights

## Key Directories
- `/app`: App components and routing
- `/components/sections`: Landing page sections
- `/components/layout`: Global navigation/footer
- `/public`: Documentation (PRD, CLAUDE.md)

---

## Implementation Status

### V1 Milestone (Agency Landing Page)
- **Hero Section:** [DONE] Animated text, high-end dark vibe.
- **Agency Section:** [DONE] Sharp copy about digitalization.
- **Studio Section:** [DONE] Cards for BreezrChat and SKDL.
- **About/Contact:** [DONE] Essential info and links.
- **Responsive:** [DONE] Optimized for desktop/tablet/mobile.

---

## Style Guide (Design Tokens)

### Colors
- **Background:** `--bg: #0A0A0A`
- **Accent:** `--accent: #E8FF47` (Lime-ish)
- **Surface:** `--surface: #111111`
- **Text:** `--white: #FFFFFF`, `--text: #D4D4D4`

### Typography
- **Headings:** `Syne`
- **Body:** `Figtree`

### Spacing
- **Section Padding:** `py-24`
- **Container Max:** `max-w-7xl`

---

## Product Ecosystem (Studio)
- **BreezrChat** → `https://breezrchat.samkiel.tech` (or current URL if subdomain not set yet: `https://breezrchat.onrender.com`)
- **SKDL** → `https://skdl.samkiel.tech`

---

## Developer Guidelines
- **Modern Syntax:** Always use Arrow functions and Shorthand components.
- **Tailwind 4:** Use the new CSS-first configuration in `app/globals.css`.
- **Animations:** Prefer Framer Motion over raw CSS transitions for complex reveals.
- **SEO First:** Every page must have proper metadata in `layout.tsx` or `page.tsx`.

```tsx
// SEO Example
export const metadata: Metadata = {
  metadataBase: new URL('https://samkiel.tech'),
  title: '...',
  openGraph: {
    url: 'https://samkiel.tech',
    // ...
  }
}
```

## Vercel Setup
- Domain: samkiel.tech (add in Vercel dashboard)
- Environment Variables: None yet (client-only so far)
- Analytics: Enabled.

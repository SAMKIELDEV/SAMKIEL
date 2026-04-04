# DOCUMENTATION.md — SAMKIEL Landing Page

Technical reference for the SAMKIEL company website at `samkiel.online`.

---

## Project Overview

| Property | Value |
|----------|-------|
| Framework | Next.js (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Deployment | Vercel |
| Domain | samkiel.online |
| Repo | github.com/SAMKIELDEV/SAMKIEL |

---

## Architecture

### App Router Structure

```
app/
├── layout.tsx       # Root layout
├── page.tsx         # Homepage (all sections assembled here)
└── globals.css      # Global styles + CSS variables
```

This is a **single-page site**. All content lives on `/`. Sections are scroll-anchored with IDs.

### Component Tree

```
layout.tsx
└── page.tsx
    ├── <Navbar />
    ├── <Hero />          #hero
    ├── <Agency />        #work
    ├── <Studio />        #studio
    ├── <About />         #about
    ├── <Contact />       #contact
    └── <Footer />
```

---

## File Reference

### `app/layout.tsx`
Root layout. Responsibilities:
- Font setup via `next/font/google`
- Apply font CSS variables to `<html>`
- Global `<Metadata>` export
- Render `<Toaster>` from `sonner` (position: bottom-right)
- Wrap children in any global providers if needed

```tsx
import type { Metadata } from 'next'
import { Syne, Figtree } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${figtree.variable}`}>
      <body>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
```

---

### `app/globals.css`
Global CSS. Defines design tokens and base styles.

```css
@import "tailwindcss";

:root {
  --bg: #0A0A0A;
  --surface: #111111;
  --border: #1F1F1F;
  --accent: #E8FF47;
  --text: #D4D4D4;
  --text-muted: #888888;
  --white: #FFFFFF;

  --font-display: var(--font-display); /* set by next/font */
  --font-body: var(--font-body);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: var(--font-body), sans-serif;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display), sans-serif;
  color: var(--white);
}
```

---

### `app/page.tsx`
Assembles all section components. No logic here, just imports and layout.

```tsx
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Agency } from '@/components/sections/Agency'
import { Studio } from '@/components/sections/Studio'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Agency />
      <Studio />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
```

---

## Component Specs

### `Navbar.tsx`

**Behavior:**
- Fixed to top, full width
- Default: transparent
- After 50px scroll: `bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#1F1F1F]`
- Smooth CSS transition on background change

**Content:**
- Left: `SAMKIEL` wordmark (styled text, not image)
- Center (desktop): nav links — `Work`, `Studio`, `About`, `Contact`
- Right: `Start a Project` button → `#contact`
- Mobile: hamburger (`Menu` from lucide-react), toggles nav links dropdown

**State:**
```ts
const [scrolled, setScrolled] = useState(false)
const [menuOpen, setMenuOpen] = useState(false)
```

---

### `Hero.tsx`

**Content:**
- Small label above headline (e.g. "SAMKIEL / 2026")
- Large headline — bold, 2–3 words max on first line
- Subheadline: 1–2 sentences describing SAMKIEL
- Two CTA buttons:
  - Primary: "See Our Work" → `#work`
  - Secondary/ghost: "Explore Studio" → `#studio`
- Background: dark atmosphere — subtle noise texture, or animated gradient orbs (CSS only, no library dependency)

**Typography sizing:**
- Headline: `text-5xl md:text-7xl lg:text-8xl` with display font
- Subheadline: `text-base md:text-lg` with body font, muted color

---

### `Agency.tsx`

**ID:** `work`

**Content:**
- Section label: "Agency"
- Headline: "We build for your business"
- Short paragraph about agency services
- Grid of service cards (2 columns mobile, 3 desktop)
- CTA at bottom

**Service card data (define inline as array):**
```ts
interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  { icon: Globe, title: 'Web Development', description: 'Fast, responsive websites and web apps built to convert.' },
  { icon: Smartphone, title: 'Mobile Apps', description: 'Cross-platform apps that feel native on every device.' },
  { icon: Bot, title: 'AI Products', description: 'Intelligent features and automation built into your product.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Interfaces that are intuitive, beautiful, and functional.' },
  { icon: Server, title: 'Backend & APIs', description: 'Scalable servers and APIs your product can grow on.' },
  { icon: MessageSquare, title: 'Digital Consulting', description: 'Strategy and technical direction for your next build.' },
]
```

**Card style:** Dark surface, border, icon in accent color, hover: border lightens, subtle lift

---

### `Studio.tsx`

**ID:** `studio`

**Content:**
- Section label: "Studio"
- Headline: "Products we own and operate"
- Short paragraph
- Product cards (horizontal or 2-column grid)

**Product data:**
```ts
interface Product {
  name: string
  tagline: string
  description: string
  url: string
  status: 'Live' | 'Beta' | 'Coming Soon'
}

const products: Product[] = [
  {
    name: 'BreezrChat',
    tagline: 'Chat, simplified.',
    description: 'A real-time chat product built for speed and simplicity.',
    url: 'https://breezrchat.samkiel.online',
    status: 'Live',
  },
  {
    name: 'SKDL',
    tagline: 'Download anything.',
    description: 'A fast, clean tool for downloading content from the web.',
    url: 'https://skdl.samkiel.online',
    status: 'Live',
  },
]
```

**Card style:** Larger cards than service cards. Product name is big. Status badge: green dot + "Live". External link opens in `_blank`. On hover: subtle glow or border accent.

---

### `About.tsx`

**ID:** `about`

**Content:**
- Section label: "About"
- Headline: "Built from Lagos. Shipped for the world."
- 2–3 paragraph company story
- Optional: a short stat row (e.g. `2 Products Shipped · 2024 Founded · Lagos, Nigeria`)

---

### `Contact.tsx`

**ID:** `contact`

**Content:**
- Section label: "Contact"
- Headline: "Let's build something."
- Subtext: "Tell us what you're working on."
- Form with controlled inputs
- Submit calls handler, shows Sonner toast
- Below form: direct contact info (email + GitHub)

**Form state:**
```ts
interface FormData {
  name: string
  email: string
  message: string
}

const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
const [loading, setLoading] = useState(false)
```

**Submit handler:**
```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)
  try {
    // TODO: wire to Resend / Formspree / EmailJS
    await new Promise(resolve => setTimeout(resolve, 1000)) // placeholder
    toast.success("Message sent. We'll be in touch.")
    setForm({ name: '', email: '', message: '' })
  } catch {
    toast.error('Something went wrong. Try again.')
  } finally {
    setLoading(false)
  }
}
```

---

### `Footer.tsx`

**Content:**
- Left: SAMKIEL wordmark
- Center: nav links
- Right: copyright `© 2026 SAMKIEL`
- Very minimal. No large padding. Dark border top.

---

## `lib/utils.ts`

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
```

Install: `npm install clsx tailwind-merge`

---

## Design Tokens (Quick Reference)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#0A0A0A` | Page background |
| `--surface` | `#111111` | Cards, navbar, inputs |
| `--border` | `#1F1F1F` | Borders |
| `--accent` | `#E8FF47` | CTAs, labels, highlights |
| `--text` | `#D4D4D4` | Body text |
| `--text-muted` | `#888888` | Subtext, captions |
| `--white` | `#FFFFFF` | Headings |

---

## Routing & Anchors

| Section | Anchor | Nav Link |
|---------|--------|----------|
| Hero | `#hero` | — |
| Agency | `#work` | Work |
| Studio | `#studio` | Studio |
| About | `#about` | About |
| Contact | `#contact` | Contact |

All nav links use smooth scroll. On mobile, clicking a nav link closes the menu.

---

## Dependencies

```json
{
  "dependencies": {
    "next": "latest",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "latest",
    "sonner": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest",
    "framer-motion": "latest"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4",
    "@tailwindcss/postcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "latest"
  }
}
```

---

## Environment Variables

None required at launch. When wiring the contact form:

```env
# .env.local (do not commit)
RESEND_API_KEY=your_key_here
# or
FORMSPREE_ENDPOINT=https://formspree.io/f/your_id
```

---

## Deployment Checklist

- [ ] `npm run build` passes with no errors
- [ ] `npm run lint` passes clean
- [ ] All sections render on mobile (375px), tablet (768px), desktop (1280px+)
- [ ] Navbar scroll behavior works
- [ ] Contact form shows Sonner toasts
- [ ] Studio product links open in new tab
- [ ] Domain `samkiel.online` configured in Vercel
- [ ] OpenGraph metadata verified (use opengraph.xyz to test)

---

## Future Additions (not in scope now)

- `/work/[slug]` — individual case study pages for agency projects
- `/products/[slug]` — product detail pages
- Blog (`/blog`) — company updates
- Team page
- Pricing section for agency packages
- Animation pass with Framer Motion scroll variants
- Light mode (if ever needed)

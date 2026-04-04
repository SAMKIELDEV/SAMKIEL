# SAMKIEL — Product Requirements Document (PRD)

## Overview

**Company:** SAMKIEL  
**Tagline:** Digitalizing The World  
**Website:** samkiel.online  
**GitHub Org:** github.com/SAMKIELDEV  
**Repo:** SAMKIELDEV/SAMKIEL  

SAMKIEL is a software company with two arms:
- **Agency** — custom software and digital products built for clients
- **Studio** — internally owned and operated products

This PRD covers the **company landing page** hosted at `samkiel.online`. The goal of this page is to establish SAMKIEL's identity, communicate what it does, showcase its studio products, and convert visitors into clients or collaborators.

---

## Goals

1. Establish SAMKIEL as a credible, modern software company
2. Clearly communicate the Agency and Studio split
3. Showcase current studio products (BreezrChat, SKDL)
4. Drive inbound client inquiries via a contact/inquiry section
5. Feel premium, dark, and distinct — not a generic agency template

---

## Target Audience

- Potential clients looking to build a digital product or get a website/app built
- Developers and tech people who might want to use SAMKIEL studio products
- Investors or partners evaluating the company

---

## Pages / Routes

This is a **single-page application** with smooth scroll anchors. No separate route pages needed at launch.

### Sections (in order)

#### 1. Navbar
- Logo: "SAMKIEL" wordmark (custom styled, no image needed)
- Nav links: `Work`, `Studio`, `About`, `Contact`
- CTA button: "Start a Project" → scrolls to contact section
- Sticky on scroll, subtle blur backdrop
- Mobile: hamburger menu

#### 2. Hero
- Headline: Bold, large, impactful. Something like:
  > **"We build software that moves."**  
  > or  
  > **"Digital products. Built to last."**
- Subtext: Short 1–2 line description of SAMKIEL
  > SAMKIEL is a software company building digital products and client solutions from Lagos, Nigeria.
- Two CTAs: `See Our Work` (scroll to agency) + `Explore Studio` (scroll to studio)
- Background: Dark, atmospheric. Can use a subtle animated grid, grain texture, or geometric lines. Not a stock photo.

#### 3. What We Do (Agency Section)
- Anchor: `#work`
- Section label: "Agency"
- Headline: "We build for your business"
- Short paragraph explaining the agency arm: custom software, web/mobile apps, AI products, shipped on time
- Service cards (4–6 cards):
  - Web Development
  - Mobile Apps
  - AI-Powered Products
  - UI/UX Design
  - Backend & APIs
  - Digital Consulting
- Each card: icon (Lucide), title, 1-line description
- CTA at end: "Start a Project →" → scrolls to contact

#### 4. Studio Products Section
- Anchor: `#studio`
- Section label: "Studio"
- Headline: "Products we own and operate"
- Short paragraph: SAMKIEL's studio builds products that solve real problems.
- Product cards (2 at launch, designed to expand):

  **BreezrChat**
  - Tagline: e.g. "Chat, simplified"
  - Short 1-line description
  - Link: `breezrchat.samkiel.online`
  - Status badge: "Live"

  **SKDL**
  - Tagline: e.g. "Download anything"
  - Short 1-line description
  - Link: `skdl.samkiel.online`
  - Status badge: "Live"

- Cards should feel like product cards, not service cards — more visual, with a status badge and external link

#### 5. About Section
- Anchor: `#about`
- Section label: "About"
- Headline: "Built from Lagos. Shipped for the world."
- Short company story paragraph:
  > SAMKIEL was founded with one idea: that great software should come from everywhere. We're a small, focused team that takes on real problems and ships things that actually work.
- No team photos needed at launch. Can add a founder card later.

#### 6. Contact / Inquiry Section
- Anchor: `#contact`
- Section label: "Contact"
- Headline: "Let's build something."
- Subtext: "Tell us what you're working on."
- Form fields:
  - Name (text)
  - Email (email)
  - What are you building? (textarea)
  - Submit button: "Send It →"
- On success: show a Sonner toast notification — "Message sent. We'll be in touch."
- On error: show a Sonner error toast — "Something went wrong. Try again."
- No backend needed at launch — form can use a service like Resend, Formspree, or EmailJS. Leave a `TODO` comment for wiring.
- Also show direct contact:
  - Email: (use the org email from GitHub)
  - GitHub: github.com/SAMKIELDEV

#### 7. Footer
- Logo wordmark left
- Nav links: Work · Studio · About · Contact
- Right: `© 2026 SAMKIEL. All rights reserved.`
- Very minimal, dark

---

## Design Direction

### Aesthetic
- **Theme:** Dark, sleek, premium
- **Vibe:** Between a high-end dev studio and a modern startup. Think Vercel × Linear × a Nigerian edge.
- **NOT:** Generic purple gradients, stock photos, rounded friendly corners everywhere

### Typography
- **Heading font:** Something bold and distinctive. Suggested options (Claude Code should pick one and import from Google Fonts or Fontsource):
  - `Syne` — geometric, strong
  - `Space Grotesk` is explicitly off the table
  - `Neue Haas Grotesk` style alternatives
  - `Cabinet Grotesk` — bold and modern
  - `Clash Display` — editorial
- **Body font:** Clean, legible. `DM Sans`, `Figtree`, or `Outfit`
- Heading weights: 700–900. Body: 400–500.

### Colors
```
Background:     #0A0A0A  (near black)
Surface:        #111111  (card background)
Border:         #1F1F1F  (subtle borders)
Primary accent: #E8FF47  (electric lime/yellow — punchy, memorable)
Secondary text: #888888  (muted gray)
Body text:      #D4D4D4  (off-white)
White:          #FFFFFF
```

> Claude Code can adjust exact accent if it finds a better pairing, but the overall dark base with a single sharp accent is non-negotiable.

### Motion
- Subtle fade-in + slide-up on scroll for sections (use `framer-motion` or CSS `@keyframes` with IntersectionObserver)
- Hover states on all cards and buttons
- Navbar: smooth transition on scroll (background appears, blur activates)
- No heavy animations that block content

### Layout
- Max content width: `1280px`
- Generous padding: `px-6 md:px-12 lg:px-20`
- Section spacing: `py-24 md:py-32`

---

## Tech Stack

- **Framework:** Next.js (latest stable — verify current version before init)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Toasts:** Sonner
- **Fonts:** Google Fonts or Fontsource (no external CDN calls at runtime)
- **Animations:** Framer Motion (optional) or CSS
- **Deployment:** Vercel (connects to SAMKIELDEV/SAMKIEL repo)

---

## Non-Goals (for this launch)

- Blog or articles section
- Auth or user accounts
- CMS integration
- Pricing page
- Case studies (can be added later)
- Dark/light toggle (dark only at launch)

---

## Success Criteria

- Page loads in under 2 seconds on mobile
- Lighthouse score: Performance 90+, Accessibility 90+
- All sections visible and functional on mobile, tablet, desktop
- Contact form shows Sonner toast on submit
- Links to studio products open in new tab
- Deployed to `samkiel.online` via Vercel

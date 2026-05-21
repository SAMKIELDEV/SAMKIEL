# PRD: SAMKIEL Company Website (V2)

## Project Overview
**Company:** SAMKIEL
**Founder:** Ezekiel
**Location:** Remote (Nigeria)
**Website:** samkiel.tech
**Stack:** Next.js (latest stable), TypeScript (strict), Tailwind CSS v4, Framer Motion, Lucide React, Sonner

---

## 1. Executive Summary

This PRD governs the **V2 update** of `samkiel.tech`. The goal is to evolve the site from an agency landing page into a **company homepage** — the front door to the SAMKIEL ecosystem. Visitors should immediately understand what SAMKIEL is as a company, that it operates two distinct arms (Agency and Studio), and that Kiv is the first live Studio product. The site should feel like Tekcify, Anthropic, or Linear: vision-forward, clean, and confident — not a portfolio or a sales brochure.

---

## 2. Core Identity & Vision

SAMKIEL is a software company — not just an agency. It builds client solutions (Agency) and owns its own products (Studio). Both arms operate under the parent SAMKIEL brand.

**Tagline:** "Software With Intention"

**Two arms:**
1. **SAMKIEL Agency** — bespoke software for clients
2. **SAMKIEL Studio** — internally owned products

**Auth infrastructure:**
- **SAMKIEL ID** — a unified authentication layer (like Google Account) used across all Studio products. It is not a product — it is infrastructure. It lives at `account.samkiel.tech` and is referenced on the site only in the context of Studio products.

---

## 3. Target Audience

- **Potential clients** — businesses looking for elite software development and digital strategy
- **Product users** — people discovering or using Studio products (starting with Kiv)
- **Collaborators / talent** — developers and creatives who want to work with a high-performance team

---

## 4. Page Structure

The homepage is a single scrolling page. Navigation links to separate pages where needed.

### Navigation
```
SAMKIEL logo | About  Products (dropdown)  Agency | Start a Project (CTA)
```

Products dropdown:
- Kiv — micro-journaling & daily check-in

(Additional Studio products will be added here as they ship.)

---

## 5. Homepage Sections

### A. Hero
- **Headline:** Bold, confident. Leads with company identity, not a service pitch.
  - Example direction: "We build software with intention." or "SAMKIEL — Software With Intention."
- **Subheadline:** One or two lines explaining what SAMKIEL is and what it does (company + two arms).
- **CTAs:** Two — one for Agency ("Start a Project"), one for Studio ("See What We're Building").
- **Visual:** High-fidelity dark aesthetic, smooth entry animations (Framer Motion). No clutter.

### B. What We Do (Two Arms)
Two-column or alternating layout introducing the Agency and Studio arms.

**Agency:**
- Tagline direction: "We build for you."
- Short description: Custom software, delivered with care.
- Link: Scrolls to or routes to the Agency section / contact.

**Studio:**
- Tagline direction: "We build for everyone."
- Short description: Products we own, design, and ship ourselves.
- Link: Routes to the Studio section / Kiv.

### C. Studio — What We're Building
Showcases Studio products. Currently one product.

**Kiv**
- Tagline: TBD (to be defined during Kiv branding)
- Description: A micro-journaling and daily check-in app. Built for people who want a simple, intentional way to track how they feel and reflect each day.
- Status badge: **Beta** (or Coming Soon — confirm before launch)
- Auth note: Uses SAMKIEL ID (shown only as a trust signal, not explained in detail)
- CTA: "Learn More" or "Get Early Access" — links to Kiv's own page/subdomain

Layout: Product card(s) with status indicator. Room to add more cards as more Studio products ship.

### D. Agency — Services
Focus: software problem-solving for clients.

**Services offered:**
- Web Development — fast, responsive web apps
- Mobile Apps — cross-platform, native feel
- AI Products — intelligent features and automation
- UI/UX Design — intuitive, beautiful interfaces
- Backend & APIs — scalable infrastructure
- Digital Consulting — strategy and technical direction

**CTA:** "Start a Project" → scrolls to or links to contact.

### E. About
Short. Company-level, not founder-biography.

- Philosophy: "Built with focus. Shipped for the world."
- Stats:
  - Founded 2023
  - 100% Remote
  - 1 Studio product live (update as this grows)
- One paragraph on what SAMKIEL is about — the intention behind the name, the two-arm model, what it means to build software with intention.

### F. Contact
Simple, sleek form.

**Fields:** Name, Email, Message
**Direct contact:** hello@samkiel.tech
**Links:**
- GitHub: github.com/SAMKIELDEV
- LinkedIn: linkedin.com/company/samkiell

Powered by Resend API. On submit: show confirmation state (toast via Sonner).

---

## 6. Separate Pages

| Page | URL | Notes |
|---|---|---|
| Kiv product page | `kiv.samkiel.tech` or `/studio/kiv` | To be scoped separately |
| SAMKIEL ID portal | `account.samkiel.tech` | Auth infrastructure — not linked from main nav |
| Agency work / case studies | `samkiel.tech/work` | Can be sparse now, grows over time |
| Terms of Service | `samkiel.tech/terms` | Already live |
| Privacy Policy | `samkiel.tech/privacy` | Already live |

> **Note on Kiv's URL:** Decide between `kiv.samkiel.tech` (separate subdomain, separate repo) and `samkiel.tech/studio/kiv` (part of the main site) before implementation. This affects scope significantly.

---

## 7. Visual Language & Style Guide

| Token | Value |
|---|---|
| Background | `#0A0A0A` |
| Accent | `#E8FF47` (lime/yellow) |
| Primary text | Zinc/White |
| Display font | Syne (bold, modern) |
| Body font | Figtree (clean, readable) |
| Feel | High-fidelity, dark, smooth — "Apple meets intention" |

**Excluded fonts:** Inter, Roboto, Space Grotesk

**Animations:** Framer Motion — scroll reveal, staggered entry. No excessive motion. Purposeful only.

**Dark mode:** Default. No light mode toggle required for V2.

---

## 8. Technical Requirements

| Concern | Implementation |
|---|---|
| Framework | Next.js (latest stable), App Router |
| Language | TypeScript — strict mode |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Toasts | Sonner |
| Contact form | Resend API |
| Analytics | Vercel Analytics + Speed Insights |
| SEO | Next.js Metadata API — custom OG tags, title, description |
| Deployment | Vercel |

**Tailwind v4 watch points:**
- Confirm `content` paths are correct in config
- Confirm `globals.css` is imported in `layout.tsx`
- Do not use dynamically constructed class names — Tailwind v4 may not detect them

---

## 9. What Changed from V1

| V1 | V2 |
|---|---|
| Agency landing page | Company homepage (ecosystem front door) |
| Kiv — listed as Studio product | **Dropped** |
| Kiv — listed as Studio product | **Dropped** |
| No Studio/Agency arm distinction | Two arms clearly presented |
| No auth infrastructure mentioned | SAMKIEL ID referenced as Studio auth layer |
| No product nav | Products dropdown in nav |
| Generic about stats | Updated stats, company-level framing |

---

## 10. Roadmap

### Phase 2 — This Update (V2)
- [ ] Update Hero copy and CTAs to reflect company identity
- [ ] Add two-arm section (Agency + Studio)
- [ ] Update Studio section — remove Kiv, add Kiv card
- [ ] Update About section copy and stats
- [ ] Update navigation — add Products dropdown
- [ ] Update footer — remove old product links, add new structure
- [ ] Update SEO metadata to reflect company homepage positioning
- [ ] Confirm contact form still working (Resend)

### Phase 3 — Polish
- [ ] Advanced scroll reveal animations
- [ ] Kiv product page (scoped separately)
- [ ] Agency case studies at `/work`
- [ ] `/studio/kiv` or `kiv.samkiel.tech` — decision required

---

## 11. Success Metrics

1. **First impression:** Visitor understands SAMKIEL is a company (not just an agency) within 3 seconds
2. **Clarity:** Both arms (Agency and Studio) are legible without reading everything
3. **Conversion:** Clicks on "Start a Project" (Agency) or Kiv CTA (Studio)
4. **Performance:** 95+ Lighthouse score across Performance, SEO, Accessibility
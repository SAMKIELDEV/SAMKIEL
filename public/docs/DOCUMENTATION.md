# SAMKIEL Technical Documentation

Technical reference for the SAMKIEL company website at `samkiel.tech`.

---

## 1. Tech Stack
-   **Framework:** Next.js 16 (App Router)
-   **Styling:** Tailwind CSS v4.0
-   **Fonts:** Syne (Display), Figtree (Body) via `next/font/google`
-   **Animations:** Framer Motion
-   **Icons:** Lucide React
-   **Deployment:** Vercel

## 2. Infrastructure
| Service | Purpose | URL |
| :--- | :--- | :--- |
| **Vercel** | Hosting & Analytics | [vercel.com](https://vercel.com) |
| **Domain** | samkiel.tech | [samkiel.tech](https://samkiel.tech) |

---

## 3. Project Structure
```bash
/app          # App router pages and global styles
/components   # UI components
  /layout     # Navbar, Footer
  /sections   # Home page sections (Hero, Agency, Studio, etc.)
  /ui         # Reusable atomic buttons/inputs
/lib          # Utilities and shared logic
/public       # Static assets and documentation
```

---

## 4. Key Configurations

### Metadata API (`app/layout.tsx`)
We use the Next.js Metadata API for SEO and Social Sharing. Base URL is configured as:
```typescript
metadataBase: new URL('https://samkiel.tech'),
openGraph: {
  title: 'SAMKIEL',
  description: 'Software With Intention',
  url: 'https://samkiel.tech',
  // ...
}
```

### CSS Variables (`app/globals.css`)
Tailwind 4 uses a new `@theme` syntax. Our primary brand variables:
- `--bg`: `#0A0A0A`
- `--accent`: `#E8FF47`
- `--white`: `#FFFFFF`

---

## 5. Component Guidelines

### Section Layouts
Every section should follow the spacing and container patterns:
```tsx
<section className="py-24 px-6 md:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto">
    <span className="section-label">Section Title</span>
    {/* ...content */}
  </div>
</section>
```

### Animations
Use `Framer Motion` for entry animations. Standard variants:
- **Fade Up:** `opacity: 0, y: 30` -> `opacity: 1, y: 0`
- **Stagger:** Delay children by `0.1s` intervals.

We use a custom hook `useScrollReveal` (or CSS Intersection Observer classes) to trigger these.

---

## 6. Studio Products
The Studio section links to external/sub-projects:
- **Kiv:** `https://Kiv.onrender.com/`
- **Kiv:** `https://samkiel.online`

---

## 7. Deployment Rules
1.  **Main Branch:** Auto-deploys to production.
2.  **Edge Functions:** Leveraged for speed.
3.  **Image Optimization:** Use `next/image` for all assets.
4.  **Analytics:** Ensure `@vercel/analytics` is active in `RootLayout`.

---

## 8. Contact Setup
The contact form/links lead to:
- **Email:** `hello@samkiel.tech`
- **Socials:** Configured in `Footer.tsx` and `Contact.tsx`.

---

## 9. Performance Checklist
- [x] Images are WebP/AVIF.
- [x] Fonts are preloaded via `next/font`.
- [x] Bundle analysis performed.
- [x] Domain `samkiel.tech` configured in Vercel.
- [x] SSL active.

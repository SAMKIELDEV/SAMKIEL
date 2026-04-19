'use client'

import { ExternalLink } from 'lucide-react'
import { useScrollReveal } from '@/components/hooks/useScrollReveal'

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
    description:
      'A real-time chat product built for speed and simplicity.',
    url: 'https://breezrchat.onrender.com/',
    status: 'Live',
  },
  {
    name: 'SKDL',
    tagline: 'Download anything.',
    description:
      'A fast, clean tool for downloading content from the web.',
    url: 'https://samkiel.online',
    status: 'Live',
  },
]

const statusStyles: Record<Product['status'], string> = {
  Live: 'bg-emerald-500',
  Beta: 'bg-amber-400',
  'Coming Soon': 'bg-[#888888]',
}

export const Studio = () => {
  const headerRef = useScrollReveal()
  const cardsRef = useScrollReveal()

  return (
    <section id="studio" className="border-t border-[#1F1F1F] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div ref={headerRef} className="fade-up mb-16">
          <span className="section-label">Studio</span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Products we own and operate
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#888888]">
            SAMKIEL&apos;s studio builds products that solve real problems.
            Designed in-house, shipped worldwide.
          </p>
        </div>

        {/* Product cards */}
        <div
          ref={cardsRef}
          className="stagger-children grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {products.map((product) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-[#1F1F1F] bg-[#111111] p-8 transition-all duration-300 hover:border-[#E8FF47]/30 hover:shadow-[0_0_40px_rgba(232,255,71,0.06)]"
            >
              {/* Status badge */}
              <div className="mb-6 flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${statusStyles[product.status]}`}
                />
                <span className="text-xs font-medium text-[#888888]">
                  {product.status}
                </span>
              </div>

              {/* Product info */}
              <h3 className="mb-1 text-2xl font-bold text-white md:text-3xl">
                {product.name}
              </h3>
              <p className="mb-3 text-sm font-medium text-[#E8FF47]">
                {product.tagline}
              </p>
              <p className="mb-6 text-sm leading-relaxed text-[#888888]">
                {product.description}
              </p>

              {/* Visit link */}
              <div className="flex items-center gap-2 text-sm font-medium text-[#D4D4D4] transition-all duration-200 group-hover:gap-3 group-hover:text-white">
                Visit
                <ExternalLink
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#E8FF47]/5 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

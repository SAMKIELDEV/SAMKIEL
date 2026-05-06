'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Product {
  name: string
  tagline: string
  description: string
  detailUrl: string
  liveUrl: string
  status: 'Live' | 'Beta' | 'Coming Soon'
  logo?: string
}

const products: Product[] = [
  {
    name: 'Kiv',
    tagline: 'Your daily check-in. Simplified.',
    description:
      'A micro-journaling app for people who want a simple, intentional way to reflect each day. Built on SAMKIEL ID.',
    detailUrl: '/studio/kiv',
    liveUrl: 'https://kiv.samkiel.tech',
    status: 'Beta',
    logo: '/assets/kiv-logo.ico',
  },
]

const statusColor: Record<Product['status'], string> = {
  Live: 'bg-emerald-500',
  Beta: 'bg-amber-400',
  'Coming Soon': 'bg-[#52525B]',
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export const Studio = () => {
  return (
    <section id="studio" className="border-t border-[#27272A] py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="section-label">Studio</span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            What We&apos;re Building
          </h2>
        </motion.div>

        {/* Product cards grid — ready for multiple products */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-[#27272A] bg-[#111111] p-8 transition-all duration-300 hover:border-[#E8FF47]/30 hover:shadow-[0_0_40px_rgba(232,255,71,0.06)]"
            >
              {/* Status badge */}
              <div className="mb-6 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${statusColor[product.status]}`} />
                <span className="text-xs font-medium text-[#A1A1AA]">{product.status}</span>
              </div>

              {/* Product info */}
              <div className="mb-1 flex items-center gap-3">
                {product.logo && (
                  <img src={product.logo} alt="" className="h-8 w-8 rounded-lg" />
                )}
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {product.name}
                </h3>
              </div>
              <p className="mb-3 text-sm font-medium text-[#E8FF47]">
                {product.tagline}
              </p>
              <p className="mb-8 text-sm leading-relaxed text-[#A1A1AA]">
                {product.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={product.detailUrl}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-200 hover:gap-3 hover:text-[#E8FF47]"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
                <a
                  href={product.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#A1A1AA] transition-all duration-200 hover:text-white"
                >
                  Try Kiv
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#E8FF47]/5 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

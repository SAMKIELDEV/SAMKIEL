'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const arms = [
  {
    label: 'Agency',
    headline: 'We build for you.',
    body: 'Custom software, designed and delivered with care. From web apps to AI products, we work with clients to solve real problems.',
    cta: 'Work With Us',
    href: '/#agency',
  },
  {
    label: 'Studio',
    headline: 'We build for everyone.',
    body: 'Products we design, own, and ship ourselves. Built on SAMKIEL ID — one account, every product.',
    cta: 'See Our Products',
    href: '/#studio',
  },
]

export const Arms = () => {
  return (
    <section id="arms" className="border-t border-[#27272A] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {arms.map((arm) => (
            <motion.div
              key={arm.label}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-[#27272A] bg-[#111111] p-8 transition-all duration-300 hover:border-[#3F3F46] md:p-10"
            >
              <span className="section-label">{arm.label}</span>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
                {arm.headline}
              </h3>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-[#A1A1AA]">
                {arm.body}
              </p>
              <a
                href={arm.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8FF47] transition-all duration-200 hover:gap-3"
              >
                {arm.cta}
                <ArrowRight size={14} />
              </a>

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#E8FF47]/5 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

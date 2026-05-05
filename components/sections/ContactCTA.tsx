'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const ContactCTA = () => {
  return (
    <section className="border-t border-[#27272A] py-12 md:py-16">
      <motion.div
        className="mx-auto max-w-[1280px] px-6 text-center md:px-12 lg:px-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Ready to build something?
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-base text-[#A1A1AA]">
          Tell us what you&apos;re working on. We&apos;ll take it from there.
        </p>
        <a
          href="https://account.samkiel.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#E8FF47] px-8 py-4 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_30px_rgba(232,255,71,0.25)]"
        >
          Create a SAMKIEL ID
          <ArrowRight size={14} />
        </a>
      </motion.div>
    </section>
  )
}

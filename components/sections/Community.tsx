'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const Community = () => {
  return (
    <section id="community" className="border-t border-[#27272A] py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-[1280px] px-6 text-center md:px-12 lg:px-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <span className="section-label">Community</span>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Follow our build.
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-[#A1A1AA] md:text-lg">
          Join our official WhatsApp channel to get first-look product launches, company news, behind-the-scenes updates, and real-time insights on what we&apos;re currently working on.
        </p>
        <a
          href="https://whatsapp.com/channel/0029VbCuacC8kyyDI9XopD1G"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#E8FF47] px-8 py-4 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_30px_rgba(232,255,71,0.25)]"
        >
          Join the WhatsApp Channel
          <ArrowRight size={14} />
        </a>
      </motion.div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react'

const features = [
  {
    title: 'Daily check-ins',
    description:
      'A simple prompt each day to reflect on how you feel. No pressure, no streaks to break.',
  },
  {
    title: 'Micro-journaling',
    description:
      'Lightweight entries — no word counts, no templates. Just you and your thoughts.',
  },
  {
    title: 'SAMKIEL ID',
    description:
      'One account that works across all SAMKIEL products. Sign up once, use everywhere.',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export const KivContent = () => {
  return (
    <>
      {/* Hero */}
      <section className="noise-overlay grid-pattern relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Gradient orb */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-15 blur-[120px]"
          style={{
            background:
              'radial-gradient(circle, rgba(232,255,71,0.4) 0%, transparent 70%)',
          }}
        />

        <motion.div
          className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status badge */}
          <div className="mb-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="text-xs font-medium text-[#A1A1AA]">Beta</span>
          </div>

          <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            Kiv
          </h1>
          <p className="mb-3 text-lg font-medium text-[#E8FF47] md:text-xl">
            Your daily check-in. Simplified.
          </p>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-[#A1A1AA] md:text-lg">
            A micro-journaling app for people who want a simple, intentional way
            to reflect each day. Track how you feel, write quick entries, and
            build a habit of self-awareness.
          </p>

          <div className="flex flex-row flex-wrap items-center gap-4">
            <a
              href="https://kiv.samkiel.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8FF47] px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_30px_rgba(232,255,71,0.25)]"
            >
              Get Early Access
              <ExternalLink size={14} />
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#27272A] px-7 py-3.5 text-sm font-medium text-[#FAFAFA] transition-all duration-200 hover:border-[#A1A1AA] hover:text-white"
            >
              Back to SAMKIEL
            </Link>
          </div>
        </motion.div>
      </section>

      {/* What is Kiv */}
      <section className="border-t border-[#27272A] py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">What is Kiv</span>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Reflection, without the friction.
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={item}
                className="rounded-xl border border-[#27272A] bg-[#111111] p-8"
              >
                <CheckCircle size={20} className="mb-4 text-[#E8FF47]" />
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#A1A1AA]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#27272A] py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-[1280px] px-6 text-center md:px-12 lg:px-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Start reflecting today.
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-base text-[#A1A1AA]">
            Kiv is free during Beta. Sign up with your SAMKIEL ID and start your
            first check-in.
          </p>
          <a
            href="https://kiv.samkiel.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#E8FF47] px-8 py-4 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_30px_rgba(232,255,71,0.25)]"
          >
            Try Kiv
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </section>
    </>
  )
}

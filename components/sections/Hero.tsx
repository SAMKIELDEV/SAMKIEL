'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export const Hero = () => {
  return (
    <section
      id="hero"
      className="noise-overlay grid-pattern relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(232,255,71,0.4) 0%, transparent 70%)',
          animation: 'float-1 15s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, rgba(232,255,71,0.3) 0%, transparent 70%)',
          animation: 'float-2 18s ease-in-out infinite',
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-[1280px] px-6 py-32 md:px-12 lg:px-20"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          variants={item}
          className="mb-6 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight text-white md:mb-10 md:text-7xl lg:text-8xl"
        >
          Software With Intention.
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-xl text-base leading-relaxed text-[#A1A1AA] md:text-lg"
        >
          SAMKIEL builds software that matters — through a client agency and a
          studio of products we own.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-row flex-wrap items-center gap-4 md:mt-14"
        >
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#E8FF47] px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_30px_rgba(232,255,71,0.25)]"
          >
            Start a Project →
          </a>
          <a
            href="/#studio"
            className="inline-flex items-center justify-center rounded-full border border-[#27272A] px-7 py-3.5 text-sm font-medium text-[#FAFAFA] transition-all duration-200 hover:border-[#A1A1AA] hover:text-white"
          >
            See What We&apos;re Building
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

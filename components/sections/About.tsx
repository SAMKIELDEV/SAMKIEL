'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: 'Founded 2023', label: '' },
  { value: '100% Remote', label: '' },
  { value: '1 Product Live', label: '' },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export const About = () => {
  return (
    <section id="about" className="border-t border-[#27272A] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">About</span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Built with focus.
            <br />
            Shipped for the world.
          </h2>
        </motion.div>

        {/* Story */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-base leading-relaxed text-[#FAFAFA]">
            SAMKIEL is a software company based in Nigeria, operating fully
            remotely. We started with a simple belief: that good software is
            intentional software — built to solve a real problem, designed to
            last, and shipped with care. We work across two arms — an agency that
            builds for clients, and a studio that builds for everyone.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap gap-10 border-t border-[#27272A] pt-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.value} variants={item} className="min-w-[140px]">
              <p
                className="text-2xl font-bold text-white md:text-3xl"
                style={{ fontFamily: 'var(--font-display), sans-serif' }}
              >
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

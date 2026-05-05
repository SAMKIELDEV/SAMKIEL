'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Smartphone,
  Bot,
  Palette,
  Server,
  MessageSquare,
  type LucideIcon,
} from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Fast, responsive web applications built for scale',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Cross-platform apps with a native feel',
  },
  {
    icon: Bot,
    title: 'AI Products',
    description: 'Intelligent features, automation, and AI-native tools',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Intuitive, beautiful interfaces that people actually use',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Scalable servers, databases, and integrations',
  },
  {
    icon: MessageSquare,
    title: 'Digital Consulting',
    description: 'Technical strategy and direction for teams moving fast',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export const Agency = () => {
  return (
    <section id="agency" className="border-t border-[#27272A] py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="section-label">Agency</span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            The Agency
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#A1A1AA]">
            We solve problems through software.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={item}
                className="group rounded-xl border border-[#27272A] bg-[#111111] p-6 transition-all duration-300 hover:border-[#3F3F46] hover:shadow-[0_0_30px_rgba(232,255,71,0.04)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8FF47]/10">
                  <Icon
                    size={20}
                    className="text-[#E8FF47] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mb-2 text-base font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#A1A1AA]">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8FF47] transition-all duration-200 hover:gap-3"
          >
            Start a Project
            <span className="text-base">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import {
  Globe,
  Smartphone,
  Bot,
  Palette,
  Server,
  MessageSquare,
  type LucideIcon,
} from 'lucide-react'
import { useScrollReveal } from '@/components/hooks/useScrollReveal'

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Fast, responsive websites and web apps built to convert.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Cross-platform apps that feel native on every device.',
  },
  {
    icon: Bot,
    title: 'AI Products',
    description: 'Intelligent features and automation built into your product.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Interfaces that are intuitive, beautiful, and functional.',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Scalable servers and APIs your product can grow on.',
  },
  {
    icon: MessageSquare,
    title: 'Digital Consulting',
    description: 'Strategy and technical direction for your next build.',
  },
]

export const Agency = () => {
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div ref={headerRef} className="fade-up mb-16">
          <span className="section-label">Agency</span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            We build for your business
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#888888]">
            From concept to deployment — we design, develop, and ship custom
            software products tailored to your business. Web, mobile, AI, and
            beyond.
          </p>
        </div>

        {/* Service cards grid */}
        <div
          ref={gridRef}
          className="stagger-children grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group rounded-xl border border-[#1F1F1F] bg-[#111111] p-6 transition-all duration-300 hover:border-[#333333] hover:shadow-[0_0_30px_rgba(232,255,71,0.04)]"
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
                <p className="text-sm leading-relaxed text-[#888888]">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="fade-up mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8FF47] transition-all duration-200 hover:gap-3"
          >
            Start a Project
            <span className="text-base">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

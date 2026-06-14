'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Globe,
  Smartphone,
  Palette,
  Webhook,
  Server,
  Compass,
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowRight,
  ArrowUpRight,
  Plus,
  type LucideIcon,
} from 'lucide-react'

// --- What we do ---------------------------------------------------------------

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Fast, responsive web apps engineered to scale with the business behind them.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform apps that feel native on every device they touch.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Interfaces people understand on sight — and actually enjoy using.',
  },
  {
    icon: Webhook,
    title: 'API & Integrations',
    description: 'Clean, documented APIs and third-party integrations that just work.',
  },
  {
    icon: Server,
    title: 'Deployment & DevOps',
    description: 'Pipelines, infrastructure, and monitoring built to ship fast and stay up.',
  },
  {
    icon: Compass,
    title: 'Technical Consulting',
    description: 'Architecture and direction for teams that need to move fast and move right.',
  },
]

// --- How we work --------------------------------------------------------------

interface Stage {
  icon: LucideIcon
  title: string
  description: string
}

const process: Stage[] = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We dig into the problem, the users, and the goal before a line of code.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Flows, wireframes, and a visual system that earns its place.',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'We build in tight iterations, shipping working software early and often.',
  },
  {
    icon: ShieldCheck,
    title: 'Review & QA',
    description: 'Every release is tested, reviewed, and hardened before it goes out.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'We deploy, watch it closely, and stay on as it meets the real world.',
  },
]

// --- Client work --------------------------------------------------------------

interface Project {
  name: string
  category: string
  description: string
  href: string
  display: string
  initials: string
  accent: string
  logo?: string
  status: 'Live' | 'In Progress'
}

const statusColor: Record<Project['status'], string> = {
  Live: 'bg-emerald-500',
  'In Progress': 'bg-amber-400',
}

// Add new client projects here — the grid grows on its own.
const projects: Project[] = [
  {
    name: 'PGpoetry',
    category: 'Poetry Platform',
    description: 'A home for poets to write, share, and discover poetry.',
    href: 'https://pgpoetry.samkiel.dev',
    display: 'pgpoetry.samkiel.dev',
    initials: 'PG',
    accent: 'linear-gradient(135deg, rgba(232,255,71,0.16) 0%, rgba(232,255,71,0.02) 100%)',
    logo: '/assets/pg_logo.png',
    status: 'Live',
  },
]

// --- Motion -------------------------------------------------------------------

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

export const AgencyContent = () => {
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
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="section-label">Agency</span>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            Software, built to your spec.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#A1A1AA] md:text-lg">
            The Agency is SAMKIEL&apos;s client-facing arm. You bring the problem; we
            design, build, and ship the software that solves it — end to end, with
            no hand-waving in between.
          </p>

          <div className="mt-10 flex flex-row flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8FF47] px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_30px_rgba(232,255,71,0.25)]"
            >
              Start a Project
              <ArrowRight size={14} />
            </Link>
            <a
              href="#client-work"
              className="inline-flex items-center gap-2 rounded-full border border-[#27272A] px-7 py-3.5 text-sm font-medium text-[#FAFAFA] transition-all duration-200 hover:border-[#A1A1AA] hover:text-white"
            >
              See the work
            </a>
          </div>
        </motion.div>
      </section>

      {/* What we do */}
      <section className="border-t border-[#27272A] py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="section-label">What We Do</span>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              One team, the whole stack.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#A1A1AA]">
              From the first wireframe to the production deploy — the people who
              design it are the people who ship it.
            </p>
          </motion.div>

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
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-[#27272A] py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="section-label">How We Work</span>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Five stages. No surprises.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#A1A1AA]">
              A process tight enough to keep momentum, open enough that you always
              know where things stand.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {process.map((stage, index) => {
              const Icon = stage.icon
              return (
                <motion.div
                  key={stage.title}
                  variants={item}
                  className="group relative flex flex-col rounded-xl border border-[#27272A] bg-[#111111] p-6 transition-all duration-300 hover:border-[#3F3F46] hover:shadow-[0_0_30px_rgba(232,255,71,0.04)]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-tight text-[#E8FF47]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Icon
                      size={18}
                      className="text-[#52525B] transition-colors duration-300 group-hover:text-[#E8FF47]"
                    />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {stage.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#A1A1AA]">
                    {stage.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Client work */}
      <section
        id="client-work"
        className="scroll-mt-24 border-t border-[#27272A] py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="section-label">Client Work</span>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              Built for clients. Shipped for real.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#A1A1AA]">
              A growing portfolio of products we&apos;ve designed and delivered.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#27272A] bg-[#111111] transition-all duration-300 hover:border-[#E8FF47]/30 hover:shadow-[0_0_40px_rgba(232,255,71,0.06)]"
              >
                {/* Thumbnail — project logo on a clean plate, monogram fallback */}
                {project.logo ? (
                  <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-[#27272A] bg-white">
                    <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="h-20 w-auto max-w-[60%] object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className="relative flex h-44 items-center justify-center overflow-hidden border-b border-[#27272A]"
                    style={{ background: project.accent }}
                  >
                    <div className="grid-pattern absolute inset-0 opacity-40" />
                    <span
                      className="relative text-5xl font-bold tracking-tight text-white"
                      style={{ fontFamily: 'var(--font-syne-src), sans-serif' }}
                    >
                      {project.initials}
                    </span>
                  </div>
                )}

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${statusColor[project.status]}`} />
                    <span className="text-xs font-medium text-[#A1A1AA]">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-white">
                    {project.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-[#E8FF47]">
                    {project.category}
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-[#A1A1AA]">
                    {project.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-[#52525B]">{project.display}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-all duration-200 group-hover:gap-2.5 group-hover:text-[#E8FF47]">
                      Visit
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#E8FF47]/5 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />
              </motion.a>
            ))}

            {/* Placeholder — signals the grid is built to grow */}
            <motion.div
              variants={item}
              className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#27272A] bg-transparent p-6 text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#27272A] bg-[#111111]">
                <Plus size={20} className="text-[#52525B]" />
              </div>
              <p className="text-sm font-medium text-white">More, in the works</p>
              <p className="mt-1 max-w-[14rem] text-xs leading-relaxed text-[#52525B]">
                New client projects land here as we design and ship them.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#27272A] py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-[1280px] px-6 text-center md:px-12 lg:px-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Got something to build?
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-[#A1A1AA]">
            Tell us what you&apos;re working on. We&apos;ll tell you how we&apos;d
            build it — and what it takes to get there.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#E8FF47] px-8 py-4 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_30px_rgba(232,255,71,0.25)]"
          >
            Work With Us
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>
    </>
  )
}

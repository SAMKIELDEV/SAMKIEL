import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Careers | SAMKIEL',
  description: 'Join the team building Software With Intention.',
}

interface JobRole {
  id: string
  title: string
  department: string
  type: string
  location: string
  description: string
  link?: string
}

// Add roles here in the future to dynamically render open positions
const roles: JobRole[] = []

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="noise-overlay grid-pattern relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        {/* Sleek floating gradient orb */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(232,255,71,0.45) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 text-center md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl">
            {/* Section label badge */}
            <span className="section-label">Careers</span>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Work With Us
            </h1>
            
            <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-[#A1A1AA] md:text-lg">
              We build digital products and client solutions. We are a team driven by intention, crafting systems that endure.
            </p>
          </div>

          {roles.length > 0 ? (
            <div className="mx-auto mt-16 max-w-4xl text-left">
              <h2 className="mb-8 text-2xl font-bold text-white">Open Openings</h2>
              <div className="grid gap-6 sm:grid-cols-1">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    className="group relative rounded-xl border border-[#27272A] bg-[#111111]/40 p-6 transition-all duration-300 hover:border-[#E8FF47]/20 hover:bg-[#111111]/80"
                  >
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="rounded-full bg-[#E8FF47]/10 px-3 py-1 text-xs font-medium text-[#E8FF47]">
                            {role.department}
                          </span>
                          <span className="text-xs text-[#52525B]">{role.type}</span>
                        </div>
                        <h3 className="mt-3 text-xl font-bold text-white transition-colors group-hover:text-[#E8FF47]">
                          {role.title}
                        </h3>
                        <p className="mt-1 text-sm text-[#52525B]">{role.location}</p>
                        <p className="mt-4 text-sm text-[#A1A1AA]">{role.description}</p>
                      </div>
                      <div>
                        <a
                          href={role.link || '/contact'}
                          className="inline-flex items-center justify-center rounded-full bg-[#E8FF47] px-6 py-2.5 text-xs font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a]"
                        >
                          Apply Now →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Branded empty state */
            <div className="mx-auto max-w-md border-t border-[#27272A]/40 pt-10">
              <h2 className="mb-3 text-xl font-bold text-white">
                We&apos;re not hiring right now.
              </h2>
              <p className="text-sm leading-relaxed text-[#A1A1AA]">
                But we&apos;re always building. When we are ready to grow the team, we&apos;ll post roles here first. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

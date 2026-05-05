import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Our Work | SAMKIEL Agency',
  description: 'Case studies and client projects from SAMKIEL Agency.',
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <section className="noise-overlay grid-pattern relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        {/* Gradient orb */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
          style={{
            background:
              'radial-gradient(circle, rgba(232,255,71,0.4) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-32 text-center md:px-12 lg:px-20">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Our Work
          </h1>
          <p className="mb-4 text-lg text-[#A1A1AA]">
            Case studies coming soon.
          </p>
          <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-[#52525B]">
            We&apos;re documenting the work we do. Check back soon, or reach out
            to discuss your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#E8FF47] px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_30px_rgba(232,255,71,0.25)]"
          >
            Start a Project →
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}

import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A] text-white">
      <Navbar />
      <div className="noise-overlay grid-pattern relative flex flex-grow flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden">
        {/* Gradient orb */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(232,255,71,0.4) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10">
          <h1 
            className="text-[120px] font-bold tracking-tighter text-[#E8FF47] md:text-[200px] lg:text-[240px] leading-none"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            404
          </h1>
          <h2 className="mt-8 text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Lost in space.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[#A1A1AA] md:text-lg">
            The page you are looking for doesn&apos;t exist or has been moved to a new dimension.
          </p>
          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[#E8FF47] px-8 py-4 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_30px_rgba(232,255,71,0.25)]"
            >
              Take Me Home →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

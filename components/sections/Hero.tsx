'use client'

import { useScrollReveal } from '@/components/hooks/useScrollReveal'

export const Hero = () => {
  const headingRef = useScrollReveal()
  const subtextRef = useScrollReveal()
  const ctaRef = useScrollReveal()

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

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-32 md:px-12 lg:px-20">
        {/* Label */}
        <div ref={headingRef} className="fade-up">
          <span className="section-label mb-8 inline-block">
            SAMKIEL / 2026
          </span>

          {/* Headline */}
          <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:mb-10 md:text-7xl lg:text-8xl">
            We build software
            <br />
            <span className="text-[#E8FF47]">that moves.</span>
          </h1>
        </div>

        {/* Subheadline */}
        <p
          ref={subtextRef}
          className="fade-up mt-8 max-w-xl text-base leading-relaxed text-[#888888] md:mt-10 md:text-lg lg:mt-12"
        >
          SAMKIEL is a software company building digital products and client
          solutions from Lagos, Nigeria. Agency work. Studio products. Shipped
          for the world.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="fade-up mt-12 flex flex-row items-center gap-6 md:mt-16">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full bg-[#E8FF47] px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_30px_rgba(232,255,71,0.25)]"
          >
            See Our Work
          </a>
          <a
            href="#studio"
            className="inline-flex items-center justify-center rounded-full border border-[#1F1F1F] px-7 py-3.5 text-sm font-medium text-[#D4D4D4] transition-all duration-200 hover:border-[#888888] hover:text-white"
          >
            Explore Studio
          </a>
        </div>
      </div>
    </section>
  )
}

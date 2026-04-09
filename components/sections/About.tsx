'use client'

import { useScrollReveal } from '@/components/hooks/useScrollReveal'

const stats = [
  { value: '2', label: 'Products Shipped' },
  { value: '2023', label: 'Founded' },
  { value: 'Ile Ife', label: 'Nigeria' },
]

export const About = () => {
  const headerRef = useScrollReveal()
  const storyRef = useScrollReveal()
  const statsRef = useScrollReveal()

  return (
    <section id="about" className="border-t border-[#1F1F1F] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div ref={headerRef} className="fade-up mb-12">
          <span className="section-label">About</span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Built from Ile Ife.
            <br />
            Shipped for the world.
          </h2>
        </div>

        {/* Story */}
        <div ref={storyRef} className="fade-up mb-16 max-w-2xl space-y-4">
          <p className="text-base leading-relaxed text-[#D4D4D4]">
            SAMKIEL was founded with one idea: that great software should come
            from everywhere. We&apos;re a small, focused team that takes on real
            problems and ships things that actually work.
          </p>
          <p className="text-base leading-relaxed text-[#888888]">
            Our agency arm builds custom digital products for businesses — from
            web and mobile apps to AI-powered tools. Our studio arm builds
            products we own and operate, solving problems we care about.
          </p>
          <p className="text-base leading-relaxed text-[#888888]">
            We don&apos;t chase trends. We build what works, ship it fast, and
            make it last.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="stagger-children flex flex-wrap gap-8 border-t border-[#1F1F1F] pt-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-[120px]">
              <p
                className="text-2xl font-bold text-white md:text-3xl"
                style={{ fontFamily: 'var(--font-display), sans-serif' }}
              >
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#888888]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

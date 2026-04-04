'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Studio', href: '#studio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#1F1F1F]'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        {/* Wordmark */}
        <a
          href="#hero"
          className="font-[var(--font-display)] text-xl font-extrabold leading-none tracking-tight text-white"
          style={{ fontFamily: 'var(--font-display), sans-serif' }}
        >
          SAMKIEL
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#888888] transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-[#E8FF47] px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] md:inline-flex"
        >
          Start a Project
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center text-white md:hidden"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-b border-[#1F1F1F] bg-[#0A0A0A]/95 backdrop-blur-md transition-all duration-300 md:hidden',
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 border-none opacity-0'
        )}
      >
        <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="rounded-lg px-4 py-3 text-sm font-medium text-[#D4D4D4] transition-colors duration-200 hover:bg-[#111111] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-2 rounded-full bg-[#E8FF47] px-5 py-2.5 text-center text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a]"
          >
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  )
}

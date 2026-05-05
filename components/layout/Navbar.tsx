'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const products = [
  { label: 'Kiv', description: 'Daily check-in & micro-journaling', href: '/studio/kiv' },
]

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavClick = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#27272A]'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        {/* Icon logo */}
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/assets/favicon.png"
            alt="SAMKIEL"
            width={32}
            height={32}
            className="h-8 w-8"
            priority  
          />
          <span className="text-lg font-bold text-white">SAMKIEL</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/#about"
            className="text-sm font-medium text-[#A1A1AA] transition-colors duration-200 hover:text-white"
          >
            About
          </a>

          {/* Products dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-[#A1A1AA] transition-colors duration-200 hover:text-white"
              id="products-dropdown-toggle"
            >
              Products
              <ChevronDown
                size={14}
                className={cn(
                  'transition-transform duration-200',
                  dropdownOpen && 'rotate-180'
                )}
              />
            </button>
            <div
              className={cn(
                'absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-xl border border-[#27272A] bg-[#111111] p-2 shadow-2xl transition-all duration-200',
                dropdownOpen
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-2 opacity-0'
              )}
            >
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  onClick={() => setDropdownOpen(false)}
                  className="group flex flex-col gap-0.5 rounded-lg px-4 py-3 transition-colors duration-150 hover:bg-[#1A1A1A]"
                >
                  <span className="text-sm font-semibold text-white">{product.label}</span>
                  <span className="text-xs text-[#A1A1AA]">{product.description}</span>
                </Link>
              ))}
            </div>
          </div>

          <a
            href="/#agency"
            className="text-sm font-medium text-[#A1A1AA] transition-colors duration-200 hover:text-white"
          >
            Agency
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className="hidden rounded-full bg-[#E8FF47] px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_20px_rgba(232,255,71,0.3)] md:inline-flex"
        >
          Start a Project →
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

      {/* Mobile menu — full-screen overlay */}
      <div
        className={cn(
          'fixed inset-0 top-0 z-40 flex flex-col bg-[#0A0A0A] transition-all duration-300 md:hidden',
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" onClick={handleNavClick} className="inline-flex items-center gap-2">
            <Image
              src="/assets/favicon.png"
              alt="SAMKIEL"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-lg font-bold text-white">SAMKIEL</span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center text-white"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-2 px-8">
          <a
            href="/#about"
            onClick={handleNavClick}
            className="py-4 text-2xl font-bold text-white transition-colors hover:text-[#E8FF47]"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            About
          </a>
          <Link
            href="/studio/kiv"
            onClick={handleNavClick}
            className="py-4 text-2xl font-bold text-white transition-colors hover:text-[#E8FF47]"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            Kiv
          </Link>
          <a
            href="/#agency"
            onClick={handleNavClick}
            className="py-4 text-2xl font-bold text-white transition-colors hover:text-[#E8FF47]"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            Agency
          </a>
          <a
            href="/contact"
            onClick={handleNavClick}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#E8FF47] px-7 py-4 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_30px_rgba(232,255,71,0.25)]"
          >
            Start a Project →
          </a>
        </div>
      </div>
    </nav>
  )
}

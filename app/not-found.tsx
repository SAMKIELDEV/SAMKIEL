'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0A] text-white">
      <Navbar />
      
      <div className="noise-overlay grid-pattern relative flex flex-grow flex-col items-center justify-center px-6 pt-32 pb-20 text-center overflow-hidden">
        
        {/* Clean Flat Content Container */}
        <motion.div 
          className="relative z-10 max-w-lg w-full p-6 md:p-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Accent Label */}
          <div className="mx-auto mb-6 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8FF47]">
            404 Error
          </div>

          {/* Large Solid 404 Text */}
          <h1 
            className="text-[120px] font-bold tracking-tighter text-white md:text-[160px] leading-none"
            style={{ fontFamily: 'var(--font-display), sans-serif' }}
          >
            404
          </h1>

          {/* Professional Message */}
          <h2 className="mt-8 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Page Not Found
          </h2>
          
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#A1A1AA] md:text-base">
            The page you are looking for does not exist, has been removed, or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#27272A] bg-transparent px-7 py-3.5 text-xs font-semibold text-white transition-all duration-200 hover:border-[#A1A1AA] cursor-pointer"
            >
              <ArrowLeft size={14} />
              Go Back
            </button>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#E8FF47] px-7 py-3.5 text-xs font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] cursor-pointer"
            >
              <Home size={14} />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}

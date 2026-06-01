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
        
        {/* Animated Background Glows */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #E8FF47 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: ['-50%', '-48%', '-52%', '-50%'],
            y: ['-50%', '-52%', '-48%', '-50%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="pointer-events-none absolute left-[40%] top-[40%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.05] blur-[80px]"
          style={{
            background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, -10, 0],
            y: [0, -15, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Content Container with Glassmorphism */}
        <motion.div 
          className="relative z-10 max-w-lg w-full rounded-2xl border border-white/5 bg-[#111111]/30 p-8 md:p-12 backdrop-blur-xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Accent Top Border */}
          <div className="absolute top-0 left-1/2 h-[2px] w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E8FF47]/50 to-transparent" />

          {/* Elegant Badge */}
          <div className="mx-auto mb-6 inline-flex items-center gap-1.5 rounded-full border border-[#E8FF47]/20 bg-[#E8FF47]/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E8FF47]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E8FF47] animate-pulse" />
            404 Error
          </div>

          {/* Glowing 404 Text */}
          <div className="relative">
            <h1 
              className="text-[100px] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 md:text-[140px] leading-none"
              style={{ fontFamily: 'var(--font-display), sans-serif' }}
            >
              404
            </h1>
            {/* Absolute overlay of 404 for elegant depth */}
            <h1 
              className="absolute inset-0 text-[100px] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#E8FF47]/20 to-transparent md:text-[140px] leading-none blur-[15px] select-none pointer-events-none"
              style={{ fontFamily: 'var(--font-display), sans-serif' }}
            >
              404
            </h1>
          </div>

          {/* Message */}
          <h2 className="mt-6 text-xl font-bold tracking-tight text-white md:text-2xl">
            Lost in space.
          </h2>
          
          <p className="mx-auto mt-4 text-sm leading-relaxed text-[#A1A1AA] md:text-base">
            The page you are looking for doesn&apos;t exist or has been moved to a new dimension.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-white/5 hover:border-white/20 cursor-pointer"
            >
              <ArrowLeft size={14} />
              Go Back
            </button>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#E8FF47] px-6 py-3.5 text-xs font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_30px_rgba(232,255,71,0.25)] cursor-pointer"
            >
              <Home size={14} />
              Take Me Home
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}

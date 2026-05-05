'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const SamkielID = () => {
  return (
    <section id="samkiel-id" className="relative overflow-hidden py-24 md:py-32">
      {/* Background Treatment: Subtle accent tint over #0A0A0A with a bordered card effect */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,255,71,0.03)_0%,transparent_70%)]" />
      
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-16 lg:p-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Subtle accent glow on the border/top */}
          <div className="absolute -top-[1px] left-1/2 h-[1px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E8FF47]/20 to-transparent" />
          
          <div className="relative z-10 max-w-2xl">
            <motion.span 
              className="section-label"
              variants={itemVariants}
            >
              SAMKIEL ID
            </motion.span>
            
            <motion.h2 
              className="font-display mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl"
              variants={itemVariants}
            >
              One account.<br />Every product.
            </motion.h2>
            
            <motion.p 
              className="font-body mb-10 text-lg leading-relaxed text-text-muted md:text-xl"
              variants={itemVariants}
            >
              Create your SAMKIEL ID and access Kiv — and everything we ship next. 
              One login, built into every SAMKIEL Studio product.
            </motion.p>
            
            <motion.div 
              className="mb-8 flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <a
                href="https://account.samkiel.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Create Account
                <ArrowRight size={18} />
              </a>
              
              <a
                href="https://account.samkiel.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 active:scale-[0.98]"
              >
                Learn More
                <ArrowRight size={18} />
              </a>
            </motion.div>
            
            <motion.p 
              className="font-body text-sm text-text-muted"
              variants={itemVariants}
            >
              Already have an account?{' '}
              <a 
                href="https://account.samkiel.tech/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-accent"
              >
                Sign in →
              </a>
            </motion.p>
          </div>

          {/* Decorative architectural element - subtle glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#E8FF47]/5 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-white/5 blur-[100px]" />
        </motion.div>
      </div>
    </section>
  )
}

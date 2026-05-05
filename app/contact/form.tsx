'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Mail, Github, Linkedin } from 'lucide-react'
import { sendEmail } from '@/app/actions'

interface FormData {
  name: string
  email: string
  message: string
}

const socials = [
  {
    label: 'hello@samkiel.tech',
    href: 'mailto:hello@samkiel.tech',
    icon: Mail,
    external: false,
  },
  {
    label: 'github.com/SAMKIELDEV',
    href: 'https://github.com/SAMKIELDEV',
    icon: Github,
    external: true,
  },
  {
    label: 'linkedin.com/company/samkiell',
    href: 'https://www.linkedin.com/company/samkiell/',
    icon: Linkedin,
    external: true,
  },
]

export const ContactForm = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await sendEmail(form)

      if (result.success) {
        toast.success("Message sent. We'll be in touch.")
        setForm({ name: '', email: '', message: '' })
      } else {
        toast.error(
          result.error ||
            'Something went wrong. Try again or email us directly.'
        )
      }
    } catch {
      toast.error('Something went wrong. Try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  const inputClasses =
    'w-full rounded-lg border border-[#27272A] bg-[#111111] px-4 py-3.5 text-sm text-white placeholder-[#52525B] outline-none transition-all duration-200 focus:border-[#E8FF47]/50 focus:ring-1 focus:ring-[#E8FF47]/20'

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="section-label">Contact</span>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Start a Project
          </h1>
          <p className="mt-4 max-w-lg text-base text-[#A1A1AA] md:text-lg">
            Tell us what you&apos;re building. We&apos;ll take it from there.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5 lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClasses}
                id="contact-name"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClasses}
                id="contact-email"
              />
            </div>
            <textarea
              placeholder="Tell us about your project..."
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClasses} resize-none`}
              id="contact-message"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-[#E8FF47] px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-200 hover:bg-[#d4eb3a] hover:shadow-[0_0_30px_rgba(232,255,71,0.25)] disabled:cursor-not-allowed disabled:opacity-50"
              id="contact-submit"
            >
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
          </motion.form>

          {/* Direct contact info */}
          <motion.div
            className="flex flex-col justify-start gap-8 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                Direct contact
              </p>
              <div className="space-y-4">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.external ? '_blank' : undefined}
                      rel={social.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 text-sm text-[#FAFAFA] transition-colors duration-200 hover:text-[#E8FF47]"
                    >
                      <Icon size={16} className="text-[#E8FF47]" />
                      {social.label}
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="rounded-xl border border-[#27272A] bg-[#111111] p-6">
              <p className="text-sm leading-relaxed text-[#A1A1AA]">
                Prefer a quick chat? Drop us an email at{' '}
                <a
                  href="mailto:hello@samkiel.tech"
                  className="text-[#E8FF47] hover:underline"
                >
                  hello@samkiel.tech
                </a>{' '}
                and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Mail } from 'lucide-react'
import { sendEmail } from '@/app/actions'

interface FormData {
  name: string
  email: string
  message: string
}

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const WhatsappIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const socials = [
  {
    label: 'hello@samkiel.tech',
    href: 'mailto:hello@samkiel.tech',
    icon: <Mail size={16} className="text-[#E8FF47]" />,
    external: false,
  },
  {
    label: 'github.com/SAMKIELDEV',
    href: 'https://github.com/SAMKIELDEV',
    icon: <GithubIcon />,
    external: true,
  },
  {
    label: 'linkedin.com/company/samkiell',
    href: 'https://www.linkedin.com/company/samkiell/',
    icon: <LinkedinIcon />,
    external: true,
  },
  {
    label: 'WhatsApp Channel',
    href: 'https://whatsapp.com/channel/0029VbCuacC8kyyDI9XopD1G',
    icon: <WhatsappIcon />,
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
                {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.external ? '_blank' : undefined}
                      rel={social.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 text-sm text-[#FAFAFA] transition-colors duration-200 hover:text-[#E8FF47]"
                    >
                      <span className="text-[#E8FF47]">{social.icon}</span>
                      {social.label}
                    </a>
                ))}
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

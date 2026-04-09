import type { Metadata } from 'next'
import { Syne, Figtree } from 'next/font/google'
import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-syne-src',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-figtree-src',
})

export const metadata: Metadata = {
  title: 'SAMKIEL — Digitalizing The World',
  description:
    'SAMKIEL is a software company building digital products and client solutions from Ile Ife, Nigeria.',
  metadataBase: new URL('https://samkiel.tech'),
  openGraph: {
    title: 'SAMKIEL',
    description: 'Digitalizing The World',
    url: 'https://samkiel.tech',
    siteName: 'SAMKIEL',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAMKIEL',
    description: 'Digitalizing The World',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${figtree.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster position="bottom-right" theme="dark" richColors />
      </body>
    </html>
  )
}

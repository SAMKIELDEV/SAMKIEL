import type { Metadata } from 'next'
import { Syne, Figtree } from 'next/font/google'
import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from '@next/third-parties/google'
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
  title: 'SAMKIEL — Software With Intention',
  description:
    'SAMKIEL is a software company building digital products and client solutions.',
  metadataBase: new URL('https://samkiel.tech'),
  openGraph: {
    title: 'SAMKIEL',
    description: 'Software With Intention',
    url: 'https://samkiel.tech',
    siteName: 'SAMKIEL',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAMKIEL',
    description: 'Software With Intention',
  },
  icons: {
    icon: '/icon.jpg',
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
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
        <Toaster position="bottom-right" theme="dark" richColors />
      </body>
    </html>
  )
}

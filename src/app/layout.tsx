import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Footer from '@/components/what-they-know/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://what-they-know.vercel.app/'),
  title: 'What They Know',
  description: 'Dicover what they know about you when you navigate the web.',
  keywords: [
    'Vinicius Cestarii',
    'iP',
    'security',
    'privacy',
    'web',
    'browsing',
    'data',
    'analytics',
    'analytics',
  ],
  icons: '/icon.png',
  twitter: {
    creator: 'vinicius-cestari',
    creatorId: 'vinicius-cestari',
    images: '/cover.jpg',
    title: 'What They Know',
    description: 'Dicover what they know about you when you navigate the web.',
  },
  openGraph: {
    url: 'https://what-they-know.vercel.app/',
    images: '/cover.jpg',
    title: 'What They Know',
    description: 'Dicover what they know about you when you navigate the web.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className=" flex flex-col bg-background min-h-screen  p-4 p-y6 text-primary max-w-default mx-auto">
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'What They Know',
  description: 'Dicover what they know about you using your IP address',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className=" flex flex-col bg-background min-h-screen  p-4 p-y6 text-primary max-w-default mx-auto">
        <Toaster />
        <main>{children}</main>
      </body>
    </html>
  )
}

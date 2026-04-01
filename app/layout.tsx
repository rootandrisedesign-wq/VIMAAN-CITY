import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond, Mitr } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant'
})

const mitr = Mitr({
  subsets: ['thai', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-thai',
})

export const metadata: Metadata = {
  title: 'VIMAAN | Neo-Siam Digital Metropolis',
  description: 'Enter VIMAAN — a Neo-Siam digital metropolis where fashion meets technology',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#D4AF37',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} ${mitr.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

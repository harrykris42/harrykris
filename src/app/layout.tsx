import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Harikrishnan K | Developer Portfolio',
  description:
    'Official personal website of Harikrishnan K — developer, student, and founder of Wisplet.',
  metadataBase: new URL('https://harrykris.com'),
  openGraph: {
    title: 'Harikrishnan K | Developer Portfolio',
    description:
      'Founder of Wisplet. AI, OS, and automation enthusiast. Explore my projects and journey.',
    url: 'https://harrykris.com',
    siteName: 'harrykris.com',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <header className="p-4 flex justify-between items-center max-w-5xl mx-auto">
          <Link href="/" className="text-xl font-semibold hover:underline">
            harrykris.com
          </Link>
          <nav className="space-x-4 text-sm">
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
            {/* <Link href="/about" className="hover:underline">About</Link> */}
            {/* <Link href="/contact" className="hover:underline">Contact</Link> */}
          </nav>
        </header>
        <main className="max-w-5xl mx-auto px-4">{children}</main>
      </body>
    </html>
  )
}

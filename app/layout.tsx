import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.harrisonfeig.com'),
  title: {
    default: 'Harrison Feig | NYC Fintech, Tokenization & Digital Assets',
    template: '%s | Harrison Feig',
  },
  description: 'Harrison Feig is a New York City fintech and digital assets professional working across tokenization, business development, research, writing, and institutional financial technology.',
  keywords: [
    'Harrison Feig',
    'Harrison Weig',
    'NYC tokenization',
    'New York City fintech',
    'fintech strategy',
    'digital assets',
    'tokenization',
    'tokenized equities',
    'real world assets',
    'RWA tokenization',
    'blockchain finance',
    'institutional fintech',
    'Broadridge',
  ],
  authors: [{ name: 'Harrison Feig' }],
  creator: 'Harrison Feig',
  publisher: 'Harrison Feig',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Harrison Feig | NYC Fintech, Tokenization & Digital Assets',
    description: 'Career portfolio for Harrison Feig, focused on fintech strategy, tokenization, digital assets, institutional finance, research, writing, and selected photography.',
    url: 'https://www.harrisonfeig.com',
    siteName: 'Harrison Feig',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Harrison Feig | NYC Fintech, Tokenization & Digital Assets',
    description: 'Career portfolio focused on fintech strategy, tokenization, digital assets, research, writing, and institutional finance.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

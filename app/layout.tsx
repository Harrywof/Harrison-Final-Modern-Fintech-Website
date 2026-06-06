import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Harrison Feig | Fintech & Tokenization Strategist',
  description: 'Strategy professional at Broadridge specializing in digital assets, tokenization, and institutional fintech. Explore my case studies, articles, and photography.',
  keywords: ['fintech', 'tokenization', 'digital assets', 'blockchain', 'corporate strategy', 'Broadridge'],
  authors: [{ name: 'Harrison Feig' }],
  openGraph: {
    title: 'Harrison Feig | Fintech & Tokenization Strategist',
    description: 'Strategy professional specializing in tokenization, digital assets, and institutional fintech.',
    type: 'website',
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
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

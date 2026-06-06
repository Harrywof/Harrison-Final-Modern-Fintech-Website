"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react"
import { notFound } from "next/navigation"
import { use } from "react"

const articlesData: Record<string, {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content: string[]
}> = {
  "future-of-tokenization": {
    title: "The Future of Real-World Asset Tokenization",
    excerpt: "Exploring how tokenization is reshaping institutional investment and what it means for the next decade of financial infrastructure.",
    date: "May 15, 2026",
    readTime: "12 min read",
    category: "Tokenization",
    content: [
      "The tokenization of real-world assets represents one of the most significant shifts in financial infrastructure since the digitization of trading in the 1990s. By representing physical assets like real estate, commodities, and art as digital tokens on a blockchain, we're fundamentally changing how value is transferred, stored, and accessed.",
      "What makes this moment different from previous waves of blockchain hype is the convergence of several factors: regulatory clarity in major jurisdictions, institutional-grade custody solutions, and proven technology that has weathered multiple market cycles. We're no longer talking about theoretical benefits—we're seeing real deployment at scale.",
      "Consider the real estate market. Traditional real estate investment requires significant capital, lengthy due diligence, and involves multiple intermediaries. A tokenized approach can reduce minimum investment thresholds from millions to thousands of dollars, enable 24/7 trading, and provide unprecedented transparency into underlying asset performance.",
      "The institutional adoption curve is accelerating. Major banks including JPMorgan, Goldman Sachs, and BNY Mellon have launched or announced tokenization initiatives. BlackRock's tokenized money market fund crossed $500M in assets within months of launch. These aren't experiments—they're the beginning of a fundamental infrastructure shift.",
      "However, challenges remain. Interoperability between different blockchain networks, the 'oracle problem' of connecting on-chain assets to off-chain data, and the complexity of representing legal ownership through smart contracts are all active areas of development. The winners in this space will be those who can navigate these complexities while maintaining the simplicity that drives adoption.",
      "Looking ahead to 2030, I expect tokenization to be the default method for issuing and transferring financial assets. The question isn't whether this transition will happen, but how quickly incumbent institutions can adapt and whether new players will capture the value creation opportunity.",
    ],
  },
  "defi-institutional": {
    title: "Why Institutions Are Finally Embracing DeFi",
    excerpt: "A deep dive into the regulatory clarity and infrastructure improvements that are bringing traditional finance into decentralized markets.",
    date: "April 28, 2026",
    readTime: "8 min read",
    category: "DeFi",
    content: [
      "For years, DeFi was viewed by traditional finance as a Wild West of speculation and regulatory arbitrage. That perception is rapidly changing as institutions recognize the efficiency gains and new revenue opportunities that decentralized protocols can provide.",
      "The shift began with infrastructure. Institutional-grade custody solutions from companies like Fireblocks and Anchorage have made it possible for regulated entities to interact with DeFi protocols while maintaining the security and compliance standards their stakeholders require.",
      "Regulatory clarity has been equally important. The EU's MiCA framework and the SEC's evolving guidance have given compliance teams the frameworks they need to evaluate DeFi participation. Rather than operating in a legal gray area, institutions can now engage with clear rules of the road.",
      "The yield opportunity is impossible to ignore. When traditional money markets offer 4-5% yields, DeFi protocols offering 8-12% on stablecoin deposits command attention—especially when those yields come from transparent, audited smart contracts rather than opaque counterparty risk.",
      "We're seeing this play out in real deployments. Major asset managers are using DeFi protocols for yield optimization on treasury holdings. Banks are exploring on-chain settlement to reduce counterparty risk and capital requirements. Insurance companies are using prediction markets for more accurate risk pricing.",
      "The next frontier is composability—the ability to combine multiple DeFi protocols into sophisticated financial products. This is where institutional expertise in product structuring meets the programmability of blockchain, creating entirely new categories of financial instruments.",
    ],
  },
}

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const article = articlesData[slug]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Link */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
      </div>

      {/* Header */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="text-accent uppercase tracking-wider">{article.category}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6 text-balance">
            {article.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {article.excerpt}
          </p>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {article.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Author */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary" />
            <div>
              <p className="font-medium">Alex Chen</p>
              <p className="text-sm text-muted-foreground">Head of Product, Tokenization at Apex Digital</p>
            </div>
          </div>
        </motion.div>
      </article>

      {/* Share & More */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Enjoyed this article?</h3>
              <p className="text-sm text-muted-foreground">Share it with your network or subscribe for more.</p>
            </div>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm border border-border rounded-full hover:bg-secondary transition-colors"
              >
                Share on X
              </a>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors"
              >
                More Articles
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

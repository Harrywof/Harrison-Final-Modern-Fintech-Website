"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const articles = [
  {
    slug: "battle-for-tokenized-equities",
    title: "The Battle for Tokenized Equities Has Begun",
    excerpt: "Native issuance, the DTCC, and the broker are three players racing to fill the vacuum in tokenized equities. Who wins, and what does true ownership look like in a tokenized world?",
    date: "February 26, 2026",
    readTime: "4 min read",
    category: "Tokenization",
    featured: true,
    external: "https://medium.com/@harrison.feig/the-battle-for-tokenized-equities-had-begun-05264f653d67",
  },
]

const featuredArticles = articles.filter((a) => a.featured)

export default function ArticlesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-accent text-sm tracking-wider uppercase mb-4">
            Articles
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-6">
            Thoughts on{" "}
            <span className="text-accent italic font-serif">fintech</span> and{" "}
            <span className="text-accent italic font-serif">beyond</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Writing about tokenization, digital assets, market structure, and the future of 
            financial infrastructure. Perspectives from the front lines of institutional 
            digital asset adoption.
          </p>
        </motion.div>
      </section>

      {/* Featured Articles */}
      <section className="border-t border-border/50 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-accent text-sm tracking-wider uppercase mb-8">Featured</p>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={article.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 border border-border rounded-lg hover:border-accent/50 hover:bg-card/50 transition-all h-full"
                >
                  <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider mb-4">
                    <span className="text-accent">{article.category}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{article.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>Medium</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-medium mb-4 group-hover:text-accent transition-colors flex items-start gap-2">
                    {article.title}
                    <ArrowUpRight className="w-5 h-5 flex-shrink-0 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <p className="text-xs text-muted-foreground">{article.date}</p>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Read More on Medium */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 border border-border rounded-lg"
        >
          <div>
            <p className="text-accent text-sm tracking-wider uppercase mb-2">More Writing</p>
            <h2 className="text-2xl font-light tracking-tight mb-2">Read my latest on Medium</h2>
            <p className="text-muted-foreground text-sm max-w-lg">
              I publish ongoing analysis on tokenization, digital asset market structure, 
              and the future of capital markets.
            </p>
          </div>
          <a
            href="https://medium.com/@harrison.feig"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-colors flex-shrink-0"
          >
            View Medium Profile
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-border/50 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Get notified when I publish new pieces on tokenization, digital assets, and 
              market structure. No spam, unsubscribe anytime.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-input border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    slug: "corporate-actions",
    title: "Corporate Actions on Chain Strategic Initiative",
    category: "Strategic Research",
    year: "2025",
    description: "Was part of the team that developed and implemented on-chain governance for tokenized equities, helping connect institutional corporate actions with blockchain-based market infrastructure.",
    impact: ["White Paper", "Executive Briefing", "Innovation Lab"],
    articleUrl: "https://www.broadridge.com/press-release/2026/broadridge-live-with-on-chain-governance",
  },
  {
    slug: "digital-transfer-agent",
    title: "Digital Transfer Agent Prototype & Platform Design",
    category: "Product Design",
    year: "2025",
    description: "Designed and built interactive prototype demonstrating how tokenized issuance, ownership, and corporate actions function in a next-generation platform using Figma and V0.dev.",
    impact: ["Working Prototype", "Figma Design System", "Strategic Demos"],
  },
  {
    slug: "tokenization-framework",
    title: "Tokenization Strategic Framework for Institutional Clients",
    category: "Corporate Strategy",
    year: "2025",
    description: "Developed comprehensive strategic operating models examining how tokenization impacts brokers, DTCC, and issuers. Built three future-state scenarios and platform-level BTCS integration roadmaps for Broadridge leadership.",
    impact: ["3 Operating Models", "C-Suite Presentations", "EY Partnership"],
  },
]

const categories = ["All", "Corporate Strategy", "Product Design", "Strategic Research"]

export default function CaseStudiesPage() {
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
            Case Studies
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-6">
            Strategic initiatives in{" "}
            <span className="text-accent italic font-serif">tokenization & digital assets</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A selection of strategic projects I&apos;ve worked on at Broadridge, including corporate strategy development, 
            institutional partnerships, and platform design initiatives in the digital assets space.
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="border-y border-border/50 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`px-4 py-2 text-xs tracking-wide uppercase border rounded-full transition-colors ${
                  category === "All"
                    ? "bg-accent text-accent-foreground border-accent"
                    : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid gap-16">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group block p-6 md:p-8 border border-border rounded-lg hover:border-accent/50 hover:bg-secondary/30 transition-all">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider">
                    <span className="text-accent">{study.category}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{study.year}</span>
                  </div>
                  
                  <Link
                    href="/case-studies"
                    className="inline-flex items-start gap-3 text-xl md:text-2xl font-medium hover:text-accent transition-colors"
                  >
                    <span>{study.title}</span>
                    <ArrowUpRight className="w-5 h-5 mt-2 flex-shrink-0" />
                  </Link>
                  <p className="text-muted-foreground leading-relaxed">
                    {study.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="flex flex-wrap gap-3">
                    {study.impact.map((metric) => (
                      <span
                        key={metric}
                        className="px-4 py-2 text-sm bg-secondary rounded-full"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                  {"articleUrl" in study && study.articleUrl ? (
                    <a
                      href={study.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                    >
                      Read the Broadridge announcement
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-light tracking-tight mb-4">
              Want to discuss tokenization strategy?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              {"I'm always open to discussing institutional tokenization, digital assets, and fintech innovation."}
            </p>
            <a
              href="https://www.linkedin.com/in/harrison-feig/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const featuredWork = [
  {
    title: "Tokenization Strategic Framework for Institutional Clients",
    category: "Corporate Strategy",
    description: "Developed strategic operating models for how tokenization impacts brokers, DTCC, and issuers. Built BTCS integration platform roadmaps.",
    href: "/case-studies/tokenization-framework",
  },
  {
    title: "Digital Transfer Agent Prototype & Platform Design",
    category: "Product Design",
    description: "Designed and built working prototype demonstrating tokenized issuance, ownership, and corporate actions in next-generation platform.",
    href: "/case-studies/digital-transfer-agent",
  },
  {
    title: "Corporate Actions on Chain Strategic Initiative",
    category: "Strategic Research",
    description: "Authored formal white paper exploring on-chain corporate actions, outlining Broadridge's strategic options for institutional adoption.",
    href: "/case-studies/corporate-actions",
  },
]

const expertise = [
  "Digital Assets Strategy",
  "Tokenization Architecture",
  "Corporate Actions",
  "Executive Storytelling",
  "Financial Modeling",
  "Strategic Partnerships",
]

export default function HomePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-[1fr_340px] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-sm tracking-wider uppercase mb-4">
              Fintech & Tokenization Strategist
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-balance">
              Bridging{" "}
              <span className="text-accent italic font-serif">traditional finance</span> with the{" "}
              <span className="text-accent italic font-serif">future of digital assets</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              I drive go-to-market strategy for tokenization, digital asset, and SaaS solutions
              serving financial institutions at Broadridge. My work has helped generate $1M+ in
              qualified pipeline and support the first on-chain proxy vote, connecting institutional
              finance with blockchain technology.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium hover:bg-secondary transition-colors"
              >
                About Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Headshot%20New%202025-9TxeSRlVaNDf1IdpGEhjLtblZsaMop.jpg"
                  alt="Harrison Feig"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-xl px-5 py-4 shadow-sm">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Current role</p>
                <p className="text-sm font-medium">Business Development | Digital Assets & Tokenization</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Tags */}
      <section className="border-y border-border/50 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-wrap gap-3">
            {expertise.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-4 py-2 text-xs tracking-wide uppercase border border-border rounded-full text-muted-foreground"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-accent text-sm tracking-wider uppercase mb-2">Selected Work</p>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid gap-6">
          {featuredWork.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={project.href}
                className="group block p-6 md:p-8 border border-border rounded-lg hover:border-accent/50 hover:bg-secondary/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs text-accent uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="text-xl md:text-2xl font-medium group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          href="/case-studies"
          className="md:hidden inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-8"
        >
          View all work
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Latest Articles Preview */}
      <section className="border-t border-border/50 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-accent text-sm tracking-wider uppercase mb-2">Insights</p>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                Latest Thinking
              </h2>
            </div>
            <Link
              href="/articles"
              className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              All articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <a
                href="https://medium.com/@harrison.feig/the-battle-for-tokenized-equities-had-begun-05264f653d67"
                target="_blank"
                rel="noopener noreferrer"
                className="block space-y-4"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  February 26, 2026
                </p>
                <h3 className="text-xl font-medium group-hover:text-accent transition-colors">
                  The Battle for Tokenized Equities Has Begun
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Native issuance, the DTCC, and the broker are racing to fill the vacuum in
                  tokenized equities. A closer look at who wins and what true ownership could mean
                  in a tokenized world.
                </p>
              </a>
            </motion.article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            {"Let's explore the future of institutional finance"}
          </h2>
          <p className="text-muted-foreground mb-8">
            {"I'm always interested in discussing tokenization strategy, fintech innovation, and institutional partnerships."}
          </p>
          <Link
            href="https://www.linkedin.com/in/harrison-feig/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react"
import { notFound } from "next/navigation"
import { use } from "react"

const caseStudiesData: Record<string, {
  title: string
  category: string
  year: string
  duration: string
  role: string
  description: string
  challenge: string
  solution: string
  impact: { metric: string; value: string }[]
  technologies: string[]
}> = {
  "tokenization-framework": {
    title: "Tokenization Strategic Framework for Institutional Clients",
    category: "Corporate Strategy",
    year: "2025",
    duration: "Ongoing",
    role: "Digital Assets and Corporate Strategy Initiatives Lead",
    description: "Partnered directly with Head of Strategy to develop comprehensive industry and market structure models examining how tokenization impacts brokers, DTCC, and issuers.",
    challenge: "Broadridge needed to understand the strategic implications of tokenization across the financial ecosystem, particularly for institutional clients who process substantial transaction volumes. Traditional financial infrastructure players were uncertain about the impact on their business models and competitive positioning.",
    solution: "Developed three distinct future-state operating models showing different paths of tokenization adoption. Built detailed platform-level integration scenarios for BTCS infrastructure. Delivered executive presentations to Broadridge leadership including the President of BBD, outlining strategic options for on-chain corporate actions and communications.",
    impact: [
      { metric: "Operating Models", value: "3" },
      { metric: "Executive Presentations", value: "C-Suite" },
      { metric: "Strategic Partnerships", value: "EY + Others" },
      { metric: "Industry Impact", value: "Brokers, DTCC, Issuers" },
    ],
    technologies: ["Strategic Analysis", "Market Modeling", "Executive Communication", "Scenario Planning"],
  },
  "digital-transfer-agent": {
    title: "Digital Transfer Agent Prototype & Platform Design",
    category: "Product Design",
    year: "2025",
    duration: "3 months",
    role: "Digital Assets Product Strategy",
    description: "Designed and built an interactive prototype demonstrating how tokenized issuance, ownership, and corporate actions could function in a next-generation platform.",
    challenge: "Executives needed a tangible, interactive demonstration of how a next-generation transfer agent platform could work on-chain. Static presentations and whitepapers weren't sufficient to communicate the vision to stakeholders and potential partners.",
    solution: "Built a working prototype using Figma and V0.dev showcasing tokenized issuance workflows, ownership transfers, corporate action processing, and investor communication flows. The prototype provided an interactive experience that brought the strategic vision to life and served as a reference architecture for platform design.",
    impact: [
      { metric: "Interactive Prototype", value: "V0 + Figma" },
      { metric: "Use Cases Demonstrated", value: "4 Core Flows" },
      { metric: "Stakeholder Engagement", value: "High" },
      { metric: "Strategic Reference", value: "Yes" },
    ],
    technologies: ["Figma", "V0.dev", "Prototype Design", "User Experience"],
  },
  "corporate-actions": {
    title: "Corporate Actions on Chain Strategic Initiative",
    category: "Strategic Research",
    year: "2025",
    duration: "Ongoing",
    role: "Strategy & Innovation",
    description: "Authored formal white paper for Innovation Lab exploring the strategic implications and implementation pathways for processing corporate actions on-chain.",
    challenge: "Corporate actions represent a critical pain point in the securities industry, characterized by manual processes, reconciliation challenges, and T+2 settlement. Broadridge needed to understand the strategic opportunity and execution pathways for on-chain corporate actions.",
    solution: "Developed comprehensive white paper analyzing regulatory requirements, technical architecture, market adoption drivers, and competitive implications. Paper outlines specific strategic options for Broadridge to position itself in the on-chain corporate actions ecosystem, including partnership opportunities and go-to-market strategies.",
    impact: [
      { metric: "White Paper", value: "Published" },
      { metric: "Strategic Options", value: "3 Pathways" },
      { metric: "Leadership Audience", value: "SVP + Above" },
      { metric: "Innovation Impact", value: "High Priority" },
    ],
    technologies: ["Strategic Research", "Market Analysis", "Technical Architecture", "Regulatory Analysis"],
  },
}

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const study = caseStudiesData[slug]

  if (!study) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Link */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="text-accent uppercase tracking-wider">{study.category}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {study.year}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {study.duration}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6">
            {study.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {study.description}
          </p>

          <p className="mt-6 text-sm">
            <span className="text-muted-foreground">Role:</span>{" "}
            <span className="text-accent">{study.role}</span>
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm uppercase tracking-wider text-accent mb-4">The Challenge</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {study.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm uppercase tracking-wider text-accent mb-4">The Solution</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {study.solution}
              </p>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm uppercase tracking-wider text-accent mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm border border-border rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Impact Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sticky top-32 p-6 border border-border rounded-lg bg-card/50"
            >
              <h2 className="text-sm uppercase tracking-wider text-accent mb-6">Impact</h2>
              <div className="space-y-6">
                {study.impact.map((item) => (
                  <div key={item.metric}>
                    <p className="text-3xl font-light">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.metric}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-medium mb-2">Interested in similar strategic work?</h3>
            <p className="text-muted-foreground text-sm">{"Let's discuss how I can support your tokenization and digital assets initiatives."}</p>
          </div>
          <a
            href="mailto:harrison.feig@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  )
}

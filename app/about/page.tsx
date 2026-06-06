"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const experience = [
  {
    period: "March 2025 — Present",
    role: "Business Development Specialist",
    company: "Broadridge Financial",
    companyUrl: "https://broadridge.com",
    description: "Spearhead go-to-market strategy and outreach for digital asset solutions including Shadow (post-trade) and ClearFi (digital disclosure hub). Generated $1M+ in qualified pipeline and supported strategic partnership discussions with Chainlink, DTCC, and S&P. Part of the team that developed the first on-chain proxy vote, and currently leading development of an MVP for a tokenized corporate actions platform.",
    skills: ["Go-to-Market", "Digital Assets", "Tokenization", "On-Chain Proxy Voting", "Pipeline Development"],
  },
  {
    period: "June 2024 — March 2025",
    role: "Sales Management Rotational Program",
    company: "Broadridge Financial",
    companyUrl: "https://broadridge.com",
    description: "Rotated across high-impact divisions including NYFIX and the Digital Center of Excellence, focusing on blockchain product sales and go-to-market strategy. Worked cross-functionally with product, compliance, and sales teams to build crypto-sector outreach strategies.",
    skills: ["Sales Strategy", "Blockchain Products", "Cross-functional", "GTM"],
  },
  {
    period: "August 2023 — May 2024",
    role: "Sales Operations Representative",
    company: "Broadridge Financial",
    companyUrl: "https://broadridge.com",
    description: "Built targeted prospect lists and executed lead qualification for crypto-focused campaigns using Salesforce, ZoomInfo, RocketReach, and SEC databases.",
    skills: ["Prospecting", "Salesforce", "Lead Qualification", "Market Research"],
  },
  {
    period: "January 2022 — May 2022",
    role: "Legislative Intern",
    company: "Senate Majority Leader Chuck Schumer",
    companyUrl: "https://schumer.senate.gov",
    description: "Collaborated with Senator Schumer's staff to conduct research, draft policy reports, and engage with constituents, developing expertise in analysis, communication, and strategic problem-solving.",
    skills: ["Policy Research", "Communications", "Strategic Analysis"],
  },
]

const education = [
  {
    degree: "B.S. Business Management (Marketing Specialization)",
    school: "Stony Brook University",
    year: "2023",
    honors: "summa cum laude, 3.89 GPA"
  },
  {
    degree: "B.A. Psychology",
    school: "Stony Brook University",
    year: "2023",
    honors: "Business Honors Program"
  },
]

const skills = [
  "Sales & Prospecting",
  "Digital Assets",
  "Tokenization",
  "Executive Communication",
  "Go-to-Market Strategy",
  "Crypto / Fintech",
  "Salesforce",
  "ZoomInfo",
  "V0.dev",
  "Figma",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-sm tracking-wider uppercase mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-8">
              Strategy professional at the intersection of{" "}
              <span className="text-accent italic font-serif">finance</span> and{" "}
              <span className="text-accent italic font-serif">tokenization</span>
            </h1>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m Harrison Feig, a business development professional driving digital assets and tokenization initiatives at Broadridge Financial. I lead go-to-market strategy for blockchain products, and have generated $1M+ in qualified pipeline while supporting strategic partnership discussions with Chainlink, DTCC, and S&P.
              </p>
              <p>
                I was part of the team that developed the first on-chain proxy vote, a milestone in bringing institutional corporate actions to blockchain. My background combines experience in government policy, sales strategy, and hands-on product design, allowing me to understand both the regulatory landscape and the technical innovation driving institutional adoption of digital assets.
              </p>
              <p>
                I believe tokenization represents a fundamental shift in how financial infrastructure operates. My work focuses on making this transition practical, scalable, and beneficial for the institutional finance ecosystem.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden relative shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Headshot%20New%202025-9TxeSRlVaNDf1IdpGEhjLtblZsaMop.jpg"
                alt="Harrison Feig"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6 rounded-lg max-w-xs shadow-lg">
              <p className="text-sm text-muted-foreground">Based in</p>
              <p className="text-lg font-medium">Queens, NY</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-accent text-sm tracking-wider uppercase mb-2">Career</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-0">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 border-b border-border/50"
              >
                <p className="text-sm text-muted-foreground">{job.period}</p>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-medium">{job.role}</h3>
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:underline"
                    >
                      {job.company}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Skills */}
      <section className="border-t border-border/50 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-accent text-sm tracking-wider uppercase mb-2">Background</p>
              <h2 className="text-2xl font-light tracking-tight mb-8">Education</h2>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.degree} className="space-y-1">
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-muted-foreground text-sm">{edu.school}</p>
                    <p className="text-muted-foreground text-xs">{edu.honors}</p>
                    <p className="text-muted-foreground text-xs">{edu.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-accent text-sm tracking-wider uppercase mb-2">Toolkit</p>
              <h2 className="text-2xl font-light tracking-tight mb-8">Skills & Tools</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm border border-border rounded-full text-foreground bg-background hover:border-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-accent text-sm tracking-wider uppercase mb-2">Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              What I Believe
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Clarity in Complexity",
                description: "Tokenization solves real problems in finance. My job is to explain why in terms institutional leaders understand.",
              },
              {
                title: "Strategy Drives Implementation",
                description: "The best technology fails without proper strategy. I focus on building comprehensive roadmaps, not just point solutions.",
              },
              {
                title: "Bridge the Gap",
                description: "The future isn't about replacing traditional finance—it's about enhancing it with new capabilities and efficiency.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-border rounded-lg"
              >
                <h3 className="text-lg font-medium mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

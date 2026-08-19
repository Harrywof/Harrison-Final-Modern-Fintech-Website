"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const experience = [
  {
    period: "March 2025 - Present",
    role: "Business Development | Digital Assets & Product Go-to-Market",
    company: "Broadridge Financial",
    companyUrl: "https://broadridge.com",
    description: "Work across digital asset strategy, product initiatives, and go-to-market execution for institutional financial technology solutions. Developed market-structure analyses, tokenization operating models, executive materials, and on-chain corporate actions concepts while supporting client outreach across banks, broker-dealers, asset managers, and fintech firms. Generated more than $1.5M in qualified pipeline through research, segmentation, prospecting, and qualification.",
    skills: ["Business Development", "Digital Assets", "Tokenization", "Product Initiatives", "Go-to-Market Strategy"],
  },
  {
    period: "June 2024 - March 2025",
    role: "Management Rotational Program",
    company: "Broadridge Financial",
    companyUrl: "https://broadridge.com",
    description: "Built experience across financial operations, business analysis, and strategy through rotational work at Broadridge. Developed financial forecasts, ROI models, and operational performance dashboards using Excel and Power BI, and designed a business case for an automated early-warning system tied to client contract penalty thresholds.",
    skills: ["Operations Strategy", "Business Analysis", "Financial Modeling", "Power BI", "Process Improvement"],
  },
  {
    period: "August 2023 - May 2024",
    role: "Business Analyst, Sales Operations",
    company: "Broadridge Financial",
    companyUrl: "https://broadridge.com",
    description: "Supported sales operations and business development through account research, data analysis, prospect segmentation, and lead qualification. Built targeted prospect lists and used Salesforce, ZoomInfo, RocketReach, and SEC data to improve outreach planning and identify qualified institutional opportunities.",
    skills: ["Business Analysis", "Sales Operations", "Salesforce", "Data Analysis", "Market Research"],
  },
  {
    period: "January 2022 - May 2022",
    role: "Legislative Intern",
    company: "Senate Majority Leader Chuck Schumer",
    companyUrl: "https://schumer.senate.gov",
    articleUrl: "https://news.stonybrook.edu/student-spotlight/advocacy-corps-students-use-experience-to-land-congressional-jobs-and-internships/",
    photo: "/harrison-schumer.jpg",
    description: "Collaborated with Senator Schumer's staff to conduct research, draft policy reports, and engage with constituents, developing expertise in analysis, communication, and strategic problem-solving.",
    skills: ["Policy Research", "Communications", "Strategic Analysis"],
  },
]

const education = [
  {
    degree: "B.S. Business Management",
    school: "Stony Brook University",
    year: "2023",
    honors: "summa cum laude; Business Honors Program"
  },
  {
    degree: "B.A. Psychology",
    school: "Stony Brook University",
    year: "2023",
    honors: ""
  },
]

const skills = [
  "Business Development",
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
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-sm tracking-wider uppercase mb-4">
              About
            </p>
            <h1 className="text-3xl md:text-4xl font-light leading-tight tracking-tight mb-6">
              Strategy professional at the intersection of{" "}
              <span className="text-accent italic font-serif">finance</span> and{" "}
              <span className="text-accent italic font-serif">tokenization</span>
            </h1>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m Harrison Feig, a business development professional working across digital assets, tokenization, and institutional financial infrastructure at Broadridge Financial. I&apos;ve generated more than $1.5M in qualified pipeline while supporting go-to-market execution, market analysis, and strategic partnership initiatives.
              </p>
              <p>
                My background combines business analysis, financial modeling, sales operations, government policy, and hands-on product development. That range helps me connect the commercial, operational, regulatory, and technical considerations behind institutional adoption of digital assets.
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
              <p className="text-sm text-muted-foreground">Available for</p>
              <p className="text-lg font-medium">Fintech & digital assets opportunities</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-accent text-sm tracking-wider uppercase mb-2">Career</p>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight">
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
                  {"articleUrl" in job && job.articleUrl ? (
                    <a
                      href={job.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                    >
                      Read the Stony Brook feature
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : null}
                  {"photo" in job && job.photo ? (
                    <div className="relative mt-4 aspect-[3/2] max-w-xl overflow-hidden rounded-lg border border-border bg-secondary">
                      <Image
                        src={job.photo}
                        alt="Harrison Feig with Senator Chuck Schumer"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : null}
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
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-14">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
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
                    {edu.honors ? <p className="text-muted-foreground text-xs">{edu.honors}</p> : null}
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

    </div>
  )
}

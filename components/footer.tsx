import Link from "next/link"
import { Linkedin } from "lucide-react"

const socialLinks = [
  { href: "https://www.linkedin.com/in/harrison-feig/", label: "LinkedIn", icon: Linkedin },
]

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/articles", label: "Articles" },
  { href: "/photography", label: "Photography" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-medium tracking-tight">
              Harrison Feig
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Strategy professional specializing in tokenization, digital assets, and institutional fintech innovation at Broadridge.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-border hover:bg-secondary hover:border-accent/50 transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
            <a
              href="mailto:harrison.feig@gmail.com"
              className="block text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              harrison.feig@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} Harrison Feig. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with precision in Queens, NY
          </p>
        </div>
      </div>
    </footer>
  )
}

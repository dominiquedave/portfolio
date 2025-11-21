import { Link } from "react-router-dom"
import { Linkedin, Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold">
              Tri<span className="text-accent">Tech</span>
            </Link>
            <p className="mt-4 text-foreground-muted">
              Strategic software engineering for growth-focused businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-foreground-muted hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-foreground-muted hover:text-foreground transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-foreground-muted hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-foreground-muted hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-4 text-foreground-muted">
              <a href="mailto:TridentTechnologies2025@outlook.com" className="hover:text-accent transition-colors">
                TridentTechnologies2025@outlook.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-foreground-muted">
          <p>&copy; 2025 TriTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative border-t border-border/50 bg-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/logos/shiba-logo.png"
                  alt="Shiba Software Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Shiba Software Consulting
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
              Cloud-native full-stack development, microservice architecture, REST APIs, 
              event-driven systems, and AI/RAG application development. Remote-first, California-based.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="https://github.com/wilsonhj"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hj-y/"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contact@shibasoftwareconsulting.com"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services#fullstack" className="text-muted-foreground hover:text-primary transition-colors">
                  Full-Stack Development
                </Link>
              </li>
              <li>
                <Link href="/services#microservices" className="text-muted-foreground hover:text-primary transition-colors">
                  Microservices
                </Link>
              </li>
              <li>
                <Link href="/services#api" className="text-muted-foreground hover:text-primary transition-colors">
                  REST API Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="text-muted-foreground hover:text-primary transition-colors">
                  AI & RAG Applications
                </Link>
              </li>
              <li>
                <Link href="/services#mlops" className="text-muted-foreground hover:text-primary transition-colors">
                  MLOps & LLM Pipelines
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Shiba Software Consulting LLC. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

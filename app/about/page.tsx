"use client"

import Link from "next/link"
import { Target, Users, Lightbulb, ArrowRight, Github, Linkedin, Mail, Globe, Code, Zap, Shield, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-foreground">About </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Shiba Software</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground">
              Modernizing legacy systems and building cutting-edge applications 
              with cloud-native solutions. Based in California, serving clients globally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Shiba Software Consulting was founded with a simple mission: to help businesses 
                  build software that actually works. After years of seeing projects fail due to 
                  poor architecture decisions, outdated practices, and technical debt, we set out 
                  to do things differently.
                </p>
                <p>
                  We specialize in cloud-native development because we believe modern applications 
                  should be scalable, resilient, and cost-effective from day one. Our expertise spans 
                  the full stack—from React frontends to distributed backend systems to AI-powered 
                  applications.
                </p>
                <p>
                  As a remote-first consultancy, we work with clients across the globe, bringing 
                  Silicon Valley expertise to projects of all sizes. Whether you're a startup 
                  building your MVP or an enterprise modernizing legacy systems, we're here to help.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <div className="text-4xl font-heading font-bold text-secondary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <div className="text-4xl font-heading font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Remote-First</div>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border/50 text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">24hr</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're driven by three core principles that guide everything we do
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <MissionCard
              icon={<Target className="h-8 w-8" />}
              title="Excellence in Delivery"
              description="We don't just write code—we deliver production-ready systems that scale. Every line is crafted with intention, tested thoroughly, and documented clearly."
              gradient="from-cyan-500 to-blue-500"
            />
            <MissionCard
              icon={<Globe className="h-8 w-8" />}
              title="Remote-First Culture"
              description="Based in California, working globally. We believe great work happens when talented people have flexibility, trust, and the right tools to collaborate effectively."
              gradient="from-violet-500 to-purple-500"
            />
            <MissionCard
              icon={<Lightbulb className="h-8 w-8" />}
              title="Continuous Innovation"
              description="We stay on the cutting edge by using the latest tools and techniques, constantly learning and improving our craft to deliver the best solutions for our clients."
              gradient="from-orange-500 to-amber-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              Meet the Founder
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="relative w-48 h-48 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-[2px] mb-6">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <span className="text-6xl font-heading font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">H.J.</span>
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">H.J.</h3>
              <p className="text-muted-foreground mb-6">
                Founder & Principal Engineer
              </p>
              
              <div className="flex gap-3 mb-8">
                <Button variant="outline" size="icon" asChild className="hover:border-primary/50 hover:bg-primary/5">
                  <Link href="https://github.com/wilsonhj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:border-primary/50 hover:bg-primary/5">
                  <Link href="https://www.linkedin.com/in/hj-y/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:border-primary/50 hover:bg-primary/5">
                  <Link href="mailto:contact@shibasoftwareconsulting.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                With over a decade of experience building scalable web applications, H.J. founded 
                Shiba Software Consulting to help companies modernize their technology stack and 
                build production-ready systems that actually work.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Specializing in TypeScript end-to-end development, H.J. has architected and delivered 
                systems handling millions of requests per day. From early-stage startups to enterprise 
                companies, they've helped teams ship faster while maintaining code quality and best practices.
              </p>
              
              <div className="space-y-4 pt-6">
                <h4 className="font-heading font-semibold text-lg">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript", "Node.js", "Go", "React", "Next.js",
                    "AWS", "Kubernetes", "Microservices", "AI/RAG", "LangChain"
                  ].map((skill) => (
                    <span key={skill} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 p-6 rounded-xl bg-card/50 border border-border/50">
                <p className="italic text-muted-foreground">
                  "Great software isn't just about code—it's about solving real problems with 
                  elegant, maintainable solutions that stand the test of time."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide how we work and deliver value
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <ValueCard
              icon={<Code className="h-6 w-6" />}
              title="Code Quality First"
              description="We write code that's easy to understand, test, and maintain. TypeScript, comprehensive testing, and clear documentation are non-negotiable."
            />
            <ValueCard
              icon={<Users className="h-6 w-6" />}
              title="Transparent Communication"
              description="No surprises. We provide regular updates, clear timelines, and honest assessments of challenges and progress throughout every project."
            />
            <ValueCard
              icon={<Zap className="h-6 w-6" />}
              title="Continuous Learning"
              description="Technology evolves rapidly. We stay current with the latest tools, patterns, and best practices to deliver modern, future-proof solutions."
            />
            <ValueCard
              icon={<Heart className="h-6 w-6" />}
              title="Client Success"
              description="Your success is our success. We're invested in building solutions that drive real business value and help you achieve your goals."
            />
          </motion.div>
        </div>
      </section>

      {/* Technology Philosophy */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl text-center mb-12">
              Our Technology Philosophy
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Type Safety Everywhere
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    TypeScript from frontend to backend. Catch bugs at compile time, 
                    not in production. Strong typing leads to better code and fewer surprises.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-secondary" />
                    Cloud-Native by Default
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Applications designed for the cloud from the start. Containerized, 
                    scalable, and ready for Kubernetes deployment with proper observability.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                    <Code className="h-5 w-5 text-accent" />
                    Testing is Non-Negotiable
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comprehensive test coverage with unit, integration, and e2e tests. 
                    Automated CI/CD pipelines ensure quality at every deployment.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="font-heading font-semibold text-lg mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Pragmatic Over Dogmatic
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We choose the right tool for the job, not the trendiest. Every 
                    technology decision is made with your business goals in mind.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              Let's Work Together
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Ready to start your next project? We'd love to hear about it and discuss how we can help.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function MissionCard({ icon, title, description, gradient }: {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="flex flex-col items-center text-center p-8 bg-card border border-border/50 rounded-xl card-hover"
    >
      <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${gradient} text-white`}>
        {icon}
      </div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

function ValueCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="p-6 bg-card border border-border/50 rounded-xl card-hover"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-heading font-bold text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

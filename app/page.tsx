"use client"

import Link from "next/link"
import { ArrowRight, Cloud, Boxes, Brain, Code, Zap, Shield, Server, Workflow, Database } from "lucide-react"
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

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Now accepting new clients for Q1 2025
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl font-heading font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="block text-foreground">Transform Ideas Into</span>
              <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Cloud-Native Reality
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="mt-8 text-lg sm:text-xl leading-8 text-muted-foreground max-w-2xl mx-auto"
            >
              Expert software consultants specializing in scalable full-stack applications, 
              microservices architecture, and AI-powered solutions. We build production-ready 
              systems with cutting-edge technology.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-base px-8">
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 border-border/50 hover:border-primary/50 hover:bg-primary/5">
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Our Core Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive solutions for modern software development challenges
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <ServiceCard
              icon={<Cloud className="h-8 w-8" />}
              title="Cloud-Native Full-Stack"
              description="End-to-end TypeScript development with Next.js, React, and Node.js/Go. Built for AWS with modern DevOps practices."
              features={["TypeScript/Node.js/Go", "Next.js & React", "PostgreSQL/MongoDB", "AWS Deployment"]}
              href="/services#fullstack"
              gradient="from-cyan-500 to-blue-500"
            />
            
            <ServiceCard
              icon={<Server className="h-8 w-8" />}
              title="REST API Development"
              description="Design and implement robust, scalable REST APIs with proper authentication, rate limiting, and documentation."
              features={["OpenAPI/Swagger", "JWT & OAuth2", "Rate Limiting", "API Versioning"]}
              href="/services#api"
              gradient="from-emerald-500 to-teal-500"
            />
            
            <ServiceCard
              icon={<Boxes className="h-8 w-8" />}
              title="Microservices Architecture"
              description="Scalable distributed systems with domain-driven design, event-driven patterns, and container orchestration."
              features={["Domain-Driven Design", "Event-Driven Architecture", "Docker & Kubernetes", "Service Mesh"]}
              href="/services#microservices"
              gradient="from-violet-500 to-purple-500"
            />
            
            <ServiceCard
              icon={<Workflow className="h-8 w-8" />}
              title="Event-Driven Systems"
              description="Build reactive, loosely-coupled systems using message queues, event sourcing, and CQRS patterns."
              features={["Apache Kafka", "RabbitMQ", "Event Sourcing", "CQRS Pattern"]}
              href="/services#events"
              gradient="from-orange-500 to-amber-500"
            />
            
            <ServiceCard
              icon={<Brain className="h-8 w-8" />}
              title="AI & RAG Applications"
              description="Intelligent applications powered by LLMs, vector databases, and retrieval-augmented generation."
              features={["LangChain/LangGraph", "Vector Databases", "LLM Integration", "AI Chatbots"]}
              href="/services#ai"
              gradient="from-pink-500 to-rose-500"
            />
            
            <ServiceCard
              icon={<Database className="h-8 w-8" />}
              title="MLOps & LLM Pipelines"
              description="Production-ready ML infrastructure with model deployment, monitoring, and continuous training pipelines."
              features={["Model Deployment", "Pipeline Orchestration", "A/B Testing", "Cost Optimization"]}
              href="/services#mlops"
              gradient="from-indigo-500 to-blue-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Built with Modern Technology
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We use the tools we recommend—battle-tested technologies for production systems
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              "TypeScript", "Next.js", "React", "Node.js", "Go",
              "AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis",
              "LangChain", "OpenAI", "Kafka", "GraphQL", "Terraform"
            ].map((tech) => (
              <motion.div 
                key={tech} 
                variants={fadeInUp}
                className="tech-badge flex items-center justify-center p-4 text-center cursor-default"
              >
                <span className="font-medium text-sm">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Why Shiba Software?
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <FeatureCard
              icon={<Code className="h-6 w-6" />}
              title="Code Quality"
              description="Enterprise-grade code with TypeScript, comprehensive testing, and maintainable architecture. We write code that lasts."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Fast Delivery"
              description="Agile methodology with continuous deployment. Ship features quickly without compromising quality or stability."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Production Ready"
              description="Scalable, secure, and monitored systems. Built to handle real-world traffic from day one with proper observability."
            />
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Testimonials Placeholder */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />
              
              <div className="relative text-center">
                <div className="text-6xl font-heading font-bold text-primary mb-4">"</div>
                <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                  Great software isn't just about code—it's about solving real problems with 
                  elegant, maintainable solutions that stand the test of time.
                </blockquote>
                <div className="mt-8">
                  <div className="font-semibold text-foreground">Shiba Software Consulting</div>
                  <div className="text-sm text-muted-foreground">Our Philosophy</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Build Something Amazing?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let's discuss your project and how we can help bring your vision to life. 
              Free consultation for qualified projects.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-base px-8">
                <Link href="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base px-8">
                <Link href="mailto:contact@shibasoftwareconsulting.com">
                  Or Email Directly
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description, features, href, gradient }: {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  href: string
  gradient: string
}) {
  return (
    <motion.div variants={fadeInUp}>
      <Link href={href} className="block h-full">
        <div className="relative h-full flex flex-col p-6 lg:p-8 bg-card border border-border/50 rounded-xl card-hover group">
          {/* Gradient glow on hover */}
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
          
          <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} text-white mb-6`}>
            {icon}
          </div>
          
          <h3 className="relative text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
          <p className="relative text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">{description}</p>
          
          <ul className="relative space-y-2 mb-6">
            {features.map((feature) => (
              <li key={feature} className="text-sm flex items-center text-muted-foreground">
                <span className="mr-2 text-primary">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          
          <div className="relative flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
            Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="flex flex-col items-center text-center p-8 rounded-xl bg-card/50 border border-border/50"
    >
      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

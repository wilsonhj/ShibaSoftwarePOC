import Link from "next/link"
import { ArrowRight, Cloud, Boxes, Brain, Code, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Transforming Ideas into Cloud-Native Reality
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Expert TypeScript consultants specializing in scalable, modern web applications and AI-powered solutions. 
              We build production-ready systems with cutting-edge technology.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive solutions for modern software development challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Cloud className="h-8 w-8" />}
              title="Cloud-Native Full-Stack"
              description="End-to-end TypeScript development with Next.js, React, and Node.js. Built for AWS with modern DevOps practices."
              features={["TypeScript/Node.js", "Next.js & React", "PostgreSQL/MongoDB", "AWS Deployment"]}
              href="/services#fullstack"
            />
            
            <ServiceCard
              icon={<Boxes className="h-8 w-8" />}
              title="Microservice Architecture"
              description="Scalable distributed systems with domain-driven design, event-driven patterns, and container orchestration."
              features={["Domain-Driven Design", "Event-Driven Architecture", "Docker & Kubernetes", "API Gateway Patterns"]}
              href="/services#microservices"
            />
            
            <ServiceCard
              icon={<Brain className="h-8 w-8" />}
              title="AI & RAG Applications"
              description="Intelligent applications powered by LLMs, vector databases, and retrieval-augmented generation."
              features={["LLM Integration", "Vector Databases", "LangChain/LlamaIndex", "AI Chatbots"]}
              href="/services#ai"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built with Modern Technology
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We use the tools we recommend—battle-tested technologies for production systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["TypeScript", "Next.js", "React", "Node.js", "AWS", "Docker", "Kubernetes", "PostgreSQL"].map((tech) => (
              <div key={tech} className="flex items-center justify-center p-6 border rounded-lg hover:border-primary transition-colors">
                <span className="font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Shiba Software?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Code className="h-6 w-6" />}
              title="Code Quality"
              description="Enterprise-grade code with TypeScript, comprehensive testing, and maintainable architecture."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Fast Delivery"
              description="Agile methodology with continuous deployment. Ship features quickly without compromising quality."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Production Ready"
              description="Scalable, secure, and monitored systems. Built to handle real-world traffic from day one."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Build Something Amazing?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let's discuss your project and how we can help bring your vision to life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description, features, href }: {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  href: string
}) {
  return (
    <div className="relative flex flex-col p-8 bg-card border rounded-lg hover:border-primary transition-all hover:shadow-lg">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature) => (
          <li key={feature} className="text-sm flex items-center">
            <span className="mr-2 text-primary">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Button asChild variant="outline" className="w-full">
        <Link href={href}>
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}

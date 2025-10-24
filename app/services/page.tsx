import Link from "next/link"
import { Cloud, Boxes, Brain, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description: "Cloud-native full-stack development, microservice architecture, and AI/RAG application development services.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Comprehensive solutions for modern software development challenges. 
              From concept to production, we deliver excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Full-Stack Development */}
      <section id="fullstack" className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-6">
                <Cloud className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Cloud-Native Full-Stack Development
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Build modern, scalable web applications with TypeScript end-to-end. 
                We specialize in Next.js, React, and Node.js deployed on AWS infrastructure.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-xl">What We Deliver:</h3>
                <ul className="space-y-3">
                  {[
                    "TypeScript frontend and backend",
                    "Next.js 16 with App Router",
                    "RESTful & GraphQL APIs",
                    "PostgreSQL, MongoDB, Redis integration",
                    "AWS deployment & CI/CD pipelines",
                    "Responsive, accessible UIs",
                    "Performance optimization",
                    "Comprehensive documentation"
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="font-semibold text-xl mb-4">Technology Stack</h3>
              <div className="space-y-6">
                <TechSection title="Frontend" items={["Next.js 16", "React 19", "Tailwind CSS v4", "Motion (Framer Motion)", "Zod validation"]} />
                <TechSection title="Backend" items={["Node.js 22", "TypeScript 5.9", "Express/Fastify", "Prisma ORM", "tRPC"]} />
                <TechSection title="Infrastructure" items={["AWS (EC2, Lambda, RDS)", "Docker & Kubernetes", "GitHub Actions", "Vercel/Netlify"]} />
              </div>
              
              <div className="mt-8 pt-8 border-t">
                <p className="text-sm text-muted-foreground mb-2">Typical Timeline</p>
                <p className="font-semibold">4-12 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Microservices */}
      <section id="microservices" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-card p-8 rounded-lg border">
              <h3 className="font-semibold text-xl mb-4">Architecture Patterns</h3>
              <div className="space-y-6">
                <TechSection title="Design Patterns" items={["Domain-Driven Design", "CQRS & Event Sourcing", "Saga Pattern", "API Gateway", "Service Mesh"]} />
                <TechSection title="Communication" items={["REST APIs", "gRPC", "Message Queues (RabbitMQ, Kafka)", "WebSockets", "GraphQL Federation"]} />
                <TechSection title="Infrastructure" items={["Kubernetes orchestration", "Docker containerization", "Service discovery", "Load balancing", "Monitoring & logging"]} />
              </div>
              
              <div className="mt-8 pt-8 border-t">
                <p className="text-sm text-muted-foreground mb-2">Typical Timeline</p>
                <p className="font-semibold">8-16 weeks</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-secondary/10 text-secondary mb-6">
                <Boxes className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Microservice Architecture
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Design and implement scalable, distributed systems that grow with your business. 
                From monolith migration to greenfield microservices.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-xl">What We Deliver:</h3>
                <ul className="space-y-3">
                  {[
                    "Microservice architecture design",
                    "Domain-driven design implementation",
                    "Event-driven communication",
                    "API gateway setup",
                    "Service mesh configuration",
                    "Container orchestration (K8s)",
                    "Monitoring & observability",
                    "Migration from monolith"
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & RAG */}
      <section id="ai" className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-accent/10 text-accent mb-6">
                <Brain className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                AI & RAG Application Development
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Build intelligent applications powered by Large Language Models and Retrieval-Augmented Generation. 
                From chatbots to knowledge assistants.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-xl">What We Deliver:</h3>
                <ul className="space-y-3">
                  {[
                    "LLM integration (OpenAI, Anthropic, etc.)",
                    "RAG system implementation",
                    "Vector database setup (Pinecone, Weaviate)",
                    "LangChain/LlamaIndex applications",
                    "AI-powered chatbots",
                    "Document processing pipelines",
                    "Prompt engineering & optimization",
                    "Cost optimization strategies"
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="font-semibold text-xl mb-4">AI Technology Stack</h3>
              <div className="space-y-6">
                <TechSection title="LLM Platforms" items={["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Open-source models"]} />
                <TechSection title="Frameworks" items={["LangChain", "LlamaIndex", "Semantic Kernel", "Custom pipelines"]} />
                <TechSection title="Vector Databases" items={["Pinecone", "Weaviate", "Chroma", "pgvector"]} />
                <TechSection title="Infrastructure" items={["Streaming responses", "Caching strategies", "Rate limiting", "Cost monitoring"]} />
              </div>
              
              <div className="mt-8 pt-8 border-t">
                <p className="text-sm text-muted-foreground mb-2">Typical Timeline</p>
                <p className="font-semibold">6-12 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let's Build Your Project
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Ready to start? Schedule a consultation to discuss your needs and how we can help.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function TechSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-medium mb-3 text-sm text-muted-foreground">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="px-3 py-1 bg-muted rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

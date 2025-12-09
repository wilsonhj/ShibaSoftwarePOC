"use client"

import Link from "next/link"
import { Cloud, Boxes, Brain, Check, ArrowRight, Server, Workflow, Database, Cpu, GitBranch, Layers } from "lucide-react"
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

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground">
              Comprehensive solutions for modern software development challenges. 
              From concept to production, we deliver excellence across the full technology stack.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full-Stack Development */}
      <ServiceSection
        id="fullstack"
        icon={<Cloud className="h-8 w-8" />}
        iconGradient="from-cyan-500 to-blue-500"
        title="Cloud-Native Full-Stack Development"
        description="Build modern, scalable web applications with TypeScript end-to-end. We specialize in Next.js, React, and Node.js/Go deployed on AWS infrastructure with CI/CD pipelines."
        deliverables={[
          "TypeScript frontend and backend",
          "Next.js 15+ with App Router & Server Components",
          "RESTful & GraphQL APIs",
          "PostgreSQL, MongoDB, Redis integration",
          "AWS deployment with Infrastructure as Code",
          "CI/CD pipelines (GitHub Actions, GitLab CI)",
          "Responsive, accessible UIs (WCAG 2.1)",
          "Comprehensive documentation & testing"
        ]}
        techStack={{
          "Frontend": ["Next.js 15+", "React 19", "Tailwind CSS v4", "Motion", "Zod"],
          "Backend": ["Node.js 22", "Go 1.22+", "TypeScript 5.x", "Express/Fastify/Fiber", "Prisma ORM"],
          "Infrastructure": ["AWS (EC2, Lambda, RDS, S3)", "Docker & Kubernetes", "Terraform", "GitHub Actions"]
        }}
        timeline="4-12 weeks"
        isReversed={false}
      />

      {/* REST API Development */}
      <ServiceSection
        id="api"
        icon={<Server className="h-8 w-8" />}
        iconGradient="from-emerald-500 to-teal-500"
        title="REST API Development"
        description="Design and implement robust, scalable REST APIs with proper authentication, rate limiting, versioning, and comprehensive documentation. Built for reliability and developer experience."
        deliverables={[
          "RESTful API design following best practices",
          "OpenAPI/Swagger documentation",
          "JWT & OAuth2 authentication",
          "Rate limiting & throttling",
          "API versioning strategies",
          "Input validation & error handling",
          "Caching strategies (Redis, CDN)",
          "API monitoring & analytics"
        ]}
        techStack={{
          "Frameworks": ["Express.js", "Fastify", "Go Fiber/Chi", "NestJS"],
          "Documentation": ["OpenAPI 3.0", "Swagger UI", "Postman Collections"],
          "Security": ["JWT", "OAuth2", "API Keys", "Rate Limiting"],
          "Testing": ["Jest", "Supertest", "k6 Load Testing"]
        }}
        timeline="3-8 weeks"
        isReversed={true}
      />

      {/* Microservices */}
      <ServiceSection
        id="microservices"
        icon={<Boxes className="h-8 w-8" />}
        iconGradient="from-violet-500 to-purple-500"
        title="Microservices Architecture"
        description="Design and implement scalable, distributed systems that grow with your business. From monolith migration to greenfield microservices, we help you build systems that scale."
        deliverables={[
          "Microservice architecture design",
          "Domain-driven design implementation",
          "Service decomposition strategy",
          "API gateway setup (Kong, AWS API Gateway)",
          "Service mesh configuration (Istio, Linkerd)",
          "Container orchestration (Kubernetes)",
          "Distributed tracing & logging",
          "Monolith to microservices migration"
        ]}
        techStack={{
          "Design Patterns": ["Domain-Driven Design", "CQRS", "Saga Pattern", "API Gateway", "Service Mesh"],
          "Communication": ["REST APIs", "gRPC", "GraphQL Federation", "Message Queues"],
          "Infrastructure": ["Kubernetes", "Docker", "Helm Charts", "ArgoCD"],
          "Observability": ["Prometheus", "Grafana", "Jaeger", "ELK Stack"]
        }}
        timeline="8-16 weeks"
        isReversed={false}
      />

      {/* Event-Driven Systems */}
      <ServiceSection
        id="events"
        icon={<Workflow className="h-8 w-8" />}
        iconGradient="from-orange-500 to-amber-500"
        title="Event-Driven Systems"
        description="Build reactive, loosely-coupled systems using message queues, event sourcing, and CQRS patterns. Perfect for high-throughput applications requiring real-time processing."
        deliverables={[
          "Event-driven architecture design",
          "Message broker setup & configuration",
          "Event sourcing implementation",
          "CQRS pattern implementation",
          "Saga orchestration for distributed transactions",
          "Dead letter queue handling",
          "Event schema management (Avro, Protobuf)",
          "Real-time data streaming pipelines"
        ]}
        techStack={{
          "Message Brokers": ["Apache Kafka", "RabbitMQ", "AWS SQS/SNS", "Redis Streams"],
          "Patterns": ["Event Sourcing", "CQRS", "Saga Pattern", "Outbox Pattern"],
          "Streaming": ["Kafka Streams", "Apache Flink", "AWS Kinesis"],
          "Schema": ["Apache Avro", "Protocol Buffers", "JSON Schema"]
        }}
        timeline="6-12 weeks"
        isReversed={true}
      />

      {/* AI & RAG */}
      <ServiceSection
        id="ai"
        icon={<Brain className="h-8 w-8" />}
        iconGradient="from-pink-500 to-rose-500"
        title="AI & RAG Application Development"
        description="Build intelligent applications powered by Large Language Models and Retrieval-Augmented Generation. From chatbots to knowledge assistants, we bring AI capabilities to your products."
        deliverables={[
          "LLM integration (OpenAI, Anthropic, Google)",
          "RAG system architecture & implementation",
          "Vector database setup & optimization",
          "LangChain/LangGraph application development",
          "AI-powered chatbots & assistants",
          "Document processing & indexing pipelines",
          "Prompt engineering & optimization",
          "Cost optimization & caching strategies"
        ]}
        techStack={{
          "LLM Platforms": ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Open-source (Llama, Mistral)"],
          "Frameworks": ["LangChain", "LangGraph", "LlamaIndex", "Semantic Kernel"],
          "Vector Databases": ["Pinecone", "Weaviate", "Chroma", "pgvector", "Qdrant"],
          "Infrastructure": ["Streaming responses", "Semantic caching", "Rate limiting", "Cost monitoring"]
        }}
        timeline="6-12 weeks"
        isReversed={false}
      />

      {/* MLOps & LLM Pipelines */}
      <ServiceSection
        id="mlops"
        icon={<Database className="h-8 w-8" />}
        iconGradient="from-indigo-500 to-blue-500"
        title="MLOps & LLM Pipelines"
        description="Production-ready ML infrastructure with model deployment, monitoring, and continuous training pipelines. We help you operationalize AI at scale with proper MLOps practices."
        deliverables={[
          "ML pipeline architecture design",
          "Model training & deployment pipelines",
          "Feature store implementation",
          "Model versioning & registry",
          "A/B testing infrastructure",
          "Model monitoring & drift detection",
          "LLM fine-tuning pipelines",
          "Cost optimization & resource management"
        ]}
        techStack={{
          "Orchestration": ["Airflow", "Prefect", "Dagster", "Kubeflow"],
          "Model Serving": ["MLflow", "BentoML", "Seldon", "TensorFlow Serving"],
          "Monitoring": ["Weights & Biases", "MLflow Tracking", "Evidently AI"],
          "Infrastructure": ["AWS SageMaker", "GCP Vertex AI", "Kubernetes", "Ray"]
        }}
        timeline="8-16 weeks"
        isReversed={true}
      />

      {/* Engagement Models */}
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
              Engagement Models
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Flexible engagement options to match your project needs
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <EngagementCard
              title="Project-Based"
              description="Fixed scope and timeline for well-defined projects. Ideal for MVPs, new features, or migrations."
              features={["Fixed price quote", "Defined milestones", "Clear deliverables", "Knowledge transfer"]}
              ideal="MVPs, Feature Development, Migrations"
            />
            <EngagementCard
              title="Retainer"
              description="Ongoing partnership with dedicated hours each month. Perfect for continuous development and support."
              features={["Monthly hour blocks", "Priority support", "Flexible scope", "Consistent velocity"]}
              ideal="Ongoing Development, Maintenance"
              highlighted
            />
            <EngagementCard
              title="Consultation"
              description="Expert guidance on architecture, technology decisions, and best practices. Code reviews and audits."
              features={["Architecture review", "Technology assessment", "Best practices", "Team training"]}
              ideal="Architecture Decisions, Code Audits"
            />
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
              Let's Build Your Project
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Ready to start? Schedule a consultation to discuss your needs and how we can help bring your vision to life.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ServiceSection({ 
  id, 
  icon, 
  iconGradient, 
  title, 
  description, 
  deliverables, 
  techStack, 
  timeline, 
  isReversed 
}: {
  id: string
  icon: React.ReactNode
  iconGradient: string
  title: string
  description: string
  deliverables: string[]
  techStack: Record<string, string[]>
  timeline: string
  isReversed: boolean
}) {
  return (
    <section id={id} className={`py-24 ${isReversed ? '' : 'bg-muted/30'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${isReversed ? 'lg:flex-row-reverse' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={isReversed ? 'lg:order-2' : ''}>
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${iconGradient} text-white mb-6`}>
              {icon}
            </div>
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl mb-6">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
            
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-xl">What We Deliver:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className={`bg-card p-8 rounded-xl border border-border/50 ${isReversed ? 'lg:order-1' : ''}`}>
            <h3 className="font-heading font-semibold text-xl mb-6">Technology Stack</h3>
            <div className="space-y-6">
              {Object.entries(techStack).map(([category, items]) => (
                <TechSection key={category} title={category} items={items} />
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Typical Timeline</p>
                  <p className="font-heading font-semibold text-lg">{timeline}</p>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href="/contact">
                    Discuss Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TechSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-medium mb-3 text-sm text-muted-foreground">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="tech-badge">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function EngagementCard({ 
  title, 
  description, 
  features, 
  ideal,
  highlighted = false 
}: { 
  title: string
  description: string
  features: string[]
  ideal: string
  highlighted?: boolean
}) {
  return (
    <motion.div 
      variants={fadeInUp}
      className={`relative flex flex-col p-8 rounded-xl border ${
        highlighted 
          ? 'border-primary/50 bg-gradient-to-b from-primary/5 to-transparent' 
          : 'border-border/50 bg-card'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{description}</p>
      
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-sm">
            <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="pt-4 border-t border-border/50">
        <p className="text-xs text-muted-foreground">Ideal for:</p>
        <p className="text-sm font-medium mt-1">{ideal}</p>
      </div>
    </motion.div>
  )
}

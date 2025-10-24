import Link from "next/link"
import { Target, Users, Lightbulb, ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Shiba Software Consulting, our mission, values, and the team behind your next project.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Shiba Software
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Modernizing legacy systems and building cutting-edge applications 
              with cloud-native solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Mission
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Target className="h-8 w-8" />}
              title="Excellence in Delivery"
              description="We don't just write code—we deliver production-ready systems that scale. Every line is crafted with intention, tested thoroughly, and documented clearly."
            />
            <ValueCard
              icon={<Users className="h-8 w-8" />}
              title="Remote-First Culture"
              description="Based in California, working globally. We believe great work happens when talented people have flexibility and trust."
            />
            <ValueCard
              icon={<Lightbulb className="h-8 w-8" />}
              title="Continuous Innovation"
              description="We stay on the cutting edge by using the latest tools and techniques, constantly learning and improving our craft."
            />
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet the Founder
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 flex items-center justify-center">
                <span className="text-6xl font-bold text-white">H.J.</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">H.J.</h3>
              <p className="text-muted-foreground mb-6">
                Founder & Principal Engineer
              </p>
              
              <div className="flex gap-4 mb-8">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/wilsonhj" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://www.linkedin.com/in/hj-y/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:spurts-lovers-88@icloud.com">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg">
                With over a decade of experience building scalable web applications, H.J. founded 
                Shiba Software Consulting to help companies modernize their technology stack and 
                build production-ready systems.
              </p>
              
              <p>
                Specializing in TypeScript end-to-end development, H.J. has architected and delivered 
                systems handling millions of requests per day. From early-stage startups to enterprise 
                companies, they've helped teams ship faster while maintaining code quality.
              </p>
              
              <div className="space-y-4 pt-6">
                <h4 className="font-semibold text-lg">Core Expertise</h4>
                <ul className="space-y-2">
                  {[
                    "TypeScript • Node.js • React • Next.js",
                    "AWS Infrastructure & DevOps",
                    "Microservice Architecture Design",
                    "AI/ML Integration & RAG Systems",
                    "Enterprise Application Development"
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mr-2 text-primary">●</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6">
                <p className="italic text-muted-foreground">
                  "Great software isn't just about code—it's about solving real problems with 
                  elegant, maintainable solutions that stand the test of time."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-card border rounded-lg">
              <h3 className="font-bold text-xl mb-3">Code Quality First</h3>
              <p className="text-muted-foreground">
                We write code that's easy to understand, test, and maintain. TypeScript, 
                comprehensive testing, and clear documentation are non-negotiable.
              </p>
            </div>
            
            <div className="p-6 bg-card border rounded-lg">
              <h3 className="font-bold text-xl mb-3">Transparent Communication</h3>
              <p className="text-muted-foreground">
                No surprises. We provide regular updates, clear timelines, and honest 
                assessments of challenges and progress.
              </p>
            </div>
            
            <div className="p-6 bg-card border rounded-lg">
              <h3 className="font-bold text-xl mb-3">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Technology evolves rapidly. We stay current with the latest tools, 
                patterns, and best practices to deliver modern solutions.
              </p>
            </div>
            
            <div className="p-6 bg-card border rounded-lg">
              <h3 className="font-bold text-xl mb-3">Client Success</h3>
              <p className="text-muted-foreground">
                Your success is our success. We're invested in building solutions that 
                drive real business value and achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let's Work Together
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Ready to start your next project? We'd love to hear about it.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-card border rounded-lg">
      <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

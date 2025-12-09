"use client"

import Link from "next/link"
import { Mail, MapPin, Clock, Github, Linkedin, Calendar } from "lucide-react"
import { ContactForm } from "@/components/sections/contact-form"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-foreground">Get in </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground">
              Ready to start your project? Fill out the form below and we'll get back to you within 24 hours.
              Free consultation for qualified projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <ContactInfo
                    icon={<Mail className="h-5 w-5" />}
                    title="Email"
                    content="contact@shibasoftwareconsulting.com"
                    href="mailto:contact@shibasoftwareconsulting.com"
                  />
                  
                  <ContactInfo
                    icon={<MapPin className="h-5 w-5" />}
                    title="Location"
                    content={<>Based in California<br />Serving Clients Globally</>}
                  />
                  
                  <ContactInfo
                    icon={<Clock className="h-5 w-5" />}
                    title="Response Time"
                    content={<>Within 24 hours<br />PST/PDT Timezone</>}
                  />
                  
                  <ContactInfo
                    icon={<Calendar className="h-5 w-5" />}
                    title="Availability"
                    content={<>Monday - Friday<br />9:00 AM - 6:00 PM PST</>}
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border/50">
                <h3 className="font-heading font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-3">
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
                </div>
              </div>

              {/* What to Expect */}
              <div className="p-6 bg-card border border-border/50 rounded-xl">
                <h3 className="font-heading font-semibold mb-4">What to Expect</h3>
                <ol className="space-y-4 text-sm">
                  <ExpectationItem number={1} text="We'll review your project details" />
                  <ExpectationItem number={2} text="Schedule a consultation call" />
                  <ExpectationItem number={3} text="Provide a detailed proposal" />
                  <ExpectationItem number={4} text="Begin development with clear milestones" />
                </ol>
              </div>

              {/* Direct Email Option */}
              <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl">
                <h3 className="font-heading font-semibold mb-2">Prefer Email?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You can also reach us directly via email for a quicker response.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="mailto:contact@shibasoftwareconsulting.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email Directly
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-card p-8 rounded-xl border border-border/50">
                <h2 className="text-2xl font-heading font-bold mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-8 text-sm">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FAQCard
              question="What is your typical project timeline?"
              answer="Project timelines vary based on scope and complexity. MVPs typically take 4-8 weeks, while larger enterprise projects may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
            />
            <FAQCard
              question="Do you work with startups?"
              answer="Absolutely! We work with companies of all sizes, from early-stage startups building their MVP to established enterprises modernizing their tech stack. We tailor our approach to your specific needs and budget."
            />
            <FAQCard
              question="What technologies do you specialize in?"
              answer="We specialize in TypeScript/JavaScript (React, Next.js, Node.js), Go, AWS cloud services, Kubernetes, and AI/ML technologies including LangChain and various LLM integrations."
            />
            <FAQCard
              question="How do you handle communication during projects?"
              answer="We believe in transparent communication. You'll receive regular updates, have access to project management tools, and can schedule calls as needed. We're available via Slack, email, or video calls."
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ContactInfo({ icon, title, content, href }: {
  icon: React.ReactNode
  title: string
  content: React.ReactNode
  href?: string
}) {
  const ContentWrapper = href ? Link : 'div'
  const wrapperProps = href ? { href, className: "hover:text-primary transition-colors" } : {}
  
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-heading font-semibold mb-1">{title}</h3>
        {href ? (
          <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {content}
          </Link>
        ) : (
          <p className="text-sm text-muted-foreground">{content}</p>
        )}
      </div>
    </div>
  )
}

function ExpectationItem({ number, text }: { number: number; text: string }) {
  return (
    <li className="flex items-start">
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold mr-3 flex-shrink-0">
        {number}
      </span>
      <span className="text-muted-foreground">{text}</span>
    </li>
  )
}

function FAQCard({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="p-6 bg-card border border-border/50 rounded-xl">
      <h3 className="font-heading font-semibold mb-3">{question}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
    </div>
  )
}

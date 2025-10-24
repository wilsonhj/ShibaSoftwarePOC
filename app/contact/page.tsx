import { Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/sections/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Shiba Software Consulting. Let's discuss your project and how we can help.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Ready to start your project? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        spurts-lovers-88@icloud.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground">
                        Based in California<br />
                        Serving Clients Globally
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p className="text-sm text-muted-foreground">
                        Within 24 hours<br />
                        PST/PDT Timezone
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card border rounded-lg">
                <h3 className="font-semibold mb-3">What to Expect</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="font-semibold text-primary mr-2">1.</span>
                    <span>We'll review your project details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-primary mr-2">2.</span>
                    <span>Schedule a consultation call</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-primary mr-2">3.</span>
                    <span>Provide a detailed proposal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold text-primary mr-2">4.</span>
                    <span>Begin development with clear milestones</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-lg border">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

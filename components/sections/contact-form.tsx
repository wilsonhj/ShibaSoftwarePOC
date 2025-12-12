"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema, type ContactFormData } from "@/lib/schemas"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      setSubmitSuccess(true)
      reset()

      // Reset success message after 10 seconds
      setTimeout(() => setSubmitSuccess(false), 10000)
    } catch (error) {
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : "Failed to send message. Please try again or email us directly."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-heading font-bold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          Thank you for reaching out. We've received your message and will get back to you within 24 hours.
        </p>
        <Button onClick={() => setSubmitSuccess(false)} variant="outline">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            {...register("name", {
              setValueAs: (v) => (typeof v === "string" ? v.trim() : v),
            })}
            placeholder="John Doe"
            className={`bg-background ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
          />
          {errors.name && (
            <p className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              setValueAs: (v) =>
                typeof v === "string" ? v.trim().toLowerCase() : v,
            })}
            placeholder="john@example.com"
            className={`bg-background ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
          />
          {errors.email && (
            <p className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="text-sm font-medium">
          Company <span className="text-muted-foreground text-xs">(optional)</span>
        </Label>
        <Input
          id="company"
          {...register("company", {
            setValueAs: (v) => {
              if (typeof v !== "string") return v
              const trimmed = v.trim()
              return trimmed.length ? trimmed : undefined
            },
          })}
          placeholder="Acme Inc."
          className="bg-background"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="service" className="text-sm font-medium">
            Service Interest <span className="text-destructive">*</span>
          </Label>
          <select
            id="service"
            {...register("service")}
            className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
              errors.service ? "border-destructive focus-visible:ring-destructive" : "border-input"
            }`}
          >
            <option value="">Select a service</option>
            <option value="fullstack">Cloud-Native Full-Stack Development</option>
            <option value="api">REST API Development</option>
            <option value="microservices">Microservice Architecture</option>
            <option value="events">Event-Driven Systems</option>
            <option value="ai">AI & RAG Applications</option>
            <option value="mlops">MLOps & LLM Pipelines</option>
            <option value="consultation">General Consultation</option>
          </select>
          {errors.service && (
            <p className="text-sm text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.service.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget" className="text-sm font-medium">
            Budget Range <span className="text-muted-foreground text-xs">(optional)</span>
          </Label>
          <select
            id="budget"
            {...register("budget", {
              setValueAs: (v) => (v === "" ? undefined : v),
            })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="">Select budget range</option>
            <option value="under-25k">Under $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="over-100k">Over $100,000</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Project Details <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your project, timeline, and any specific requirements..."
          rows={6}
          className={`bg-background resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
        />
        {errors.message && (
          <p className="text-sm text-destructive flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {errors.message.message}
          </p>
        )}
      </div>

      {submitError && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="text-sm text-destructive flex items-center gap-2">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            {submitError}
          </p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
        {" "}and{" "}
        <a href="/terms" className="text-primary hover:underline">Terms of Service</a>.
      </p>
    </form>
  )
}

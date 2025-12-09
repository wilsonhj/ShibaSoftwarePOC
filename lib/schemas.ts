import { z } from 'zod'

// Regex patterns for input validation
const SAFE_TEXT_PATTERN = /^[\p{L}\p{N}\s\-'.,!?@#$%&*()\[\]{}:;"'+=/\\]+$/u
const NAME_PATTERN = /^[\p{L}\s\-'.]+$/u

// Budget options whitelist
const BUDGET_OPTIONS = ['under-25k', '25k-50k', '50k-100k', 'over-100k', ''] as const

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .regex(NAME_PATTERN, "Name contains invalid characters")
    .transform(s => s.trim()),
  
  email: z.string()
    .email("Please enter a valid email address")
    .max(254, "Email is too long") // RFC 5321 limit
    .toLowerCase()
    .transform(s => s.trim()),
  
  company: z.string()
    .max(200, "Company name is too long")
    .optional()
    .transform(s => s?.trim() || undefined),
  
  service: z.enum(["fullstack", "microservices", "api", "events", "ai", "mlops", "consultation"], {
    message: "Please select a service"
  }),
  
  budget: z.enum(BUDGET_OPTIONS).optional().or(z.literal('')).transform(s => s || undefined),
  
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long")
    .transform(s => s.trim()),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

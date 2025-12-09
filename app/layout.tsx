import type { Metadata } from "next"
import { Outfit, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { OrganizationStructuredData, WebsiteStructuredData } from "./structured-data"

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://shibasoftwareconsulting.com"),
  title: {
    default: "Shiba Software Consulting | Cloud-Native Full-Stack Development",
    template: "%s | Shiba Software Consulting"
  },
  description: "Expert cloud-native full-stack development, microservice architecture, REST APIs, event-driven systems, and AI/RAG application development using LangChain/LangGraph. Remote-first consulting based in California.",
  keywords: [
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Go",
    "AWS",
    "Microservices",
    "REST API",
    "Event-Driven Architecture",
    "AI",
    "RAG",
    "LangChain",
    "LangGraph",
    "MLOps",
    "LLM",
    "Cloud Development",
    "Software Consulting",
    "California"
  ],
  authors: [{ name: "Shiba Software Consulting" }],
  creator: "Shiba Software Consulting",
  publisher: "Shiba Software Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shibasoftwareconsulting.com",
    title: "Shiba Software Consulting | Cloud-Native Full-Stack Development",
    description: "Expert cloud-native full-stack development, microservice architecture, and AI/RAG application development. Remote-first consulting based in California.",
    siteName: "Shiba Software Consulting",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shiba Software Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiba Software Consulting | Cloud-Native Full-Stack Development",
    description: "Expert cloud-native full-stack development, microservice architecture, and AI/RAG application development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <OrganizationStructuredData />
        <WebsiteStructuredData />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background">
            {/* Background effects */}
            <div className="fixed inset-0 bg-hero-gradient pointer-events-none" />
            <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-50" />
            
            <Header />
            <main className="relative pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

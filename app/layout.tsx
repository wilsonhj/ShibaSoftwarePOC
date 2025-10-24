import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Shiba Software Consulting | Cloud-Native TypeScript Development",
    template: "%s | Shiba Software Consulting"
  },
  description: "Expert cloud-native full-stack TypeScript development, microservice architecture, and AI/RAG application development. Remote-first consulting based in California.",
  keywords: ["TypeScript", "Next.js", "React", "AWS", "Microservices", "AI", "RAG", "Cloud Development", "Software Consulting"],
  authors: [{ name: "H.J." }],
  creator: "Shiba Software Consulting",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shibasoftware.com",
    title: "Shiba Software Consulting | Cloud-Native TypeScript Development",
    description: "Expert cloud-native full-stack TypeScript development, microservice architecture, and AI/RAG application development.",
    siteName: "Shiba Software Consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiba Software Consulting",
    description: "Expert cloud-native full-stack TypeScript development, microservice architecture, and AI/RAG application development.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

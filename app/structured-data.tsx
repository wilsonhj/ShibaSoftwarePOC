export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shiba Software Consulting",
    legalName: "Shiba Software Consulting LLC",
    url: "https://shibasoftwareconsulting.com",
    logo: "https://shibasoftwareconsulting.com/logos/shiba-logo.svg",
    description: "Expert cloud-native full-stack development, microservice architecture, REST APIs, event-driven systems, and AI/RAG application development using LangChain/LangGraph. Remote-first consulting based in California.",
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "H.J.",
        jobTitle: "Founder & Principal Engineer"
      }
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "California",
      addressCountry: "US"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@shibasoftwareconsulting.com",
      availableLanguage: ["English"]
    },
    sameAs: [
      "https://github.com/wilsonhj",
      "https://www.linkedin.com/in/hj-y/"
    ],
    knowsAbout: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Go",
      "AWS",
      "Cloud Computing",
      "Microservices",
      "REST API",
      "GraphQL",
      "Docker",
      "Kubernetes",
      "Artificial Intelligence",
      "Machine Learning",
      "LangChain",
      "LangGraph",
      "RAG Applications",
      "LLM",
      "MLOps"
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud-Native Full-Stack Development",
          description: "End-to-end TypeScript development with Next.js, React, and Node.js/Go deployed on AWS infrastructure."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "REST API Development",
          description: "Design and implement robust, scalable REST APIs with proper authentication, rate limiting, and documentation."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Microservice Architecture",
          description: "Scalable distributed systems with domain-driven design, event-driven patterns, and container orchestration."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & RAG Application Development",
          description: "Intelligent applications powered by LLMs, vector databases, and retrieval-augmented generation using LangChain and LangGraph."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MLOps & LLM Pipelines",
          description: "Production-ready ML infrastructure with model deployment, monitoring, and continuous training pipelines."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shiba Software Consulting",
    url: "https://shibasoftwareconsulting.com",
    description: "Expert cloud-native full-stack development, microservice architecture, and AI/RAG application development.",
    publisher: {
      "@type": "Organization",
      name: "Shiba Software Consulting"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function LocalBusinessStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Shiba Software Consulting",
    image: "https://shibasoftwareconsulting.com/logos/shiba-logo.svg",
    "@id": "https://shibasoftwareconsulting.com",
    url: "https://shibasoftwareconsulting.com",
    email: "contact@shibasoftwareconsulting.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "California",
      addressCountry: "US"
    },
    priceRange: "$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 37.7749,
        longitude: -122.4194
      },
      geoRadius: "10000"
    },
    serviceArea: {
      "@type": "Place",
      name: "Worldwide (Remote)"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}


'use client'

import { useEffect } from 'react'

interface SchemaMarkupProps {
  type: string
  data: Record<string, any>
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  useEffect(() => {
    // Remove existing schema of the same type if any
    const existingSchema = document.querySelector(`script[data-schema-type="${type}"]`)
    if (existingSchema) {
      existingSchema.remove()
    }

    // Create and add new schema
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-schema-type', type)
    script.textContent = JSON.stringify(data, null, 2)
    document.head.appendChild(script)

    // Cleanup on unmount
    return () => {
      const schema = document.querySelector(`script[data-schema-type="${type}"]`)
      if (schema) {
        schema.remove()
      }
    }
  }, [type, data])

  return null
}

// Predefined schema generators
export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LoanAgent Islam",
  "alternateName": "AFFIN Islamic Personal Financing-i",
  "url": "https://loanagent-islam.vercel.app",
  "logo": "https://loanagent-islam.vercel.app/images/logos/affin-bank.png",
  "description": "Rakan kongsi anda yang dipercayai untuk pembiayaan peribadi Islam di Malaysia. Kami menjadikan pembiayaan mudah, pantas, dan telus dengan kadar untung kompetitif dan kadar kelulusan 95%.",
  "foundingDate": "2025",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "36, Jalan PSK 3, Pusat Perdagangan Seri Kembangan",
    "addressLocality": "Seri Kembangan",
    "addressRegion": "Selangor",
    "postalCode": "43300",
    "addressCountry": "MY"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+60-16-709-5179",
    "contactType": "customer service",
    "email": "nurhaslinamohd@gmail.com",
    "availableLanguage": ["Malay", "English"]
  },
  "sameAs": [
    "https://www.tiktok.com/@nurhaslina77?_t=ZS-90ptt7VX276&_r=1",
    "https://wa.me/60167095179"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Malaysia"
  }
})

export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "LoanAgent Islam - AFFIN Islamic Personal Financing",
  "description": "Pembiayaan peribadi Islam patuh Syariah dengan kadar untung kompetitif dan kadar kelulusan 95%",
  "url": "https://loanagent-islam.vercel.app",
  "telephone": "+60-16-709-5179",
  "email": "nurhaslinamohd@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "36, Jalan PSK 3, Pusat Perdagangan Seri Kembangan",
    "addressLocality": "Seri Kembangan",
    "addressRegion": "Selangor",
    "postalCode": "43300",
    "addressCountry": "MY"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "3.0319",
    "longitude": "101.7166"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Bank Transfer"],
  "currenciesAccepted": "MYR",
  "servicesOffered": [
    "Pembiayaan Peribadi Islam",
    "Konsolidasi Hutang",
    "Pembiayaan Kecemasan",
    "Pembiayaan Perniagaan"
  ]
})

export const createWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "LoanAgent Islam",
  "url": "https://loanagent-islam.vercel.app",
  "description": "Platform pembiayaan peribadi Islam terkemuka di Malaysia",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://loanagent-islam.vercel.app/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LoanAgent Islam"
  }
})
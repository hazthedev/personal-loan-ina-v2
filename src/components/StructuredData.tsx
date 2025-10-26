'use client'

import { useEffect } from 'react'

export default function StructuredData() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
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
      },
      "knowsAbout": [
        "Islamic Financing",
        "Pembiayaan Peribadi Islam",
        "Tawarruq",
        "BNM Licensed Financial Advisor"
      ]
    }

    // LocalBusiness Schema
    const localBusinessSchema = {
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
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Islamic Financing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pembiayaan Peribadi Islam",
              "description": "Pembiayaan peribadi Islam patuh Syariah dengan kadar untung kompetitif"
            },
            "availability": "https://schema.org/InStock"
          }
        ]
      }
    }

    // Website Schema
    const websiteSchema = {
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
    }

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Apakah itu Pembiayaan Peribadi Islam?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pembiayaan Peribadi Islam adalah produk kewangan yang berlandaskan prinsip Syariah, menggunakan konsep Tawarruq (jual beli komoditi). Ia menawarkan pembiayaan peribadi tanpa unsur riba dan patuh sepenuhnya kepada hukum Islam."
          }
        },
        {
          "@type": "Question",
          "name": "Berapakah kadar kelulusan untuk pembiayaan ini?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kadar kelulusan kami mencapai 95%, tertinggi di Malaysia. Kami mempunyai proses kelayakan yang pantas dan efisien dengan keputusan dalam masa 24 jam."
          }
        },
        {
          "@type": "Question",
          "name": "Adakah saya perlu membayar yuran pendahuluan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tidak, tiada yuran pendahuluan dikenakan. Anda hanya perlu membayar yatan pemprosesan yang rendah selepas pembiayaan diluluskan."
          }
        },
        {
          "@type": "Question",
          "name": "Berapa lama proses kelulusan mengambil masa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Proses kelulusan mengambil masa 1-3 hari bekerja sahaja. Dokumen lengkap akan mempercepatkan proses kelulusan."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah dokumen yang diperlukan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dokumen yang diperlukan: MyKad, 3 bulan slip gaji, 6 bulan penyata bank, bil utiliti terkini, dan dokumen sokongan lain jika berkaitan."
          }
        }
      ]
    }

    // Product Schema
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "FinancialProduct",
      "name": "AFFIN Islamic Personal Financing-i",
      "description": "Pembiayaan peribadi Islam patuh Syariah dengan kadar untung kompetitif",
      "provider": {
        "@type": "BankOrCreditUnion",
        "name": "AFFIN Bank",
        "url": "https://www.affinbank.com.my"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "MYR",
        "availability": "https://schema.org/InStock",
        "itemOffered": {
          "@type": "Service",
          "name": "Pembiayaan Peribadi Islam",
          "description": "Pembiayaan peribadi Islam dengan kelulusan pantas dan kadar kompetitif"
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Kadar Untung",
            "value": "4.56% - 11.88% setahun"
          },
          {
            "@type": "PropertyValue",
            "name": "Jumlah Pembiayaan",
            "value": "RM5,000 - RM200,000"
          },
          {
            "@type": "PropertyValue",
            "name": "Tempoh Pembiayaan",
            "value": "Hingga 10 tahun"
          },
          {
            "@type": "PropertyValue",
            "name": "Kadar Kelulusan",
            "value": "95%"
          }
        ]
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Warganegara Malaysia berumur 21-60 tahun"
      },
      "termsOfService": "https://loanagent-islam.vercel.app/terma-syarat"
    }

    // Create script elements
    const schemas = [
      { type: 'application/ld+json', data: organizationSchema },
      { type: 'application/ld+json', data: localBusinessSchema },
      { type: 'application/ld+json', data: websiteSchema },
      { type: 'application/ld+json', data: faqSchema },
      { type: 'application/ld+json', data: productSchema }
    ]

    // Remove existing schemas if any
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]')
    existingSchemas.forEach(schema => schema.remove())

    // Add new schemas
    schemas.forEach(schema => {
      const script = document.createElement('script')
      script.type = schema.type
      script.textContent = JSON.stringify(schema.data, null, 2)
      document.head.appendChild(script)
    })
  }, [])

  return null
}
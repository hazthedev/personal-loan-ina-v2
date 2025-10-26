import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AFFIN Islamic Personal Financing-i - Pembiayaan Peribadi Islam | Kadar Kelulusan 95%',
  description: 'Pembiayaan peribadi Islam patuh Syariah dengan kadar untung kompetitif. Kelayakan pantas 24 jam, tiada penjamin, dan kadar kelulusan 95%. Dipercayai oleh ribuan pelanggan di Malaysia.',
  keywords: 'pembiayaan peribadi islam, affin islamic, malaysia, pinjaman islam, kelayakan pembiayaan, tawarruq, pembiayaan syariah, personal loan islam, islamic financing, affin bank, kadar rendah, kelulusan pantas',
  authors: [{ name: 'LoanAgent Islam' }],
  creator: 'LoanAgent Islam',
  publisher: 'LoanAgent Islam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://loanagent-islam.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AFFIN Islamic Personal Financing-i - Pembiayaan Peribadi Islam | Kadar Kelulusan 95%',
    description: 'Pembiayaan peribadi Islam patuh Syariah dengan kadar untung kompetitif. Kelayakan pantas 24 jam, tiada penjamin, dan kadar kelulusan 95%.',
    url: 'https://loanagent-islam.vercel.app',
    siteName: 'LoanAgent Islam',
    locale: 'ms_MY',
    type: 'website',
    images: [
      {
        url: '/images/logos/affin-bank.png',
        width: 1200,
        height: 630,
        alt: 'AFFIN Islamic Personal Financing-i - Pembiayaan Peribadi Islam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AFFIN Islamic Personal Financing-i - Pembiayaan Peribadi Islam',
    description: 'Pembiayaan peribadi Islam patuh Syariah. Kelayakan pantas, kadar kompetitif, dan dipercayai oleh ribuan pelanggan di Malaysia.',
    images: ['/images/logos/affin-bank.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code
  },
  icons: {
    icon: '/images/logos/affin-bank.png',
    shortcut: '/images/logos/affin-bank.png',
    apple: '/images/logos/affin-bank.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ms">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fbbf24" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="application-name" content="LoanAgent Islam" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="LoanAgent Islam" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
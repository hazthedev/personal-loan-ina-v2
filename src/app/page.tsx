import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'
import LoanProducts from '@/components/LoanProducts'
import TrustBadges from '@/components/TrustBadges'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-background">
      <Hero />
      
      <WhyChooseUs />
      <HowItWorks />
      
      <FAQ />
      <Footer />
    </main>
  )
}
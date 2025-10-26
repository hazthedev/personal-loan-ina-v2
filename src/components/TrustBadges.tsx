'use client'

import { motion } from 'framer-motion'

export default function TrustBadges() {
  const badges = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Dilesen & Dikawal Selia",
      description: "Penasihat kewangan berlesen BNM"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
        </svg>
      ),
      title: "10,000+ Pelanggan Gembira",
      description: "Dipercayai oleh rakyat Malaysia di seluruh negara"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
        </svg>
      ),
      title: "95% Kadar Kelulusan",
      description: "Kejayaan pembiayaan yang tinggi"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Kelulusan 24 Jam",
      description: "Pemprosesan pantas dijamin"
    }
  ]

  const partners = [
    { name: "Public Bank", logo: "PB", description: "Public Bank Malaysia - Banking partner" },
    { name: "Maybank", logo: "MB", description: "Maybank Malaysia - Leading banking partner" },
    { name: "CIMB Bank", logo: "CB", description: "CIMB Bank Malaysia - Financial services partner" },
    { name: "Hong Leong Bank", logo: "HL", description: "Hong Leong Bank Malaysia - Banking partner" },
    { name: "RHB Bank", logo: "RB", description: "RHB Bank Malaysia - Financial services partner" },
    { name: "AmBank", logo: "AB", description: "AmBank Malaysia - Banking services partner" }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-ink mb-4">
            Mengapa Rakyat Malaysia Percayai Kami
          </h2>
          <p className="text-neutral-muted text-lg max-w-2xl mx-auto">
            Kami komited untuk menyediakan perkhidmatan pembiayaan Islam yang telus, boleh dipercayai, dan pantas
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                {badge.icon}
              </div>
              <h3 className="font-semibold text-neutral-ink mb-2">
                {badge.title}
              </h3>
              <p className="text-sm text-neutral-muted">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Partner Banks */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t pt-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-neutral-ink mb-2">
              Bank & Institusi Kewangan Rakan Kongsian
            </h3>
            <p className="text-neutral-muted">
              Bekerjasama dengan bank terkemuka untuk menawarkan kadar terbaik kepada anda
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-neutral-background rounded-lg px-6 py-3 min-w-[120px] text-center"
                title={partner.description}
                role="img"
                aria-label={partner.description}
              >
                <div className="text-sm font-semibold text-neutral-muted">
                  {partner.logo}
                </div>
                <div className="text-xs text-neutral-muted mt-1">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-neutral-muted">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>PDPA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100 4h2a1 1 0 100 2 2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clipRule="evenodd"/>
              </svg>
              <span>BNM Licensed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
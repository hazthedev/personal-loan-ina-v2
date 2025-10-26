'use client'

import { motion } from 'framer-motion'

export default function GoogleForms() {
  const forms = [
    {
      title: "PEMBIAYAAN PERIBADI ISLAMIK AFFIN BANK",
      description: "Permohonan pantas dan mudah untuk pembiayaan peribadi Islam yang patuh Syariah. Proses kelulusan dalam 3 hari bekerja.",
      type: "financing",
      buttonColor: "bg-primary",
      features: [
        "Patuh Syariah (Tawarruq/Murabahah)",
        "Kadar untung kompetitif",
        "Proses kelulusan pantas",
        "Tiada yuran tersembunyi"
      ],
      formUrl: "https://forms.gle/placeholder-islamic-financing",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3-2s1.343 3-3 3 3 1.343 3 3-3 3-3-1.343-3-3zm0 8c-1.657 0-3 .895-3-2s1.343 3-3 3 3 1.343 3 3-3 3-3-1.343-3-3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8V4m0 8H8m8 0v4m0 0h-4" />
        </svg>
      )
    },
    {
      title: "PERMOHONAN KREDIT KAD AFFIN BANK",
      description: "Pemohonan kredit kad AFFIN Bank dengan faedah eksklusif dan kadar faedah yang berpatutan.",
      type: "credit-card",
      buttonColor: "bg-accent",
      features: [
        "Kadar faedah sehingga 15%",
        "Tiada yuran tahunan",
        "Penukaran mata ganjaran",
        "Cashback menarik"
      ],
      formUrl: "https://forms.gle/placeholder-credit-card",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 8h6m0 0h6" />
          <rect x="9" y="8" width="14" height="8" rx="1" ry="1" />
        </svg>
      )
    }
  ]

  const handleFormClick = (url: string, formType: string) => {
    // In a real implementation, you might want to track form submissions
    // For now, we'll just open the form in a new tab
    window.open(url, '_blank')
  }

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-background to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-ink mb-4">
            Borang Permohonan Google
          </h2>
          <p className="text-xl text-neutral-muted max-w-3xl mx-auto">
            Isi borang permohonan kami yang pantas dan selamat untuk produk AFFIN Bank pilihan anda.
          </p>
        </motion.div>

        {/* Forms Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {forms.map((form, index) => (
            <motion.div
              key={form.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* Header */}
              <div className={`${form.buttonColor} text-white p-6 text-center`}>
                <div className="flex justify-center mb-4">
                  {form.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {form.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {form.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {form.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 00-1.414 1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleFormClick(form.formUrl, form.type)}
                  className={`w-full ${form.buttonColor} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Mohon Sekarang
                </button>
              </div>

              {/* Badge */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 font-medium">
                    Proses Digital 100%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-2xl p-8 text-center border border-blue-200"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">
              <span className="flex items-center justify-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Maklumat Penting
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="font-semibold text-gray-800">Pemprosesan Pantas</p>
                  <p className="text-sm text-gray-600">Pengerahusan digital untuk kelulusan pantas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a5 5 0 01-10 0V9a5 5 0 01-10 0zm1.707-7.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l-4-4a1 1 0 00-1.414 0z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="font-semibold text-gray-800">Keselamatan Terjamin</p>
                  <p className="text-sm text-gray-600">Data anda dilindungi sepenuhnya</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2h-2z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-800">Sokongan Profesional</p>
                  <p className="text-sm text-gray-600">Bantuan dari pakar AFFIN Bank</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center bg-primary-gradient rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Belum Pasti Produk Mana Sesuai?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Konsultan kami sedia membantu anda memilih produk yang paling sesuai dengan keperluan kewangan anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://wa.me/60123456789?text=Assalamualaikum!%20Saya%20berminat%20untuk%20memohon%20pembiayaan.%20Boleh%20tolong%20saya?', '_blank')}
              className="bg-white text-primary-dark font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-all duration-200 shadow-xl"
            >
              Berbual dengan Konsultan
            </button>
            <button
              onClick={() => window.open('tel:1800-LOAN', '_self')}
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-primary transition-all duration-200"
            >
              Panggil 1-800-LOAN
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
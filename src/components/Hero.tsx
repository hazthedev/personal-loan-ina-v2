'use client'

import { motion } from 'framer-motion'
import EligibilityForm from './EligibilityForm'
import { useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [showForm, setShowForm] = useState(false)

  const whatsappNumber = "60167095179" // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Assalamualaikum! Saya berminat untuk memohon pembiayaan peribadi Islam. Boleh tolong saya?")

  return (
    <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              PEMBIAYAAN PERIBADI-I AFFIN BANK
              <span className="block text-yellow-300">Patuh Syariah</span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 block">
                KELULUSAN DALAM 3 HARI BEKERJA
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-8 text-white/90 max-w-lg mx-auto lg:mx-0"
            >
              Kadar kompetitif dari RM2,500 hingga RM250,000.
              Tiada cagaran diperlukan.
              Patuh Syariah (Tawarruq/Murabahah).
              Dipercayai oleh lebih 10,000 rakyat Malaysia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://forms.gle/2rEBR41YPp3FJB31A"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-yellow-400 hover:bg-yellow-500 text-primary-dark font-bold text-lg py-4 px-8 rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-block text-center"
              >
                Semak Kelayakan
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary font-bold text-lg py-4 px-8 rounded-full transition-all duration-200 inline-block text-center"
              >
                Hubungi Pegawai
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>4.8/5 Penarafan</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                <span>Kelulusan Pantas</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <span>Khidmat Profesional</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Lottie Animation Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
              {/* Professional Image */}
              <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="/images/ina/ina.jpg"
                  alt="Professional Islamic Banking Consultant"
                  fill
                  className="object-cover object-center"
                  priority
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl" />

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-xl font-bold mb-1">Konsultan Pembiayaan Islam</h3>
                    <p className="text-sm text-white/90">Panduan percuma untuk pembiayaan patuh Syariah</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-20, 10, -20] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-4 bg-yellow-400 text-primary-dark rounded-lg px-4 py-2 font-bold shadow-lg"
            >
              Pakar Bertauliah
            </motion.div>

            <motion.div
              animate={{ y: [20, -10, 20] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-4 bg-white text-primary-dark rounded-lg px-4 py-2 font-bold shadow-lg"
            >
              Khidmat Profesional
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Eligibility Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-neutral-ink">Semak Kelayakan Anda</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-neutral-muted hover:text-neutral-ink"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <EligibilityForm onSuccess={() => setShowForm(false)} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
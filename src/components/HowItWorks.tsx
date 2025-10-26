'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: 1,
      title: "Semak Kelayakan",
      description: "Isi borang kelayakan pantas 2 minit kami dengan maklumat asas tentang pendapatan dan keperluan anda.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      details: [
        "Maklumat peribadi dan pekerjaan asas",
        "Keperluan pendapatan bulanan dan jumlah pembiayaan",
        "Penilaian kelayakan awal serta-merta"
      ]
    },
    {
      number: 2,
      title: "Hantar Dokumen",
      description: "Muat naik dokumen yang diperlukan secara selamat dalam talian. Saya akan menyemak permohonan anda dalam masa beberapa jam.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      details: [
        "Kad Pengenalan (IC) atau pasport",
        "Slip gaji 3 bulan terkini atau penyata bank",
      ]
    },
    {
      number: 3,
      title: "Dapatkan Kelulusan",
      description: "Terima kelulusan pembiayaan Islam anda dalam masa 3 hari bekerja.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      details: [
        "Notifikasi kelulusan pembiayaan melalui SMS/Emel",
        "Tawaran pembiayaan terperinci dengan terma dan syarat",
        "Konsultan pembiayaan khas ditugaskan"
      ]
    },
    {
      number: 4,
      title: "Terima Dana",
      description: "Terima tawaran dan terima dana terus ke akaun bank anda. Semudah itu!",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      details: [
        "Tandatangani perjanjian pembiayaan secara digital",
        "Dana dibayar dalam masa 1-2 hari perniagaan",
        "Mulakan perjalanan pembiayaan Islam anda dengan sokongan"
      ]
    }
  ]

  const documentChecklist = {
    salaried: [
      "Salinan Kad Pengenalan (IC)",
      "Slip gaji 3 bulan terkini",
      "Borang angkasa",
      "HRMIS/CV atau surat pengesahan jawatan"
    ],
    selfEmployed: [
      "Salinan Kad Pengenalan (IC)",
      "Slip gaji 3 bulan terkini",
      "Bank statement gaji 3 bulan terkini",
      "Caruman EPF/SOCSO"
    ],
    commissionBased: [
      "Salinan Kad Pengenalan (IC)",
      "Slip gaji 3 bulan terkini",
      "Bank statement gaji 3 bulan terkini",
      "Caruman EPF/SOCSO",
      "Sijil kelayakan dan sijil degree Pelajaran"
    ],
    pensioner: [
      "Salinan Kad Pengenalan (IC)",
      "Salinan kad pesara",
      "Penyata pencen"
    ],
    bankers: [
      "Salinan Kad Pengenalan (IC)",
      "Slip gaji 3 bulan terkini",
      "Bank statement gaji 3 bulan terkini",
      "Caruman EPF/SOCSO"
    ]
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-ink mb-4">
            Cara Ia Berfungsi
          </h2>
          <p className="text-xl text-neutral-muted max-w-3xl mx-auto">
            Dapatkan pembiayaan peribadi Islam anda diluluskan dalam 4 langkah mudah. Tiada masalah, tiada kertas kerja, hanya pembiayaan pantas apabila anda memerlukannya.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary-light">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                </div>
              )}

              <div
                className="card h-full cursor-pointer group"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-gradient text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-neutral-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-muted mb-4">
                  {step.description}
                </p>

                {/* Expandable Details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeStep === index ? 'auto' : 0,
                    opacity: activeStep === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 text-sm text-neutral-muted">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Document Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-neutral-background rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-neutral-ink mb-8 text-center">
            Senarai Semak Dokumen
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(documentChecklist).map(([type, documents]) => (
              <div key={type} className="bg-white shadow-md rounded-xl p-6">
                <h4 className="font-semibold text-primary mb-4 capitalize">
                  {type === 'salaried' ? 'Kakitangan Kerajaan' :
                   type === 'selfEmployed' ? 'Panel Swasta' :
                   type === 'commissionBased' ? 'Sektor Profesional' :
                   type === 'pensioner' ? 'Pesara Kerajaan/Pesara Tentera' :
                   type === 'bankers' ? 'BANKERS (PEGAWAI BANK)' :
                   type}
                </h4>
                <ul className="space-y-3">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-neutral-muted">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className=" text-center bg-primary-gradient rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Bersedia untuk Bermula?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Sertai ribuan rakyat Malaysia yang telah berjaya mendapatkan pembiayaan peribadi Islam melalui platform kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://forms.gle/2rEBR41YPp3FJB31A', '_blank')}
              className="bg-white text-primary-dark font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-all duration-200 shadow-xl"
            >
              Mohon Sekarang
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
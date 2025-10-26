'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function LoanProducts() {
  const [selectedAmount, setSelectedAmount] = useState('50000')
  const [selectedTenure, setSelectedTenure] = useState('5')

  const loanProducts = [
    {
      name: "Pembiayaan Peribadi Islam-i",
      minAmount: 2500,
      maxAmount: 250000,
      interestRate: "4.5% - 15%",
      tenure: "2 - 10 tahun",
      features: [
        "Patuh Syariah (Tawarruq)",
        "Tiada cagaran diperlukan",
        "Kelulusan pantas",
        "Kadar untung kompetitif",
        "Ibra' untuk penyelesaian awal"
      ],
      recommended: true,
      color: "primary"
    },
    {
      name: "Konsolidasi Hutang Islam",
      minAmount: 10000,
      maxAmount: 200000,
      interestRate: "4.2% - 12%",
      tenure: "2 - 10 tahun",
      features: [
        "Gabungkan pelbagai hutang",
        "Bayaran bulanan lebih rendah",
        "Bayaran bulanan tunggal",
        "Kurangkan kos untung",
        "Patuh Syariah"
      ],
      recommended: false,
      color: "accent"
    },
    {
      name: "Pembiayaan Kecemasan Islam",
      minAmount: 2000,
      maxAmount: 100000,
      interestRate: "5.5% - 15%",
      tenure: "1 - 7 tahun",
      features: [
        "Pemprosesan pantas",
        "Dokumen minimum",
        "Kelulusan 24 jam",
        "Keperluan pembiayaan segera",
        "Tanpa riba"
      ],
      recommended: false,
      color: "success"
    }
  ]

  const calculateMonthlyPayment = (principal: number, rate: number, years: number) => {
    const monthlyRate = rate / 12 / 100
    const months = years * 12
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    return Math.round(payment)
  }

  const amount = parseInt(selectedAmount)
  const tenure = parseInt(selectedTenure)
  const estimatedRate = 6.5 // Average rate for calculation
  const monthlyPayment = calculateMonthlyPayment(amount, estimatedRate, tenure)
  const totalPayment = monthlyPayment * tenure * 12
  const totalInterest = totalPayment - amount

  return (
    <section className="py-20 bg-neutral-background">
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
            Bandingkan <span className="gradient-text">Pilihan Pembiayaan</span>
          </h2>
          <p className="text-xl text-neutral-muted max-w-3xl mx-auto">
            Pilih pembiayaan Islam yang sempurna untuk keperluan anda dengan terma telus dan kadar untung kompetitif
          </p>
        </motion.div>

        {/* Loan Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-neutral-ink mb-8 text-center">
            Kalkulator Pembiayaan Pantas
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-medium text-neutral-muted mb-3">
                Jumlah Pembiayaan: RM{amount.toLocaleString()}
              </label>
              <input
                type="range"
                min="2500"
                max="250000"
                step="5000"
                value={selectedAmount}
                onChange={(e) => setSelectedAmount(e.target.value)}
                className="w-full h-2 bg-primary-light rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-neutral-muted mt-2">
                <span>RM2,500</span>
                <span>RM250,000</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-muted mb-3">
                Tempoh Pembiayaan: {tenure} {tenure === 1 ? 'Tahun' : 'Tahun'}
              </label>
              <input
                type="range"
                min="2"
                max="10"
                step="1"
                value={selectedTenure}
                onChange={(e) => setSelectedTenure(e.target.value)}
                className="w-full h-2 bg-primary-light rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-neutral-muted mt-2">
                <span>2 Tahun</span>
                <span>10 Tahun</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-neutral-background rounded-xl">
            <div className="text-center">
              <div className="text-sm text-neutral-muted mb-1">Bayaran Bulanan</div>
              <div className="text-2xl font-bold text-primary">
                RM{monthlyPayment.toLocaleString()}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-neutral-muted mb-1">Jumlah Untung</div>
              <div className="text-2xl font-bold text-warning">
                RM{totalInterest.toLocaleString()}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-neutral-muted mb-1">Jumlah Bayaran</div>
              <div className="text-2xl font-bold text-neutral-ink">
                RM{totalPayment.toLocaleString()}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-neutral-muted mb-1">Kadar Untung Anggaran</div>
              <div className="text-2xl font-bold text-success">
                {estimatedRate}%
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-muted text-center mt-4">
            *Ini adalah anggaran. Kadar sebenar mungkin berbeza berdasarkan profil kredit anda dan terma pemiutang.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {loanProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${
                product.recommended
                  ? 'md:scale-105 z-10'
                  : ''
              }`}
            >
              {product.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-neutral-ink px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`card h-full ${
                product.recommended
                  ? 'border-2 border-primary shadow-2xl'
                  : ''
              }`}>
                <div className={`text-center mb-6 ${
                  product.recommended ? 'pt-4' : ''
                }`}>
                  <h3 className="text-2xl font-bold text-neutral-ink mb-2">
                    {product.name}
                  </h3>
                  <div className="text-sm text-neutral-muted">
                    RM{product.minAmount.toLocaleString()} - RM{product.maxAmount.toLocaleString()}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-neutral-muted">Interest Rate</span>
                    <span className="font-semibold text-primary">{product.interestRate}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-neutral-muted">Repayment Period</span>
                    <span className="font-semibold">{product.tenure}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm text-neutral-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

<button
  onClick={() => window.open('https://forms.gle/2rEBR41YPp3FJB31A', '_blank')}
  className="w-full font-bold text-lg py-4 px-8 rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-block text-center bg-yellow-400 hover:bg-yellow-500 text-primary-dark"
>
  Mohon Sekarang
</button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-neutral-ink mb-6">
            Tidak Pasti Pembiayaan Mana Yang Sesuai Untuk Anda?
          </h3>
          <p className="text-neutral-muted mb-8 max-w-2xl mx-auto">
            Konsultan pembiayaan Islam kami yang berpengalaman ada di sini untuk membantu anda mencari penyelesaian pembiayaan yang sempurna berdasarkan keperluan unik dan situasi kewangan anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Dapatkan Konsultasi Percuma
            </button>
            <button className="btn-secondary">
              Bandingkan Semua Ciri
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
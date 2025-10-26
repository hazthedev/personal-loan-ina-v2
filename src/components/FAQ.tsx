'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Apakah keperluan kelayakan untuk pembiayaan peribadi Islam-i?",
      answer: "Untuk layak mendapatkan pembiayaan peribadi Islam, anda biasanya perlu: Menjadi warganegara Malaysia atau penduduk tetap berumur 21-60 tahun, Mempunyai pendapatan bulanan minimum RM3,000, Mempunyai sekurang-kurangnya 6 bulan sejarah pekerjaan, Mempunyai akaun bank yang sah, dan Mempunyai sejarah kredit yang baik. Individu yang bekerja sendiri mungkin perlu menyediakan dokumentasi perniagaan tambahan."
    },
    {
      question: "Berapa banyak yang boleh saya pinjam dan apakah kadar untung?",
      answer: "Jumlah pembiayaan biasanya antara RM2,500 hingga RM250,000 bergantung pada pendapatan dan profil kredit anda. Kadar untung berbeza dari 4.5% hingga 15% setahun berdasarkan pemiutang, skor kredit anda, jumlah pembiayaan, dan tempoh pembayaran balik. Kadar akhir yang ditawarkan akan bergantung pada keadaan individu anda dan penilaian pemiutang."
    },
    {
      question: "Berapa lama proses kelulusan mengambil masa?",
      answer: "Dengan proses kami yang dipermudahkan, anda boleh mendapatkan kelulusan awal dalam masa 24 jam selepas menghantar permohonan lengkap anda. Setelah diluluskan, dana biasanya dibayar dalam masa 1-2 hari perniagaan selepas anda menerima tawaran pembiayaan dan menandatangani perjanjian. Pembiayaan kecemasan mungkin diproses lebih pantas."
    },
    {
      question: "Apakah dokumen yang perlu saya sediakan?",
      answer: "Dokumen yang diperlukan biasanya termasuk: Salinan Kad Pengenalan (IC), Slip gaji 3 bulan terkini, Penyata bank 6 bulan terkini, Penyata EPF (6 bulan terakhir), Surat pengesahan pekerjaan, dan Borang BE/penilaian cukai terkini. Individu yang bekerja sendiri mungkin memerlukan dokumen tambahan seperti sijil pendaftaran perniagaan dan akaun diaudit."
    },
    {
      question: "Bolehkah saya memohon jika saya mempunyai sejarah kredit yang lemah?",
      answer: "Walaupun skor kredit yang baik meningkatkan peluang kelulusan dan kadar yang lebih baik, kami bekerjasama dengan pelbagai pemiutang yang mempertimbangkan pelbagai faktor selain skor kredit. Jika anda mempunyai sejarah kredit yang lemah, kami masih mungkin dapat membantu anda mencari pilihan pembiayaan yang sesuai, walaupun terma mungkin berbeza. Hubungi konsultan kami untuk membincangkan situasi anda secara khusus."
    },
    {
      question: "Adakah terdapat yuran atau caj tersembunyi?",
      answer: "Kami percaya dalam ketelusan sepenuhnya. Semua yuran dan caj didedahkan secara jelas dalam tawaran pembiayaan anda sebelum anda menerima. Yuran biasa mungkin termasuk yuran pemprosesan (biasanya 1-2% daripada jumlah pembiayaan), caj pembayaran lewat, dan yuran penyelesaian awal. Tiada kos tersembunyi, dan kami akan menerangkan semua terma dengan jelas sebelum anda berkomitmen."
    },
    {
      question: "Bolehkah saya menyelesaikan pembiayaan saya awal? Adakah penalti?",
      answer: "Kebanyakan pemiutang membenarkan penyelesaian pembiayaan awal, tetapi terma berbeza. Sesetengahnya mungkin mengenakan yuran penyelesaian awal (biasanya 1-3% daripada jumlah tertunggak), sementara yang lain menawarkan pembayaran balik awal tanpa penalti. Kami akan membantu anda mencari pembiayaan dengan terma penyelesaian awal yang menguntungkan berdasarkan keperluan anda."
    },
    {
      question: "Apakah yang berlaku jika saya tidak dapat membuat bayaran bulanan saya?",
      answer: "Jika anda menghadapi kesukaran membuat pembayaran, adalah penting untuk menghubungi pemiutang anda dengan segera. Banyak pemiutang menawarkan pilihan bantuan sementara seperti cuti pembayaran atau penyusunan semula. Pembayaran lewat mungkin dikenakan penalti dan menjejaskan skor kredit anda. Kami mengesyorkan membincangkan sebarang isu berpotensi dengan konsultan kami untuk meneroka pilihan yang tersedia."
    },
    {
      question: "Adakah maklumat peribadi saya selamat?",
      answer: "Tentu sekali. Kami mengambil keselamatan data dengan sangat serius dan sepenuhnya mematuhi PDPA. Maklumat peribadi anda dienkripsi dan disimpan dengan selamat. Kami hanya berkongsi data anda dengan pemiutang yang anda telah benarkan, dan semua proses kami mengikut garis panduan perlindungan data yang ketat untuk memastikan privasi dan keselamatan anda."
    },
    {
      question: "Bagaimana saya menerima dana pembiayaan?",
      answer: "Setelah pembiayaan anda diluluskan dan anda telah menandatangani perjanjian, dana akan disalurkan terus ke akaun bank yang anda tetapkan melalui pemindahan elektronik. Ini biasanya berlaku dalam masa 1-2 hari perniagaan selepas kelulusan, walaupun sesetengah pemiutang menawarkan pembayaran pada hari yang sama untuk kes-kes kecemasan."
    }
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-neutral-ink mb-4">
            Soalan Lazim (FAQ)
          </h2>
          <p className="text-xl text-neutral-muted">
            Ada soalan? Kami ada jawapan. Inilah semua yang anda perlu tahu tentang pembiayaan peribadi Islam kami.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div
                className={`card cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-lg font-semibold text-neutral-ink pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeIndex === index ? 'auto' : 0,
                    opacity: activeIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-neutral-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-primary-gradient rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Masih Ada Soalan?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Konsultan pembiayaan Islam kami ada di sini untuk membantu anda setiap langkah. Dapatkan nasihat peribadi dan jawapan untuk semua soalan anda.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8 mx-auto"
        >


          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-neutral-ink mb-2">Emel</h4>
            <p className="text-neutral-muted">nurhaslinamohd@gmail.com</p>
            <p className="text-sm text-neutral-muted">Sokongan 24/7</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h4 className="font-semibold text-neutral-ink mb-2">WhatsApp</h4>
            <p className="text-neutral-muted">+60 16-709 5179</p>
            <p className="text-sm text-neutral-muted">Respons Serta-merta</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
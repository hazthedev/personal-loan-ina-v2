'use client'

import { motion } from 'framer-motion'

export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Kelulusan Pantas",
      description: "Dapatkan pembiayaan Islam anda diluluskan dalam masa 3 hari bekerja. Tiada tempoh menunggu yang lama atau kertas kerja yang rumit.",
      highlight: "24 Jam"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Kadar Keuntungan Berbeza Mengikut Pakej Pembiayaan",
      description: "Bermula serendah 4.5% dengan patuh Syariah Tawarruq (Komoditi Murabahah)",
      highlight: "serendah 4.5%"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Tiada Yuran Tersembunyi",
      description: "Harga telus tanpa yuran pemprosesan, penalti penyelesaian awal, atau caj tersembunyi (Ibra' untuk penyelesaian awal).",
      highlight: "100% Telus"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Jumlah Pembiayaan Fleksibel",
      description: "Pinjam dari RM2,500 hingga RM250,000 dengan tempoh pembayaran balik sehingga 10 tahun (patuh Syariah).",
      highlight: "Hingga RM250K"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Penasihat Kewangan Islam Pakar",
      description: "Konsultan pembiayaan Islam yang berpengalaman kami menyediakan nasihat peribadi untuk mencari pembiayaan terbaik untuk keperluan anda.",
      highlight: "Sokongan Pakar"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: "Proses Permohonan Mudah",
      description: "Selesaikan keseluruhan permohonan pembiayaan Islam anda dalam talian dalam beberapa minit dengan dokumen minimum.",
      highlight: "Mohon 5 Minit"
    }
  ]

  const testimonials = [
    {
      name: "Siti Aminah",
      role: "Pemilik Perniagaan",
      content: "Saya memerlukan dana segera untuk pengembangan perniagaan. Pasukan membantu saya mendapatkan kelulusan dalam 24 jam. Perkhidmatan yang luar biasa!",
      rating: 5
    },
    {
      name: "Ahmad Rahman",
      role: "Pekerja Bergaji",
      content: "Proses yang sangat telus tanpa yuran tersembunyi. Kadar untung jauh lebih baik daripada yang ditawarkan oleh bank saya.",
      rating: 5
    },
    {
      name: "Muhammad Hassan",
      role: "Bekerja Sendiri",
      content: "Sebagai individu yang bekerja sendiri, saya bimbang untuk mendapatkan kelulusan. Mereka menjadikannya mudah dan tanpa sebarang masalah.",
      rating: 5
    }
  ]

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
            Mengapa Pilih <span className="gradient-text">Perkhidmatan Kami</span>
          </h2>
          <p className="text-xl text-neutral-muted max-w-3xl mx-auto">
            Kami menjadikan pembiayaan peribadi Islam mudah, pantas, dan berpatutan. Dipercayai oleh ribuan rakyat Malaysia untuk keperluan kewangan mereka.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:-translate-y-2"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-ink mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-muted mb-4">
                {feature.description}
              </p>
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                {feature.highlight}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary-gradient rounded-2xl p-8 text-white mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">RM50J+</div>
              <div className="text-white/80">Pembiayaan Dibayar</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10,000+</div>
              <div className="text-white/80">Pelanggan Berpuas Hati</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-white/80">Kadar Kelulusan</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-white/80">Penarafan Pelanggan</div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}

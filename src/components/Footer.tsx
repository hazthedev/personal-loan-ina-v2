'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const footerLinks = {
    legal: [
      { name: 'Dasar Privasi', href: '#' },
      { name: 'Terma & Syarat', href: '#' },
      { name: 'Notis PDPA', href: '#' },
      { name: 'Penafian', href: '#' },
      { name: 'Pematuhan', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'Tiktok', icon: 'tt', href: 'https://www.tiktok.com/@nurhaslina77?_t=ZS-90ptt7VX276&_r=1' },
    { name: 'WhatsApp', href: 'https://wa.me/60167095179' }
  ]

  return (
    <footer className="bg-neutral-ink text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                LoanAgent Islam
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Rakan kongsi anda yang dipercayai untuk pembiayaan peribadi Islam di Malaysia. Kami menjadikan pembiayaan mudah, pantas, dan telus dengan kadar untung kompetitif dan kadar kelulusan 95%.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <a
                  href="https://www.google.com/maps/dir//Affin+Bank,+36,+Jalan+PSK+3,+Pusat+Perdagangan+Seri+Kembangan,+43300+Seri+Kembangan,+Selangor/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cdb55d72bd1deb:0xe6d98bcd0c9f666c?sa=X&ved=1t:57443&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-yellow-400 transition-colors duration-200"
                >
                  Affin Bank, 36, Jalan PSK 3, Pusat Perdagangan Seri Kembangan, 43300 Seri Kembangan, Selangor
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span className="text-gray-300 text-sm">+60 16-709 5179</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-gray-300 text-sm">nurhaslinamohd@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 hover:bg-yellow-400 hover:text-neutral-ink rounded-full flex items-center justify-center transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.name === 'WhatsApp' ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-yellow-400 mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-gray-400 text-sm">
                © 2025 LoanAgent. All rights reserved. | BNM Licensed Financial Advisor
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Legal links moved to main content */}
            </motion.div>
          </div>

          {/* PDPA Compliance */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 pt-4 border-t border-gray-800"
          >
            <p className="text-center text-gray-500 text-xs">
              Notis PDPA: Data peribadi anda dikutip semata-mata untuk pemprosesan permohonan pembiayaan dan akan dilindungi mengikut Akta Perlindungan Data Peribadi 2010.
              Dengan menggunakan perkhidmatan ini, anda bersetuju dengan amalan pemprosesan data kami seperti yang digariskan dalam Dasar Privasi kami.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

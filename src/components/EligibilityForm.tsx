'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { eligibilityFormSchema, type EligibilityFormData } from '@/lib/validations'
import { motion } from 'framer-motion'

interface EligibilityFormProps {
  onSuccess: () => void
}

export default function EligibilityForm({ onSuccess }: EligibilityFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<EligibilityFormData>({
    resolver: zodResolver(eligibilityFormSchema)
  })

  const onSubmit = async (data: EligibilityFormData) => {
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const response = await fetch('/api/eligibility', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitResult({
          success: true,
          message: 'Tahniah! Anda kelihatan layak untuk pembiayaan peribadi Islam. Pegawai kami akan menghubungi anda dalam masa 24 jam.'
        })
        setTimeout(() => {
          onSuccess()
          reset()
        }, 3000)
      } else {
        setSubmitResult({
          success: false,
          message: result.error || 'Sesuatu telah berlaku. Sila cuba lagi.'
        })
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'Ralat rangkaian. Sila cuba lagi.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="font-semibold text-neutral-ink mb-3">Maklumat Peribadi</h3>

          <div>
            <label className="block text-sm font-medium text-neutral-muted mb-2">
              Nama Penuh *
            </label>
            <input
              {...register('name')}
              type="text"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Ahmad bin Ibrahim"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-error">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-muted mb-2">
              Alamat Emel *
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="ahmad@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-error">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-muted mb-2">
              Nombor Telefon *
            </label>
            <input
              {...register('phone')}
              type="tel"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="0123456789"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-error">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Employment Information */}
        <div className="space-y-4">
          <h3 className="font-semibold text-neutral-ink mb-3">Maklumat Pekerjaan</h3>

          <div>
            <label className="block text-sm font-medium text-neutral-muted mb-2">
              Jenis Pekerjaan *
            </label>
            <select
              {...register('employmentType')}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="">Pilih jenis pekerjaan</option>
              <option value="salaried">Pekerja Bergaji</option>
              <option value="self-employed">Bekerja Sendiri</option>
              <option value="commission-based">Berasaskan Komisen</option>
              <option value="pensioner">Pencen Kerajaan</option>
            </select>
            {errors.employmentType && (
              <p className="mt-1 text-sm text-error">{errors.employmentType.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-muted mb-2">
              Pendapatan Bulanan (RM) *
            </label>
            <select
              {...register('monthlyIncome')}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="">Pilih julat pendapatan</option>
              <option value="<3000">Kurang dari RM3,000</option>
              <option value="3000-5000">RM3,000 - RM5,000</option>
              <option value="5000-8000">RM5,000 - RM8,000</option>
              <option value="8000-12000">RM8,000 - RM12,000</option>
              <option value=">12000">Lebih dari RM12,000</option>
            </select>
            {errors.monthlyIncome && (
              <p className="mt-1 text-sm text-error">{errors.monthlyIncome.message}</p>
            )}
          </div>
        </div>

        {/* Loan Information */}
        <div className="space-y-4">
          <h3 className="font-semibold text-neutral-ink mb-3">Keperluan Pembiayaan</h3>

          <div>
            <label className="block text-sm font-medium text-neutral-muted mb-2">
              Jumlah Pembiayaan Diingini (RM) *
            </label>
            <select
              {...register('loanAmount')}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="">Pilih jumlah pembiayaan</option>
              <option value="2500-5000">RM2,500 - RM5,000</option>
              <option value="5000-10000">RM5,000 - RM10,000</option>
              <option value="10000-20000">RM10,000 - RM20,000</option>
              <option value="20000-50000">RM20,000 - RM50,000</option>
              <option value="50000-100000">RM50,000 - RM100,000</option>
              <option value="100000-200000">RM100,000 - RM200,000</option>
              <option value=">200000">Lebih dari RM200,000</option>
            </select>
            {errors.loanAmount && (
              <p className="mt-1 text-sm text-error">{errors.loanAmount.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-muted mb-2">
              Tempoh Pembiayaan (Tahun) *
            </label>
            <select
              {...register('loanTenure')}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="">Pilih tempoh pembiayaan</option>
              <option value="2">2 Tahun</option>
              <option value="3">3 Tahun</option>
              <option value="4">4 Tahun</option>
              <option value="5">5 Tahun</option>
              <option value="6">6 Tahun</option>
              <option value="7">7 Tahun</option>
              <option value="8">8 Tahun</option>
              <option value="9">9 Tahun</option>
              <option value="10">10 Tahun</option>
            </select>
            {errors.loanTenure && (
              <p className="mt-1 text-sm text-error">{errors.loanTenure.message}</p>
            )}
          </div>
        </div>

        {/* Consent */}
        <div>
          <label className="flex items-start gap-3">
            <input
              {...register('consent')}
              type="checkbox"
              className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <span className="text-sm text-neutral-muted">
              Saya bersetuju untuk dihubungi melalui telefon, emel, atau WhatsApp berkenaan permohonan pembiayaan saya.
              Saya faham bahawa maklumat saya akan diproses mengikut peraturan PDPA. *
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-sm text-error">{errors.consent.message}</p>
          )}
        </div>

        {/* Submit Result */}
        {submitResult && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg ${
              submitResult.success
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {submitResult.message}
          </motion.div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold py-4"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Memproses...
            </span>
          ) : (
            'Semak Kelayakan'
          )}
        </button>
      </form>
    </motion.div>
  )
}
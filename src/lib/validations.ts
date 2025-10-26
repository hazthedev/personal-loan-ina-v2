import { z } from 'zod'

export const eligibilityFormSchema = z.object({
  name: z.string().min(2, 'Nama mesti sekurang-kurangnya 2 aksara'),
  email: z.string().email('Sila masukkan alamat emel yang sah'),
  phone: z.string().regex(/^[0-9]{10,11}$/, 'Sila masukkan nombor telefon yang sah'),
  employmentType: z.enum(['salaried', 'self-employed', 'commission-based', 'pensioner'], {
    required_error: 'Sila pilih jenis pekerjaan'
  }),
  monthlyIncome: z.enum(['<3000', '3000-5000', '5000-8000', '8000-12000', '>12000'], {
    required_error: 'Sila pilih julat pendapatan bulanan'
  }),
  loanAmount: z.enum(['2500-5000', '5000-10000', '10000-20000', '20000-50000', '50000-100000', '100000-200000', '>200000'], {
    required_error: 'Sila pilih jumlah pembiayaan yang diingini'
  }),
  loanTenure: z.enum(['2', '3', '4', '5', '6', '7', '8', '9', '10'], {
    required_error: 'Sila pilih tempoh pembiayaan'
  }),
  consent: z.boolean().refine(val => val === true, 'Anda mesti bersetuju dengan terma dan syarat')
})

export type EligibilityFormData = z.infer<typeof eligibilityFormSchema>
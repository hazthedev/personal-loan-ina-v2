// Export form data type from validations
export type { EligibilityFormData } from '@/lib/validations'

// Lead data structure
export interface Lead {
  id: string
  name: string
  email: string
  phone: string
  employmentType: 'salaried' | 'self-employed' | 'commission-based' | 'pensioner'
  monthlyIncome: '<3000' | '3000-5000' | '5000-8000' | '8000-12000' | '>12000'
  loanAmount: '2500-5000' | '5000-10000' | '10000-20000' | '20000-50000' | '50000-100000' | '100000-200000' | '>200000'
  loanTenure: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
  consent: boolean
  status: 'new' | 'contacted' | 'qualified' | 'rejected' | 'closed'
  created_at: string
  updated_at: string
  notes?: string
  agent_id?: string
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  error?: string
}

export interface LeadResponse extends ApiResponse {
  data?: {
    leadId: string
  }
}

export interface LeadsResponse extends ApiResponse {
  data?: {
    leads: Lead[]
    total: number
  }
}

// Email notification types
export interface EmailNotification {
  to: string
  subject: string
  html: string
  text?: string
}

export interface NotificationConfig {
  customerConfirmation: boolean
  agentNotification: boolean
  crmIntegration: boolean
}

// Environment variables type
export interface EnvVars {
  DATABASE_URL: string
  EMAIL_HOST: string
  EMAIL_PORT: string
  EMAIL_USER: string
  EMAIL_PASS: string
  EMAIL_FROM: string
  WHATSAPP_PHONE_NUMBER: string
  WHATSAPP_API_TOKEN: string
  NODE_ENV: string
  APP_URL: string
  RATE_LIMIT_WINDOW_MS: string
  RATE_LIMIT_MAX_REQUESTS: string
  GOOGLE_ANALYTICS_ID?: string
  GOOGLE_TAG_MANAGER_ID?: string
  CRM_WEBHOOK_URL?: string
  CRM_API_KEY?: string
}

// Error handling types
export interface ApiError extends Error {
  statusCode?: number
  code?: string
  details?: any
}

// Rate limiting types
export interface RateLimitInfo {
  limit: number
  current: number
  remaining: number
  resetTime: Date
}
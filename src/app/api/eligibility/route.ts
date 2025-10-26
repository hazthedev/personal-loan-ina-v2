import { NextRequest, NextResponse } from 'next/server'
import { eligibilityFormSchema } from '@/lib/validations'

// Mock database - in production, this would be a real database
const leads: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = eligibilityFormSchema.parse(body)

    // Create a new lead
    const newLead = {
      id: crypto.randomUUID(),
      ...validatedData,
      status: 'new',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    // Save to "database" (in production, this would be a real DB)
    leads.push(newLead)

    // Log the lead (in production, this would be sent to CRM/Email)
    console.log('New lead received:', newLead)

    // TODO: Send notifications
    // - Send confirmation email to customer
    // - Send notification to agents
    // - Push to CRM system

    return NextResponse.json({
      success: true,
      message: 'Eligibility check completed successfully',
      leadId: newLead.id
    })

  } catch (error) {
    console.error('Eligibility check error:', error)

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid form data', details: error },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // This endpoint could be used by admin to view leads
  return NextResponse.json({ leads })
}
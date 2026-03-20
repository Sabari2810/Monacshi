import { supabaseAdmin } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const { error } = await supabaseAdmin
        .from('contacts')
        .insert({ name, email, phone, message })

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json({ success: true })
}
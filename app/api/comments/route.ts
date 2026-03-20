import { supabaseAdmin } from '@/lib/supabase'
import { NextResponse } from 'next/server'

// GET — fetch approved comments for a post
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const postId = searchParams.get('postId')

    if (!postId) return NextResponse.json({ error: 'No post ID' }, { status: 400 })

    const { data, error } = await supabaseAdmin
        .from('comments')
        .select('id, name, content, created_at')
        .eq('post_id', postId)
        .eq('approved', true)
        .order('created_at', { ascending: true })

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json(data)
}

// POST — submit a new comment
export async function POST(request: Request) {
    const body = await request.json()
    const { postId, name, email, content } = body

    if (!postId || !name || !content) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const { error } = await supabaseAdmin
        .from('comments')
        .insert({ post_id: postId, name, email, content, approved: false })

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json({ success: true })
}
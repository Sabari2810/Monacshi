import { supabase } from '@/lib/supabase'
import BlogClient from './BlogClient'

export default async function BlogPage() {
    const { data: posts } = await supabase
        .from('posts')
        .select('*')
        .order('date', { ascending: false })

    return <BlogClient posts={posts ?? []} />
}
import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Comments from './Comments'

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single()

    if (!post) notFound()

    return (
        <main className="min-h-screen bg-[#191A11] text-[#F0E4AF]">

            {/* Cover image */}
            {post.image_url && (
                <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
                    <Image
                        src={post.image_url}
                        fill
                        alt={post.title}
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#191A11] via-[#191A11]/40 to-transparent" />
                </div>
            )}

            <div className={`max-w-3xl mx-auto px-6 md:px-0 pb-24 relative z-10 ${post.image_url ? '-mt-20 md:-mt-32' : 'pt-24'}`}>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs tracking-widest uppercase text-[#9A9370] mb-6">
                    {post.category && <span>{post.category}</span>}
                    <span>·</span>
                    <span>
                        {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'long', day: 'numeric', year: 'numeric'
                        })}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        {post.comments_count} comments
                    </span>
                </div>

                {/* Title */}
                <h1 className="font-cormorant text-4xl md:text-5xl lg:text-7xl leading-none mb-8 md:mb-10">
                    {post.title}
                </h1>

                {/* Excerpt */}
                {post.excerpt && (
                    <p className="text-base md:text-lg text-[#9A9370] leading-relaxed mb-8 md:mb-10 border-l-2 border-[#F0E4AF]/20 pl-4 md:pl-6 font-cormorant italic">
                        {post.excerpt}
                    </p>
                )}

                {/* Divider */}
                <div className="flex items-center gap-4 mb-8 md:mb-10">
                    <div className="h-px flex-1 bg-[#F0E4AF]/10" />
                    <span className="text-[#F0E4AF]/20 font-cormorant italic text-xl">✦</span>
                    <div className="h-px flex-1 bg-[#F0E4AF]/10" />
                </div>

                {/* Content */}
                {post.content && (
                    <div
                        className="prose-blog"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                )}

                {/* Back */}
                <a
                    href="/blog"
                    className="inline-flex items-center gap-3 mt-16 text-xs tracking-widest uppercase text-[#9A9370] hover:text-[#F0E4AF] transition-colors duration-300"
                >
                    <span>←</span>
                    <span>Back to journal</span>
                </a>

                {/* Comments */}
                <Comments postId={post.id} />

            </div>
        </main>
    )
}
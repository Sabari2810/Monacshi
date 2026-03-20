"use client";
import { useState } from "react";
import Image from "next/image";

interface Post {
    id: string;
    title: string;
    excerpt: string;
    image_url: string;
    media_type: 'image' | 'video' | 'none';
    video_url: string;
    date: string;
    comments_count: number;
    category: string;
}

// ── Media block — swap this component if media display logic changes ──
function MediaBlock({ post }: { post: Post }) {
    if (post.media_type === 'video' && post.video_url) {
        const isYoutube = post.video_url.includes('youtube.com') || post.video_url.includes('youtu.be');
        const youtubeId = isYoutube
            ? post.video_url.split('v=')[1]?.split('&')[0] || post.video_url.split('/').pop()
            : null;

        return (
            <div className="relative w-full aspect-video overflow-hidden">
                {isYoutube ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        className="w-full h-full"
                        allowFullScreen
                    />
                ) : (
                    <video
                        src={post.video_url}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        onMouseEnter={e => (e.currentTarget as HTMLVideoElement).play()}
                        onMouseLeave={e => {
                            const v = e.currentTarget as HTMLVideoElement;
                            v.pause();
                            v.currentTime = 0;
                        }}
                    />
                )}

                {/* Video badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 px-3 py-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-[#F0E4AF]">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    <span className="text-[9px] tracking-widest uppercase text-[#F0E4AF]">Video</span>
                </div>
            </div>
        );
    }

    if (post.media_type === 'image' && post.image_url) {
        return (
            <div className="relative w-full h-56 overflow-hidden">
                <Image
                    src={post.image_url}
                    fill
                    alt={post.title}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
        );
    }

    // no media — show a decorative placeholder
    return (
        <div className="w-full h-20 flex items-center justify-center border-b border-[#F0E4AF]/10">
            <span className="font-cormorant italic text-2xl text-[#F0E4AF]/20">✦</span>
        </div>
    );
}

// ── Sidebar recent post thumbnail ──
function RecentThumb({ post }: { post: Post }) {
    if (post.media_type === 'video' && post.video_url) {
        const isYoutube = post.video_url.includes('youtube.com') || post.video_url.includes('youtu.be');
        const youtubeId = isYoutube
            ? post.video_url.split('v=')[1]?.split('&')[0] || post.video_url.split('/').pop()
            : null;

        return (
            <div className="relative w-16 h-12 shrink-0 overflow-hidden bg-[#F0E4AF]/5 flex items-center justify-center">
                {isYoutube ? (
                    <img
                        src={`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#9A9370]">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-16 h-12 shrink-0 overflow-hidden">
            <Image
                src={post.image_url || '/images/item-004.jpg'}
                fill
                alt={post.title}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
        </div>
    );
}

export default function BlogClient({ posts }: { posts: Post[] }) {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("");

    const filtered = posts.filter(p => {
        const matchesSearch =
            p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.excerpt?.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = activeCategory ? p.category === activeCategory : true;
        return matchesSearch && matchesCategory;
    });

    const categories = [...new Set(posts.map(p => p.category).filter(Boolean))];

    return (
        <main className="min-h-screen bg-[#191A11] text-[#F0E4AF]">

            {/* Page header */}
            <div className="px-6 md:px-16 py-24 border-b border-[#F0E4AF]/10">
                <h1 className="font-cormorant text-6xl lg:text-8xl leading-none">
                    The Journal
                </h1>
            </div>

            {/* Body */}
            <div className="flex max-w-6xl m-auto flex-col md:flex-row px-6 md:px-16 py-16 gap-16 items-start">

                {/* LEFT — blog list */}
                <div className="w-full md:w-[70%] grid grid-cols-1 gap-10">
                    {filtered.length === 0 ? (
                        <p className="text-[#9A9370] tracking-widest uppercase text-sm">
                            No posts found.
                        </p>
                    ) : (
                        filtered.map((post) => (
                            <a
                                key={post.id}
                                href={`/blog/${post.id}`}
                                className="group block border border-[#F0E4AF]/10 hover:border-[#F0E4AF]/30 transition-all duration-300"
                            >
                                {/* Dynamic media */}
                                <MediaBlock post={post} />

                                {/* Content */}
                                <div className="p-6 space-y-3">
                                    {post.category && (
                                        <p className="text-xs tracking-widest uppercase text-[#9A9370]">
                                            {post.category}
                                        </p>
                                    )}
                                    <h2 className="font-cormorant text-2xl lg:text-3xl leading-snug group-hover:text-white transition-colors duration-300">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-[#9A9370] line-clamp-2 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center gap-6 text-xs tracking-widest uppercase text-[#9A9370] pt-2 border-t border-[#F0E4AF]/10">
                                        <span className="pt-3">
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </span>
                                        <span className="flex items-center gap-2 pt-3">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                            </svg>
                                            {post.comments_count} comments
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))
                    )}
                </div>

                {/* RIGHT — sticky sidebar */}
                <div className="w-full md:w-[30%] md:sticky md:top-24 space-y-10">

                    {/* Search */}
                    <div className="space-y-3">
                        <p className="text-xs tracking-widest uppercase text-[#9A9370]">Search</p>
                        <div className="relative">
                            <input
                                type="text"
                                value={search}
                                onChange={e => {
                                    setSearch(e.target.value);
                                    setActiveCategory("");
                                }}
                                placeholder="Search posts..."
                                className="w-full bg-transparent border border-[#F0E4AF]/20 px-4 py-3 text-sm text-[#F0E4AF] placeholder:text-[#9A9370] focus:outline-none focus:border-[#F0E4AF]/60 transition-colors duration-300"
                            />
                            <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9A9370]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                            </svg>
                        </div>
                    </div>

                    {/* Categories */}
                    {categories.length > 0 && (
                        <div className="space-y-3">
                            <p className="text-xs tracking-widest uppercase text-[#9A9370]">Categories</p>
                            <div className="space-y-0">
                                {categories.map((cat, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setActiveCategory(cat === activeCategory ? "" : cat);
                                            setSearch("");
                                        }}
                                        className={`group flex items-center justify-between w-full border-b border-[#F0E4AF]/10 py-3 text-sm tracking-wide transition-colors duration-200
                                            ${activeCategory === cat ? "text-white" : "text-[#9A9370] hover:text-white"}
                                        `}
                                    >
                                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                                            {cat}
                                        </span>
                                        <span className="group-hover:text-[#F0E4AF] transition-colors duration-300">
                                            &#8594;
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Recent posts */}
                    <div className="space-y-3">
                        <p className="text-xs tracking-widest uppercase text-[#9A9370]">Recent Posts</p>
                        <div className="space-y-4">
                            {posts.slice(0, 4).map(post => (
                                <a
                                    key={post.id}
                                    href={`/blog/${post.id}`}
                                    className="group flex gap-3 items-start"
                                >
                                    <RecentThumb post={post} />
                                    <div>
                                        <p className="text-sm font-cormorant italic leading-snug group-hover:text-white transition-colors duration-200">
                                            {post.title}
                                        </p>
                                        <p className="text-xs text-[#9A9370] mt-1">
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
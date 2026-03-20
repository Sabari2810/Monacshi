"use client";
import { useEffect, useState } from "react";

interface Comment {
    id: string;
    name: string;
    content: string;
    created_at: string;
}

export default function Comments({ postId }: { postId: string }) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', content: '' });

    useEffect(() => {
        fetch(`/api/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => {
                setComments(Array.isArray(data) ? data : []);
                setLoading(false);
            });
    }, [postId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        const res = await fetch('/api/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ postId, ...form }),
        });

        if (res.ok) {
            setSubmitted(true);
            setForm({ name: '', email: '', content: '' });
        }

        setSubmitting(false);
    };

    return (
        <div className="mt-16 md:mt-20 border-t border-[#F0E4AF]/10 pt-12 md:pt-16">

            {/* Heading */}
            <h3 className="font-cormorant text-2xl md:text-3xl mb-8 md:mb-10">
                {loading ? 'Comments' : `${comments.length} ${comments.length === 1 ? 'Comment' : 'Comments'}`}
            </h3>

            {/* Comments list */}
            {loading ? (
                <p className="text-sm text-[#9A9370] tracking-widest uppercase animate-pulse mb-10">
                    Loading comments...
                </p>
            ) : comments.length === 0 ? (
                <p className="text-sm text-[#9A9370] tracking-widest uppercase mb-12">
                    No comments yet. Be the first!
                </p>
            ) : (
                <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
                    {comments.map(comment => (
                        <div key={comment.id} className="border-b border-[#F0E4AF]/10 pb-6 md:pb-8">
                            <div className="flex items-center gap-3 md:gap-4 mb-3">
                                {/* Avatar */}
                                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-[#F0E4AF]/20 flex-shrink-0 flex items-center justify-center text-sm font-cormorant text-[#F0E4AF]">
                                    {comment.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <p className="text-sm text-[#F0E4AF] tracking-wide">
                                        {comment.name}
                                    </p>
                                    <p className="text-xs text-[#9A9370]">
                                        {new Date(comment.created_at).toLocaleDateString('en-US', {
                                            month: 'long', day: 'numeric', year: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-[#9A9370] leading-relaxed ml-11 md:ml-13">
                                {comment.content}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* Comment form */}
            <div>
                <h4 className="font-cormorant text-xl md:text-2xl mb-6 md:mb-8">
                    Leave a comment
                </h4>

                {submitted ? (
                    <div className="border border-[#F0E4AF]/20 p-6">
                        <p className="text-sm tracking-widest uppercase text-[#9A9370]">
                            ✦ Thank you! Your comment is awaiting approval.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs tracking-widest uppercase text-[#9A9370]">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                    className="w-full bg-transparent border border-[#F0E4AF]/20 px-4 py-3 text-sm text-[#F0E4AF] placeholder:text-[#9A9370]/40 focus:outline-none focus:border-[#F0E4AF]/60 transition-colors duration-300"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs tracking-widest uppercase text-[#9A9370]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                    className="w-full bg-transparent border border-[#F0E4AF]/20 px-4 py-3 text-sm text-[#F0E4AF] placeholder:text-[#9A9370]/40 focus:outline-none focus:border-[#F0E4AF]/60 transition-colors duration-300"
                                    placeholder="your@email.com (not published)"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs tracking-widest uppercase text-[#9A9370]">
                                Comment *
                            </label>
                            <textarea
                                required
                                rows={5}
                                value={form.content}
                                onChange={e => setForm({ ...form, content: e.target.value })}
                                className="w-full bg-transparent border border-[#F0E4AF]/20 px-4 py-3 text-sm text-[#F0E4AF] placeholder:text-[#9A9370]/40 focus:outline-none focus:border-[#F0E4AF]/60 transition-colors duration-300 resize-none"
                                placeholder="Share your thoughts..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full sm:w-auto border cursor-pointer border-[#F0E4AF] text-[#F0E4AF] hover:bg-[#F0E4AF] hover:text-[#191A11] px-10 py-3 text-sm tracking-widest uppercase transition-all duration-300 disabled:opacity-40"
                        >
                            {submitting ? 'Submitting...' : 'Post Comment'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
"use client";
import { useState } from "react";
import Image from "next/image";

interface ContactSectionProps {
    theme?: 'dark' | 'light';
}

export default function ContactSection({ theme = 'dark' }: ContactSectionProps) {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const isDark = theme === 'dark';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            setSubmitted(true);
            setForm({ name: '', email: '', phone: '', message: '' });
        } else {
            setError('Something went wrong. Please try again.');
        }

        setSubmitting(false);
    };

    return (
        <section className={`relative w-full ${isDark ? 'bg-[#191A11]' : 'bg-[#F5F0E8]'}`}>

            {/* Dark version bg image */}
            {isDark && (
                <>
                    <Image
                        src="/images/museum_home_texture2.jpg"
                        fill
                        alt=""
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-[#191A11]/60" />
                </>
            )}

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-150">

                {/* Left — image */}
                <div className="relative min-h-75 md:min-h-full overflow-hidden">
                    <Image
                        src="/images/item-004.jpg"
                        fill
                        alt="Contact"
                        className="object-cover"
                    />
                    {/* Overlay */}
                    <div className={`absolute inset-0 ${isDark ? 'bg-[#191A11]/30' : 'bg-[#F5F0E8]/10'}`} />
                </div>

                {/* Right — form */}
                <div className={`flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 ${isDark ? 'text-[#F0E4AF]' : 'text-[#191A11]'}`}>

                    {/* Labels */}
                    <p className={`text-xs tracking-widest uppercase mb-3 ${isDark ? 'text-[#9A9370]' : 'text-[#9A9370]'}`}>
                        Contact Us
                    </p>
                    <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl leading-none mb-10">
                        Have questions? <br />
                        <span className="italic">Get in touch!</span>
                    </h2>

                    {submitted ? (
                        <div className={`border p-6 ${isDark ? 'border-[#F0E4AF]/20 text-[#9A9370]' : 'border-[#191A11]/20 text-[#9A9370]'}`}>
                            <p className="text-sm tracking-widest uppercase">
                                ✦ Thank you! We will get back to you soon.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Name + Email */}
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
                                        placeholder="Your name"
                                        className={`w-full bg-transparent px-4 py-3 text-sm placeholder:text-[#9A9370]/40 focus:outline-none transition-colors duration-300
                                            ${isDark
                                                ? 'border border-[#F0E4AF]/20 text-[#F0E4AF] focus:border-[#F0E4AF]/60'
                                                : 'border border-[#191A11]/20 text-[#191A11] focus:border-[#191A11]/60'
                                            }`}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs tracking-widest uppercase text-[#9A9370]">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={e => setForm({ ...form, email: e.target.value })}
                                        placeholder="your@email.com"
                                        className={`w-full bg-transparent px-4 py-3 text-sm placeholder:text-[#9A9370]/40 focus:outline-none transition-colors duration-300
                                            ${isDark
                                                ? 'border border-[#F0E4AF]/20 text-[#F0E4AF] focus:border-[#F0E4AF]/60'
                                                : 'border border-[#191A11]/20 text-[#191A11] focus:border-[#191A11]/60'
                                            }`}
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <label className="text-xs tracking-widest uppercase text-[#9A9370]">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={e => setForm({ ...form, phone: e.target.value })}
                                    placeholder="+1 234 567 890"
                                    className={`w-full bg-transparent px-4 py-3 text-sm placeholder:text-[#9A9370]/40 focus:outline-none transition-colors duration-300
                                        ${isDark
                                            ? 'border border-[#F0E4AF]/20 text-[#F0E4AF] focus:border-[#F0E4AF]/60'
                                            : 'border border-[#191A11]/20 text-[#191A11] focus:border-[#191A11]/60'
                                        }`}
                                />
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-xs tracking-widest uppercase text-[#9A9370]">
                                    Message *
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={form.message}
                                    onChange={e => setForm({ ...form, message: e.target.value })}
                                    placeholder="Tell us about your project..."
                                    className={`w-full bg-transparent px-4 py-3 text-sm placeholder:text-[#9A9370]/40 focus:outline-none transition-colors duration-300 resize-none
                                        ${isDark
                                            ? 'border border-[#F0E4AF]/20 text-[#F0E4AF] focus:border-[#F0E4AF]/60'
                                            : 'border border-[#191A11]/20 text-[#191A11] focus:border-[#191A11]/60'
                                        }`}
                                />
                            </div>

                            {error && (
                                <p className="text-xs text-red-400 tracking-widest uppercase">
                                    {error}
                                </p>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={submitting}
                                className={`w-full sm:w-auto px-10 py-3 text-sm tracking-widest uppercase transition-all duration-300 disabled:opacity-40 cursor-pointer
                                    ${isDark
                                        ? 'border border-[#F0E4AF] text-[#F0E4AF] hover:bg-[#F0E4AF] hover:text-[#191A11]'
                                        : 'border border-[#191A11] text-[#191A11] hover:bg-[#191A11] hover:text-[#F5F0E8]'
                                    }`}
                            >
                                {submitting ? 'Sending...' : 'Get in Touch'}
                            </button>

                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
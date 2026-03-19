"use client";
import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function VideoSection() {
    const [open, setOpen] = useState(false);
    const videoSection = useScrollAnimation();

    return (
        <section ref={videoSection} className="relative w-full h-[60vw] md:h-screen  overflow-hidden">
            {/* Background image */}
            <Image
                src="/images/item-004.jpg"
                fill
                className="object-cover"
                alt=""
                priority
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Play button */}
            <button
                onClick={() => setOpen(true)}
                className="absolute inset-0 flex items-center justify-center group"
            >
                <div className="relative flex items-center justify-center">
                    {/* Button circle */}
                    <div className="relative font-sans uppercase w-20 h-20 lg:w-36 lg:h-36 rounded-full border border-[#9A9370] cursor-pointer flex items-center justify-center transition-all duration-300">
                        {/* Play triangle */}
                        Play
                    </div>
                </div>
            </button>

            {/* Video popup */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="relative w-full max-w-4xl aspect-video px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute -top-10 right-4 text-white text-sm tracking-widest uppercase hover:opacity-60 transition-opacity"
                        >
                            Close ✕
                        </button>

                        {/* Video */}
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
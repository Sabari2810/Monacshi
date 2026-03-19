import Image from 'next/image'
import React from 'react'

export default function TapestrySection() {
    const text = "ICONIC ARTIFACT AND THEIR STORIES ✦ "

    const rows = [
        { delay: "0s" },
    ]

    return (
        <section className="py-20 relative overflow-hidden">
            <Image
                src="/images/museum_home_texture2.jpg"
                alt="background"
                fill
                className="object-cover overflow-hidden"
                priority
            />
            {/* Big heading */}
            <p className="text-4xl px-6 lg:px-16 relative z-50 sm:text-6xl md:text-7xl lg:text-9xl xl:text-9xl font-cormorant text-center lg:text-left lg:leading-none">
                <span className="block">A TAPESTRY</span>
                <span className="block lg:text-right">
                    <span className='italic'>
                        of
                    </span>
                    <span> </span>
                    CIVILIZATION
                </span>
            </p>

            {/* Running marquee rows */}
            <div className="overflow-hidden">
                <div className="overflow-hidden">
                    <div
                        className="flex gap-8 w-max"
                        style={{
                            animation: `marquee 250s linear infinite`,
                            animationDelay: "0s",
                        }}
                    >
                        {Array.from({ length: 20 }).map((_, j) => (
                            <span key={j} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-widest uppercase whitespace-nowrap">
                                ICONIC ARTIFACT AND THEIR STORIES
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
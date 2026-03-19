"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroText() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const letters = gsap.utils.toArray<HTMLElement>(
            containerRef.current?.querySelectorAll(".letter") ?? []
        );

        const isMobile = window.innerWidth < 768;

        gsap.fromTo(letters,
            { y: isMobile ? "200%" : "130%" },
            {
                y: "0%",
                duration: 1.5,
                ease: "power4.out",
                stagger: 0.08,
                force3D: true,
            }
        );
    }, []);

    const splitLetters = (text: string, extraClass = "") =>
        text.split("").map((char, i) => (
            <span
                key={i}
                className="inline-block"
                style={{
                    overflow: "clip",
                    overflowClipMargin: "30px",
                    padding: "0 1px 8px",
                    marginBottom: "-8px"
                }}
            >
                <span
                    className={`letter inline-block ${extraClass}`}
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            </span>
        ));

    return (
        <div ref={containerRef}>
            <p className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-9xl
                font-[open-sans] leading-none
            ">
                <span className="block">
                    {splitLetters("WONDER")}
                    <span className="italic">
                        {splitLetters(" for", "italic")}
                    </span>
                </span>
                <span className="flex lg:justify-end xl:justify-start">
                    {splitLetters("ART & HISTORY")}
                </span>
            </p>
        </div>
    );
}
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroText() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const letters = gsap.utils.toArray<HTMLElement>(
            containerRef.current?.querySelectorAll(".letter") ?? []
        );
        gsap.fromTo(letters,
            { y: "130%" },
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
                style={{ overflow: "clip", overflowClipMargin: "30px", padding: "0 4px 12px", marginBottom: "-12px" }}
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
            <p className="text-9xl font-[open-sans] leading-none">
                <span className="block">
                    {splitLetters("WONDER")}
                    <span className="italic">
                        {splitLetters(" for", "italic")}
                    </span>
                </span>
                <span className="flex justify-end">
                    {splitLetters("ART & HISTORY")}
                </span>
            </p>
        </div>
    );
}
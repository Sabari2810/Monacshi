"use client";
import { useState } from "react";

export interface NavSubItem {
    label: string;
    link: string;
}

export interface NavItemProps {
    label: string;
    items: NavSubItem[];
}

export default function NavItem({ label, items }: NavItemProps) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {/* Label with underline */}
            <div className="relative cursor-pointer py-2">
                <span className="text-sm tracking-widest uppercase">{label}</span>
                <span
                    className="absolute bottom-0 left-0 h-px bg-current transition-all duration-500 ease-in-out"
                    style={{ width: open ? "100%" : "0%" }}
                />
            </div>

            {/* Invisible bridge */}
            {items && items.length > 0 && (
                <div className="absolute top-full left-0 w-full h-2" />
            )}

            {/* Dropdown */}
            {items && items.length > 0 && (
                <div
                    className={`absolute top-[calc(100%+8px)] left-0 min-w-45 bg-[#191A11] z-50 overflow-hidden transition-all duration-500 ease-in-out
            ${open ? "max-h-100 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
          `}
                >
                    {items.map((item, i) => (
                        <a
                            key={i}
                            href={item.link}
                            className="group relative block px-5 py-3 text-sm tracking-wide text-[#9A9370] hover:text-[#F0E4AF] transition-colors duration-200"
                            style={{
                                transitionDelay: open ? `${i * 60}ms` : "0ms",
                                transform: open ? "translateY(0)" : "translateY(-8px)",
                                opacity: open ? 1 : 0,
                                transition: `transform 0.4s ease ${i * 60}ms, opacity 0.4s ease ${i * 60}ms, color 0.2s ease`,
                            }}
                        >
                            <span className="w-fit flex flex-col transition-transform duration-300 ease-out group-hover:translate-x-2">
                                <p>
                                    {item.label}
                                </p>
                                <span className="absolute h-px left-0 bottom-[-.5] bg-[#F0E4AF] w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
                            </span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
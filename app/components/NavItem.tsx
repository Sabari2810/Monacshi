"use client";
import { useState } from "react";

interface NavItemProps {
    label: string;
    items?: string[];
}

export default function NavItem({ label, items }: NavItemProps) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <div className="relative cursor-pointer py-2 group">
                <span className="text-lg tracking-widest ">{label}</span>

                <span
                    className="absolute bottom-0 left-0 h-px bg-current transition-all duration-500 ease-in-out"
                    style={{ width: open ? "100%" : "0%" }}
                />
            </div>

            {items && items.length > 0 && (
                <div className="absolute top-full left-0 w-full h-10" />
            )}

            {items && items.length > 0 && (
                <div
                    className={`absolute top-full mt-10 bg-[#393A2C] hover:bg-[#393A2C] left-0 min-w-45
            transition-all duration-300 ease-in
            ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
          `}
                >
                    {items.map((item, i) => (
                        <a
                            key={i}
                            href="#"
                            className="group w-fit relative block px-5 py-3 text-sm tracking-wide text-[#9A9370] hover:text-[#F0E4AF] transition-colors duration-200"
                        >
                            <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-2" >
                                {item}

                            </span>
                            <span className="absolute bottom-2 h-px left-5 bg-[#F0E4AF] group-hover:translate-x-2 w-0 transition-all duration-300 ease-in-out group-hover:w-[calc(100%-40px)]" />
                        </a>
                    ))
                    }
                </div >
            )}
        </div >
    );
}
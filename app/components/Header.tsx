"use client";
import { useEffect, useState } from 'react'
import NavItem, { NavItemProps } from './NavItem'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = [
        {
            title: "Outfits",
            items: [{
                label: "abc",
                link: "abc"
            }]
        },
        {
            title: "Custom Outfits",
            items: [{
                label: "abc",
                link: "abc"
            }]
        },
        {
            title: "Blog",
        },
    ]

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const MobileNavItem = (item: NavItemProps) => {
        const [open, setOpen] = useState(false);

        return (
            <div>
                <button
                    className="group flex items-center justify-between w-full py-4 text-lg font-[open-sans] text-[#F0E4AF] tracking-widest uppercase"
                    onClick={() => setOpen(!open)}
                >
                    { item.items &&
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                            {item.label}
                        </span>
                    }
                    {
                        item.items === undefined && <a href={item.label.toLowerCase()}>{item.label}</a>
                    }
                    <span className={`transition-transform duration-300 text-[#F0E4AF]/50 ${open ? "rotate-90" : ""}`}>
                        &#8594;
                    </span>
                </button>

                {/* Sub items */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                    {item.items && item.items.map((subItem, i) => (
                        <a
                            key={i}
                            href={subItem.link}
                            className="flex items-center justify-between py-3 pl-4 text-sm tracking-widest uppercase text-[#9A9370] hover:text-[#F0E4AF] transition-colors duration-200"
                            style={{
                                transitionDelay: open ? `${i * 60}ms` : "0ms",
                                transform: open ? "translateY(0)" : "translateY(-8px)",
                                opacity: open ? 1 : 0,
                                transition: `transform 0.4s ease ${i * 60}ms, opacity 0.4s ease ${i * 60}ms, color 0.2s ease`,
                            }}
                        >
                            <span>{subItem.label}</span>
                            <span className="text-[#F0E4AF]/30 text-xs">&#8594;</span>
                        </a>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className={`flex font-[open-sans] text-[#F0E4AF] fixed top-0 left-0 z-50 flex-row w-full items-center justify-between px-6 md:px-20 py-6 transition-all duration-300
                ${scrolled ? "bg-[#191A11] shadow-md" : "bg-transparent"}
            `}>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex max-w-xl justify-between items-center w-full'>
                        <div className='text-3xl md:text-5xl'>Monique</div>

                        {/* Desktop nav */}
                        <div className='hidden md:flex cursor-pointer items-center space-x-6'>
                            {
                                navItems.map((item, i) => (
                                    <NavItem label={item.title} key={i} items={item.items} />
                                ))
                            }
                        </div>
                    </div>

                    {/* Desktop button */}
                    <a href='/contact' className='hidden md:block border-2 border-[#F0E4AF] text-[#F0E4AF] hover:bg-[#F0E4AF] 
                        hover:text-[#27281B] border-solid px-8 py-2 cursor-pointer transition ease-in-out 
                        font-[open-sans] font-semibold text-lg'>
                        Let's Talk
                    </a>
                    {/* Mobile hamburger */}
                    <button
                        className='relative flex md:hidden items-center justify-center w-10 h-10 cursor-pointer'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {/* Round animation on close */}
                        <span className={`absolute inset-0 rounded-full border border-[#F0E4AF]/50 transition-all duration-500 ${menuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
                        <span className={`block w-6 h-[1.5px] bg-[#F0E4AF] absolute transition-all duration-300 ${menuOpen ? "rotate-45" : "-translate-y-2"}`} />
                        <span className={`block w-6 h-[1.5px] bg-[#F0E4AF] absolute transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-[1.5px] bg-[#F0E4AF] absolute transition-all duration-300 ${menuOpen ? "-rotate-45" : "translate-y-2"}`} />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-[#191A11] z-40 flex flex-col justify-star justify-center px-10 gap-4 transition-all duration-500 md:hidden
    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
`}>
                {navItems.map((item, i) => (
                    <div key={i} className="border-b border-[#F0E4AF]/20">
                        <MobileNavItem label={item.title} items={item.items} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Header
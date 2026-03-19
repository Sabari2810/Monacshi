"use client";
import React, { useEffect, useState } from 'react'
import NavItem from './NavItem'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`flex font-[open-sans] fixed top-0 left-0 z-50 flex-row w-full items-center justify-between px-10 py-4 transition-all duration-300
  ${scrolled ? "bg-[#191A11] shadow-md" : "bg-transparent"}
`}>
            <div className='flex items-center max-w-xl justify-between w-full'>
                <div className='text-5xl'>Monacshi</div>
                <div className='flex cursor-pointer items-center space-x-6'>
                    <NavItem label='Outfits' items={["abc", "fhgfhg", "hgfhgfhg"]} />
                    <NavItem label='Custom Outfits' items={["abc", "fhgfhg", "hgfhgfhg"]} />
                    <NavItem label='Blog' items={["abc", "fhgfhg", "hgfhgfhg"]} />
                </div>
            </div>
            <div>
                <button className='border-2 border-[#F0E4AF] text-[#F0E4AF] hover:bg-[#F0E4AF] 
          hover:text-[#27281B] border-solid px-10 py-2 cursor-pointer transition ease-in-out 
          font-[open-sans] font-semibold text-lg'>Let's Talk</button>
            </div>
        </div>
    )
}

export default Header
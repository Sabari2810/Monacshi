import React from 'react'
import NavItem from './NavItem'

const Header = () => {
    return (
        <div className='flex font-[open-sans] flex-row w-full items-center justify-between'>
            <div className='flex items-center max-w-xl justify-between w-full'>
                <div className='text-5xl'>Monacshi</div>
                <div className='flex cursor-pointer items-center space-x-6'>
                    <NavItem label='Outfits' items={["abc", "fhgfhg", "hgfhgfhg"]}/>
                    <NavItem label='Custom Outfits' items={["abc", "fhgfhg", "hgfhgfhg"]}/>
                    <NavItem label='Blog' items={["abc", "fhgfhg", "hgfhgfhg"]}/>
                </div>
            </div>
            <div>
                <button className='border-2 border-[#F0E4AF] text-[#F0E4AF] hover:bg-[#F0E4AF] 
            hover:text-[#27281B]
            border-solid px-10 py-2 cursor-pointer transition ease-in-out font-[open-sans] font-semibold text-lg'>Let's Talk</button>
            </div>
        </div>
    )
}

export default Header
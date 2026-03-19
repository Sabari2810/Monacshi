import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-row w-full items-center justify-between'>
            <div className='text-5xl'>Monacshi</div>
            <div className='flex items-center space-x-2'>
                <p>Home</p>
                <p>Blog</p>
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
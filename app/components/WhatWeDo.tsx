import Image from 'next/image'
import React from 'react'

const WhatWeDo = () => {
    return (
        <section className="h-screen w-full relative px-6 lg:px-28 flex flex-col overflow-hidden justify-between py-16">
            <Image
                src="/images/museum_home_texture2.jpg"
                alt="background"
                fill
                className="object-cover overflow-hidden"
                priority
            />
            <div className='flex relative z-50 flex-col space-y-6 lg:space-y-10'>
                <div className='space-y-2'>
                    <p className='uppercase text-lg'>WHAT WE DO</p>
                    <p className='text-3xl lg:text-6xl'>We Inspire to Create <br className='hidden lg:block' />and Experience Art</p>
                </div>
                <div className='flex flex-col pt-2 space-y-8 lg:flex-row text-xl max-w-7xl w-full justify-between'>
                    <p className='max-w-lg text-[#9A9370]'>We do our best to implement your ideas into the project to make it successful and profitable.</p>
                    <div className='items-center flex lg:hidden gap-3 w-fit'>
                        <div className='rounded-full border-2 w-12 h-12 flex items-center justify-center shrink-0'>
                            M
                        </div>
                        <div>
                            <p>Monica Balasubramanian</p>
                            <p className='text-[#9A9370]'>CEO Director</p>
                        </div>
                    </div>
                    <div className='flex flex-col space-x-2 text-sm lg:flex-row max-w-xl'>
                        <p className="first-letter:text-6xl font-[sans-serif] text-[#9A9370] first-letter:text-[#F0E4AF] first-letter:font-serif first-letter:float-left 
                        first-letter:mr-2 first-letter:leading-none">
                            Qnsectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, eiusm od tempor ut labore.
                        </p>
                        <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do od tempor ut labore.</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row max-w-7xl w-full lg:text-2xl justify-between'>
                    <div className='items-center lg:flex hidden gap-3 w-fit'>
                        <div className='rounded-full border-2 w-12 h-12 flex items-center justify-center shrink-0'>
                            M
                        </div>
                        <div>
                            <p>Monica Balasubramanian</p>
                            <p className='text-[#9A9370]'>CEO Director</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row max-w-xl text-[#9A9370]'>
                        <p>Qnsectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, eiusm od tempor ut labore.</p>
                        <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do od tempor ut labore.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo
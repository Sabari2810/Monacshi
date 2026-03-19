import Image from 'next/image'
import React from 'react'

const WhatWeDo = () => {
    return (
        <section className="h-screen w-full relative px-28 flex flex-col overflow-hidden justify-between py-16">
            <Image
                src="/images/museum_home_texture2.jpg"
                alt="background"
                fill
                className="object-cover overflow-hidden"
                priority
            />
            <div className='flex relative z-50 flex-col space-y-10'>
                <div className='space-y-2'>
                    <p className='uppercase text-lg'>WHAT WE DO</p>
                    <p className='text-6xl'>We Inspire to Create <br />and Experience Art</p>
                </div>
                <div className='flex text-2xl max-w-7xl w-full justify-between'>
                    <p className='max-w-lg text-[#9A9370]'>We do our best to implement your ideas into the project to make it successful and profitable.</p>
                    <div className='flex max-w-xl text-[#9A9370]'>
                        <p><span className='text-4xl text-[#F0E4AF]'>Q</span>nsectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, eiusm od tempor ut labore.</p>
                        <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do od tempor ut labore.</p>
                    </div>
                </div>
                <div className='flex max-w-7xl w-full text-2xl justify-between'>
                    <div className='flex items-center gap-3 w-fit'>
                        <div className='rounded-full border-2 w-12 h-12 flex items-center justify-center flex-shrink-0'>
                            M
                        </div>
                        <div>
                            <p>Monica Balasubramanian</p>
                            <p className='text-[#9A9370]'>CEO Director</p>
                        </div>
                    </div>
                    <div className='flex max-w-xl text-[#9A9370]'>
                        <p>Qnsectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, eiusm od tempor ut labore.</p>
                        <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do od tempor ut labore.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo
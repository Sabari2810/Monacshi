
'use client'
import Image from "next/image"
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const WhatWeDov2 = () => {
    let firstSection = useScrollAnimation();
    let secondSection = useScrollAnimation();
    let thirdSection = useScrollAnimation();
    let fourthSection = useScrollAnimation();
    let fifthSection = useScrollAnimation();
    let sixthSection = useScrollAnimation();
    let seventhSection = useScrollAnimation();
    return (
        <section className="relative px-6 lg:px-28 flex flex-col overflow-hidden justify-between py-16">
            <Image
                src="/images/museum_home_texture2.jpg"
                alt="background"
                fill
                className="object-cover overflow-hidden"
                priority
            />
            <div ref={firstSection} className="w-full relative z-50">
                <div className="space-y-10">
                    <div className="space-y-2">
                        <p className='uppercase font-sans text-lg'>WHAT WE DO</p>
                        <p className='text-3xl lg:text-6xl'>We Inspire to Create <br className='hidden lg:block' />and Experience Art</p>
                    </div>
                </div>
            </div>
            <div className='lg:grid space-y-5 lg:space-y-0 lg:grid-cols-4 lg:gap-6 relative h-full pt-5 lg:pt-10 z-50'>
                <div ref={secondSection} className='flex flex-col lg:col-span-2 items-start gap-5 lg:gap-10 w-fit'>
                    <p className='text-xl lg:text-2xl text-[#9A9370]'>We do our best to implement your ideas into the <br className="hidden lg:block" />project to make it successful and profitable.</p>
                    <div className="flex items-center space-x-4">
                        <div className='rounded-full border-2 w-20 h-20 flex items-center justify-center shrink-0'>
                            M
                        </div>
                        <div>
                            <p className="text-2xl">Monica Balasubramanian</p>
                            <p className='text-[#9A9370]'>CEO Director</p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2 text-[#9A9370]">
                    <div className="grid justify-end lg:grid-cols-2 gap-5">
                        <div ref={thirdSection} className="flex flex-col lg:leading-normal leading-none text-lg space-y-5 lg:space-y-10 lg:col-span-1 items h-full">
                            <p className="first-letter:text-5xl first-letter:text-[#F0E4AF] first-letter:float-left">Qnsectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, eiusm od tempor ut labore.</p>
                            <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor ut labore sed adipiscing  do eiusm od tempor ut sed do eiusm.</p>
                        </div>
                        <div ref={fourthSection} className="flex lg:leading-normal leading-none flex-col text-lg space-y-5 lg:space-y-10 lg:col-span-1 items h-full">
                            <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do od tempor ut labore.</p>
                            <p>Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid relative lg:gap-6 z-50 justify-between pt-8 lg:pt-16 lg:grid-cols-4">
                <div ref={fifthSection} className="col-span-2 w-full relative items-start justify-start h-125">
                    <Image
                        src={"/images/third-section-first-image.jpg"}
                        fill
                        className="object-contain object-left w-fit h-full left-0"
                        priority
                        alt=""
                    />
                </div>
                <div className="col-span-2">
                    <div className="flex flex-col items-center">
                        <div ref={sixthSection} className="lg:pb-20">
                            <div className="space-y-2">
                                <p className='uppercase font-sans text-lg'>WELCOME TO MONIQUE</p>
                                <p className='text-3xl lg:text-6xl'>Our Modern Museums <br className='hidden lg:block' />Are Open for Everyone</p>
                                <p className="text-[#9A9370]">Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.</p>
                            </div>
                        </div>
                        <div ref={seventhSection} className="relative w-full lg:mt-10 h-100">
                            <Image
                                src={"/images/third-section-second-image.jpg"}
                                fill
                                className="object-contain object-top pt-6 lg:pt-0 lg:object-left right-0"
                                priority
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDov2

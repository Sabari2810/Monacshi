import Image from 'next/image'
import React from 'react'
import Header from './Header'
import HeroText from './HeroText'

const HeroSection = () => {
    return (
        <section className="h-screen w-full relative px-16 flex flex-col overflow-hidden justify-between py-4">
            <Image
                src="/images/item-004.jpg"
                alt="background"
                fill
                className="object-cover animate-zoom overflow-hidden"
                priority
            />
            <div className="relative z-60 pt-10">
                <Header />
            </div>
            <div className="relative z-10">
                <HeroText />
            </div>

            <div className="flex relative z-50 items-center justify-between">
                <div className="max-w-lg space-y-2">
                    <p className="text-2xl">
                        EXPLORING ART'S ROLE <br /> IN SHAPING SOCIETY
                    </p>
                    <p>
                        Tempore expedita, libero a, adipisci eligendi quia, at consectetur aut quod exercitationem corrupti non? Eligendi fuga reprehenderit labore eveniet dolor nisi nemo.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
import ContactSection from '@/app/components/ContactSection'

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#F5F0E8]">

            {/* Header — same style as journal */}
            <div className="bg-[#191A11] px-6 md:px-16 py-24 border-b border-[#F0E4AF]/10">
                <p className="text-sm tracking-widest uppercase text-[#9A9370] mb-4">
                    Let's Talk
                </p>
                <h1 className="font-cormorant text-6xl lg:text-8xl leading-none text-[#F0E4AF]">
                    Contact Us
                </h1>
            </div>

            <ContactSection theme="light" />

        </main>
    )
}
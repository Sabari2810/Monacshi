import Image from "next/image";
import Header from "./components/Header";
import HeroText from "./components/HeroText";

export default function Home() {
  return (
    <div className="font-[open-sans] text-[#F0E4AF]">
      <section className="h-screen w-full relative px-14 flex flex-col overflow-hidden justify-between py-10">
        <Image
          src="/images/item-004.jpg"
          alt="background"
          fill
          className="object-cover animate-zoom overflow-hidden"
          priority
        />
        <div className="relative z-50">
          <Header />
        </div>
        <div className="relative z-10">
          <HeroText />
        </div>

        <div className="flex relative z-50 items-center justify-between">
          <div className="max-w-xl space-y-2">
            <p className="text-2xl">
              EXPLORING ART'S ROLE IN SHAPING SOCIETY
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore expedita, libero a, adipisci eligendi quia, at consectetur aut quod exercitationem corrupti non? Eligendi fuga reprehenderit labore eveniet dolor nisi nemo.
            </p>
          </div>
          <div>

          </div>
        </div>
      </section>
    </div>
  );
}

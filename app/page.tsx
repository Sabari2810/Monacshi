import Image from "next/image";
import Header from "./components/Header";
import HeroText from "./components/HeroText";

export default function Home() {
  return (
    <div className="font-[open-sans] text-[#F0E4AF] px-14">
      <section className="h-screen w-full flex flex-col justify-between py-10">
        <Header />
        <HeroText/>
       
        <div className="flex items-center justify-between">
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

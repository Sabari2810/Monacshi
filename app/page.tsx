import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
  return (
    <div className="font-[open-sans] text-[#F0E4AF]">
      <HeroSection />
      <WhatWeDo />
    </div>
  );
}

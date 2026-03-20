import { Tapestry } from "next/font/google";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/videoSection";
import WhatWeDov2 from "./components/WhatWeDov2";
import TapestrySection from "./components/TapestrySection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="font-[open-sans] text-[#F0E4AF]">
      <HeroSection />
      <WhatWeDov2 />
      <VideoSection />
      <TapestrySection />
      <ContactSection theme="dark" />
    </div>
  );
}

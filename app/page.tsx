import HeroSection from "./components/HeroSection";
import VideoSection from "./components/videoSection";
import WhatWeDov2 from "./components/WhatWeDov2";

export default function Home() {
  return (
    <div className="font-[open-sans] text-[#F0E4AF]">
      <HeroSection />
      <WhatWeDov2 />
      <VideoSection />
    </div>
  );
}

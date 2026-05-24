import Hero from "@/components/sections/Hero";
import Proof from "@/components/sections/Proof";
import WhatIDo from "@/components/sections/WhatIDo";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Proof />
      <WhatIDo />
      <Work />
      <About />
      <Contact />
    </main>
  );
}

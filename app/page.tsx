import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Proof from "@/components/sections/Proof";
import WhatIDo from "@/components/sections/WhatIDo";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { site } from "@/lib/content";
import { tokens } from "@/lib/typography";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <Proof />
        <WhatIDo />
        <Work />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-line py-10">
        <div className={`mx-auto flex max-w-content flex-col gap-2 px-6 md:flex-row md:items-center md:justify-between md:px-8 ${tokens.meta}`}>
          <span>{site.name}</span>
          <span>Product designer · Dallas, Texas</span>
        </div>
      </footer>
    </>
  );
}

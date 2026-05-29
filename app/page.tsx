import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Proof from "@/components/sections/Proof";
import WhatIDo from "@/components/sections/WhatIDo";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { footer } from "@/lib/content";
import { tokens } from "@/lib/typography";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-content px-6 pb-40 pt-24">
        <Hero />
        <Proof />
        <WhatIDo />
        <Work />
        <About />
        <Contact />
      </main>

      <footer
        className={`mx-auto mt-12 flex max-w-content items-center justify-between border-t border-line px-6 pb-14 pt-8 ${tokens.footer}`}
      >
        <span>{footer.left}</span>
        <span>
          <span className="text-accent">{footer.brand}</span>
          {footer.location}
        </span>
      </footer>
    </>
  );
}

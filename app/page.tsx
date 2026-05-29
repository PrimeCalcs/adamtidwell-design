import Image from "next/image";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Proof from "@/components/sections/Proof";
import WhatIDo from "@/components/sections/WhatIDo";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { footer, brand } from "@/lib/content";
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
        <a
          href={brand.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 text-inherit no-underline"
        >
          <Image
            src={brand.logo}
            alt={brand.logoAlt}
            width={22}
            height={22}
            className="block h-[22px] w-auto opacity-85"
          />
          <span>{footer.left}</span>
          <span className="pointer-events-none absolute bottom-full left-0 mb-2.5 translate-y-1 whitespace-nowrap font-mono text-[10.5px] uppercase tracking-label text-accent opacity-0 transition duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            {brand.tooltip}
          </span>
        </a>
        <span>
          <span className="text-accent">{footer.brand}</span>
          {footer.location}
        </span>
      </footer>
    </>
  );
}

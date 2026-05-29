import Image from "next/image";
import { site, brand } from "@/lib/content";
import { tokens } from "@/lib/typography";

export default function Nav() {
  return (
    <nav className="mx-auto flex max-w-content items-center justify-between px-6 pt-8">
      <a
        href={brand.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-block"
      >
        <Image
          src={brand.logo}
          alt={brand.logoAlt}
          width={36}
          height={36}
          priority
          className="block h-9 w-auto"
        />
        <span className="pointer-events-none absolute left-0 top-full mt-2.5 -translate-y-1 whitespace-nowrap font-mono text-[10.5px] uppercase tracking-label text-accent opacity-0 transition duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          {brand.tooltip}
        </span>
      </a>

      <span className={`flex items-center gap-2 ${tokens.nav}`}>
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-positive" />
        {site.availability}
      </span>
    </nav>
  );
}

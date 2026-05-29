import { site } from "@/lib/content";
import { tokens } from "@/lib/typography";

export default function Nav() {
  return (
    <nav className="mx-auto flex max-w-content items-center justify-between px-6 pt-8">
      <span className="text-[15px] font-medium text-[#0e0e0c]">{site.name}</span>

      <span className={`flex items-center gap-2 ${tokens.nav}`}>
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-positive" />
        {site.availability}
      </span>
    </nav>
  );
}

import { site } from "@/lib/content";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-8">
        <span className="text-sm font-medium text-foreground">{site.name}</span>
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-faint">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-positive"
          />
          {site.availability}
        </span>
      </div>
    </nav>
  );
}

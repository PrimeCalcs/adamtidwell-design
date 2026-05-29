import FadeIn from "@/components/ui/FadeIn";
import Eyebrow from "@/components/ui/Eyebrow";
import PhoneReel from "@/components/ui/PhoneReel";
import { workItems } from "@/lib/content";
import { preventWidows } from "@/lib/typography";

export default function Work() {
  return (
    <section className="mx-auto mt-24 max-w-content px-6 md:mt-32 md:px-8">
      <FadeIn>
        <Eyebrow as="h2">Selected work</Eyebrow>
      </FadeIn>

      <ul className="mt-10 space-y-16 md:space-y-24">
        {workItems.map((item, index) => (
          <li key={item.label}>
            <FadeIn delay={index * 0.08}>
              <figure className="grid grid-cols-1 items-start gap-8 md:grid-cols-[240px_1fr] md:gap-12">
                <div className="relative">
                  <PhoneReel
                    duration={item.duration}
                    platform={item.platform}
                    reelLabel={item.reelLabel}
                  />
                  <span className="mt-4 block text-center font-mono text-[11px] uppercase tracking-label text-faint md:text-left">
                    {item.label}
                  </span>
                </div>

                <figcaption className="max-w-prose space-y-4">
                  <p className="font-mono text-[11px] uppercase tracking-label text-faint">
                    {item.meta}
                  </p>
                  <h3 className="text-balance text-2xl font-medium leading-snug text-foreground md:text-[1.75rem]">
                    {preventWidows(item.headline)}
                  </h3>
                  <p className="text-pretty text-base leading-relaxed text-muted md:text-[1.0625rem] md:leading-7">
                    {preventWidows(item.context)}
                  </p>
                  <p className="border-l border-line pl-4 text-pretty text-base leading-relaxed text-foreground/80 md:text-[1.0625rem] md:leading-7">
                    {preventWidows(item.outcome)}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          </li>
        ))}
      </ul>
    </section>
  );
}

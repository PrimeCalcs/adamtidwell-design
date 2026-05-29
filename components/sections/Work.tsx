import FadeIn from "@/components/ui/FadeIn";
import Eyebrow from "@/components/ui/Eyebrow";
import PhoneReel from "@/components/ui/PhoneReel";
import { workItems } from "@/lib/content";
import { preventWidows, tokens } from "@/lib/typography";

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
                  <span className={`mt-4 block text-center md:text-left ${tokens.meta}`}>
                    {item.label}
                  </span>
                </div>

                <figcaption className="max-w-prose space-y-4">
                  <p className={tokens.meta}>{item.meta}</p>
                  <h3 className={tokens.headline}>
                    {preventWidows(item.headline)}
                  </h3>
                  <p className={`text-muted ${tokens.body}`}>
                    {preventWidows(item.context)}
                  </p>
                  <p className={`border-l border-line pl-4 text-foreground/80 ${tokens.body}`}>
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

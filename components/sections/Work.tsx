import FadeIn from "@/components/ui/FadeIn";
import Eyebrow from "@/components/ui/Eyebrow";
import PhoneReel from "@/components/ui/PhoneReel";
import { workItems } from "@/lib/content";
import { tokens, preventWidows } from "@/lib/typography";

export default function Work() {
  return (
    <div>
      <Eyebrow as="h2" className="mb-6 mt-16">
        Selected work
      </Eyebrow>

      {workItems.map((item, index) => (
        <FadeIn key={item.label} delay={index * 0.06}>
          <div className="mb-16 grid grid-cols-1 items-start gap-8 sm:grid-cols-[200px_1fr] sm:gap-10">
            <PhoneReel label={item.label} reelLabel={item.reelLabel} />

            <div>
              <div className={`mb-3 ${tokens.projMeta}`}>{item.meta}</div>
              <h3 className={`mb-3.5 ${tokens.projTitle}`}>
                {preventWidows(item.headline)}
              </h3>
              <p className={`mb-4 ${tokens.projBody}`}>
                {preventWidows(item.context)}
              </p>
              <p className={tokens.outcome}>{preventWidows(item.outcome)}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

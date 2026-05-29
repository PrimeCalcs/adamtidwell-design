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
              {item.status ? (
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <span className={tokens.projMeta}>{item.meta}</span>
                  <span className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-accent px-[11px] py-[5px] font-mono text-[10px] uppercase tracking-label text-background">
                    <span
                      aria-hidden
                      className="h-[5px] w-[5px] rounded-full bg-[#5EC98A] shadow-[0_0_0_3px_rgba(94,201,138,0.25)]"
                    />
                    {item.status}
                  </span>
                </div>
              ) : (
                <div className={`mb-3 ${tokens.projMeta}`}>{item.meta}</div>
              )}
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

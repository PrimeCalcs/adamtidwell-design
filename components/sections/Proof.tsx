import FadeIn from "@/components/ui/FadeIn";
import { proofStats } from "@/lib/content";

export default function Proof() {
  return (
    <section className="border-t border-foreground/10">
      <div className="mx-auto max-w-content px-6 py-24 md:px-8 md:py-32">
        <FadeIn>
          <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
            {proofStats.map((stat, index) => (
              <li key={stat.value} className="space-y-3">
                <FadeIn delay={index * 0.08}>
                  <p className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="max-w-xs text-sm leading-relaxed text-muted md:text-base">
                    {stat.label}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

import FadeIn from "@/components/ui/FadeIn";
import { proofStats } from "@/lib/content";

export default function Proof() {
  return (
    <section className="mx-auto max-w-content px-6 md:px-8">
      <ul className="grid grid-cols-1 gap-8 border-y border-line py-10 sm:grid-cols-3 sm:gap-6">
        {proofStats.map((stat, index) => (
          <li
            key={stat.value}
            className={
              index > 0 ? "sm:border-l sm:border-line sm:pl-6" : ""
            }
          >
            <FadeIn delay={index * 0.08}>
              <p className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-label text-faint">
                {stat.label}
              </p>
            </FadeIn>
          </li>
        ))}
      </ul>
    </section>
  );
}

import FadeIn from "@/components/ui/FadeIn";
import { about } from "@/lib/content";

export default function About() {
  return (
    <section className="border-t border-foreground/10">
      <div className="mx-auto max-w-content px-6 py-24 md:px-8 md:py-32">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            About
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

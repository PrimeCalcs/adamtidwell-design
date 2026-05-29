import FadeIn from "@/components/ui/FadeIn";
import Eyebrow from "@/components/ui/Eyebrow";
import { about } from "@/lib/content";
import { preventWidows, tokens } from "@/lib/typography";

export default function About() {
  return (
    <section className="mx-auto mt-24 max-w-content px-6 md:mt-32 md:px-8">
      <FadeIn>
        <Eyebrow as="h2">About</Eyebrow>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className={`mt-8 max-w-prose space-y-5 text-muted ${tokens.lead}`}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{preventWidows(paragraph)}</p>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

import Eyebrow from "@/components/ui/Eyebrow";
import { about } from "@/lib/content";
import { tokens, preventWidows } from "@/lib/typography";

export default function About() {
  return (
    <div className="max-w-prose">
      <Eyebrow as="h2" className="mb-6 mt-16">
        How I work
      </Eyebrow>

      {about.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 24)} className={`mb-6 ${tokens.body}`}>
          {preventWidows(paragraph)}
        </p>
      ))}
    </div>
  );
}

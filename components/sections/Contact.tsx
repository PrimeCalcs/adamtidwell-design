import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import Eyebrow from "@/components/ui/Eyebrow";
import { contact } from "@/lib/content";
import { preventWidows, tokens } from "@/lib/typography";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto mt-24 max-w-content px-6 pb-28 md:mt-32 md:px-8"
    >
      <FadeIn>
        <div className="rounded-2xl border border-line bg-surface p-8 md:p-12">
          <Eyebrow as="h2">{contact.heading}</Eyebrow>

          <p className={`mt-4 max-w-prose text-muted ${tokens.lead}`}>
            {preventWidows(contact.description)}
          </p>

          <Link
            href={`mailto:${contact.email}`}
            className="mt-8 inline-block text-2xl font-medium tracking-tight text-foreground underline decoration-line underline-offset-[6px] transition-colors hover:decoration-foreground md:text-3xl"
          >
            {contact.emailLabel}
          </Link>

          <div className="mt-8 flex min-h-[220px] items-center justify-center rounded-xl border border-dashed border-line bg-background px-6 py-12 text-center">
            <p className="font-mono text-[11px] uppercase tracking-label text-faint">
              {contact.calEmbedPlaceholder}
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

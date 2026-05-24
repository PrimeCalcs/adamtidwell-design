import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { contact } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-foreground/10">
      <div className="mx-auto max-w-content px-6 py-24 md:px-8 md:py-32">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Contact
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 max-w-xl space-y-10">
            <p className="text-lg text-muted">
              <Link
                href={`mailto:${contact.email}`}
                className="text-foreground underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
              >
                {contact.emailLabel}
              </Link>
            </p>

            <div className="flex min-h-[320px] items-center justify-center rounded-sm border border-dashed border-foreground/15 bg-foreground/[0.02] px-6 py-12 text-center">
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                {contact.calEmbedPlaceholder}
              </p>
            </div>

            <Link
              href={contact.secondaryCtaHref}
              className="inline-block text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              {contact.secondaryCtaLabel}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

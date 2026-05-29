import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import { contact } from "@/lib/content";
import { tokens } from "@/lib/typography";

export default function Contact() {
  return (
    <div id="contact" className="mt-20 max-w-prose border-t border-line pt-8">
      <Eyebrow as="h2" className="mb-6">
        {contact.heading}
      </Eyebrow>

      <p className="mb-6 text-[16.5px] leading-[1.7] text-[#444] [text-wrap:pretty]">
        {contact.description}
      </p>

      <div className="my-3">
        <Link
          href={`mailto:${contact.email}`}
          className={`${tokens.name} ${tokens.link}`}
        >
          {contact.email}
        </Link>
      </div>

      <div
        className={`mt-8 rounded-lg border border-dashed border-[#D8D3C6] px-7 py-9 text-center ${tokens.calEmbed}`}
      >
        {contact.calEmbedPlaceholder}
      </div>
    </div>
  );
}

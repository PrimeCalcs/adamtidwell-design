"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { site, heroPitch } from "@/lib/content";
import { tokens } from "@/lib/typography";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="mx-auto max-w-content px-6 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
      >
        <h1 className={tokens.display}>{site.name}</h1>

        <p className={`mt-3 ${tokens.role}`}>{site.role}</p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease }}
          className={`mt-8 max-w-prose text-muted ${tokens.lead}`}
        >
          {heroPitch.map((segment, i) =>
            segment.strong ? (
              <strong key={i} className="font-semibold text-foreground">
                {segment.text}
              </strong>
            ) : (
              <span key={i}>{segment.text}</span>
            ),
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease }}
          className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3"
        >
          <Link
            href={site.ctaHref}
            className="inline-block rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-ink/85"
          >
            {site.ctaLabel}
          </Link>
          <span className="text-sm text-faint">{site.ctaTrailing}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { site, heroPitch } from "@/lib/content";
import { tokens, preventWidows } from "@/lib/typography";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-prose"
    >
      <h1 className={`mb-1.5 ${tokens.name}`}>{site.name}</h1>
      <div className={`mb-14 ${tokens.role}`}>{site.role}</div>

      <p className={`mb-6 ${tokens.body}`}>
        {heroPitch.map((segment, i) => {
          const text =
            i === heroPitch.length - 1
              ? preventWidows(segment.text)
              : segment.text;
          return segment.strong ? (
            <strong key={i} className="font-medium">
              {text}
            </strong>
          ) : (
            <span key={i}>{text}</span>
          );
        })}
      </p>

      <p className={tokens.body}>
        <Link href={site.ctaHref} className={tokens.link}>
          {site.ctaLabel}
        </Link>
        {site.ctaTrailing}
      </p>
    </motion.div>
  );
}

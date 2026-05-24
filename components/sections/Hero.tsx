"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { site } from "@/lib/content";

const pitchWords = site.pitch.split(" ");

export default function Hero() {
  return (
    <section className="mx-auto max-w-content px-6 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative inline-block">
          <h1 className="font-display text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
            {site.name}
          </h1>
          <motion.span
            className="absolute -bottom-2 left-0 h-px bg-accent"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden
          />
        </div>

        <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          {pitchWords.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              className="inline-block"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.6 + index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
              {index < pitchWords.length - 1 ? "\u00A0" : ""}
            </motion.span>
          ))}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.6 + pitchWords.length * 0.06 + 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12"
        >
          <Link
            href={site.ctaHref}
            className="inline-block rounded-sm bg-accent px-6 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-accent/90"
          >
            {site.ctaLabel}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

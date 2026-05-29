"use client";

import { motion } from "framer-motion";

type PhoneReelProps = {
  duration: string;
  platform: string;
  reelLabel: string;
};

/**
 * Portrait phone mockup with prototype-reel chrome.
 * The screen is an intentional neutral placeholder until real reels land.
 */
export default function PhoneReel({
  duration,
  platform,
  reelLabel,
}: PhoneReelProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-[260px] rounded-phone bg-surface p-2.5 shadow-card"
    >
      <div className="relative flex aspect-[9/18] flex-col justify-between overflow-hidden rounded-[20px] bg-ink p-4 text-background">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] tabular-nums text-background/70">
            {duration}
          </span>
          <span className="rounded-full border border-background/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-label text-background/70">
            {platform}
          </span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full border border-background/25 text-sm text-background/80"
            aria-hidden
          >
            ▶
          </span>
          <span className="font-mono text-[11px] tracking-label text-background/40">
            {reelLabel}
          </span>
        </div>

        <div aria-hidden className="h-1 w-9 self-center rounded-full bg-background/15" />
      </div>
    </motion.div>
  );
}

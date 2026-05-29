/**
 * Typographic design tokens.
 *
 * Single source of truth for the type scale, weights, and tracking used across
 * the site. Tokens are Tailwind className strings (no component library) so any
 * section can compose them. Derived from the warm / Geist HTML reference: a
 * restrained scale, mostly 400–500 weights, sharp tracking on display sizes,
 * and wide-tracked monospace micro-labels.
 */
export const tokens = {
  /** Wide-tracked monospace micro-label (section eyebrows). */
  eyebrow: "font-mono text-[11px] uppercase tracking-label text-label",
  /** Smaller mono meta line (work meta, footer). */
  meta: "font-mono text-[11px] uppercase tracking-label text-faint",
  /** Hero name. */
  display:
    "text-4xl font-medium tracking-tight text-foreground md:text-[3.25rem] md:leading-[1.05]",
  /** Hero role / mono subtitle. */
  role: "font-mono text-sm tracking-tight text-faint",
  /** Large numeric stat value. */
  stat: "text-3xl font-medium tracking-tight text-foreground md:text-4xl",
  /** Service / section sub-heading. */
  subhead: "text-xl font-medium text-foreground md:text-2xl",
  /** Work headline. */
  headline:
    "text-balance text-2xl font-medium leading-snug text-foreground md:text-[1.75rem]",
  /** Default body copy. */
  body: "text-pretty text-base leading-relaxed md:text-[1.0625rem] md:leading-7",
  /** Larger lead body copy (hero pitch, about). */
  lead: "text-pretty text-lg leading-relaxed md:text-xl",
} as const;

/** Join the last two words so the final line never holds a lone word. */
export function preventWidows(text: string): string {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => {
      const words = sentence.trim().split(/\s+/);
      if (words.length < 3) return sentence.trim();

      const last = words.pop()!;
      const secondLast = words.pop()!;
      return [...words, `${secondLast}\u00A0${last}`].join(" ");
    })
    .join(" ");
}

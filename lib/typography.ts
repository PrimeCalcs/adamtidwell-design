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
  /** Top nav monospace label. */
  nav: "font-mono text-[11.5px] uppercase tracking-[0.06em] text-[#888]",
  /** Section block label / eyebrow (What I do, Selected work, About...). */
  eyebrow: "font-mono text-[11px] uppercase tracking-label text-label",
  /** Hero name + email — deliberately understated. */
  name: "text-[22px] font-medium tracking-[-0.015em] text-foreground [text-wrap:balance]",
  /** Hero role subtitle. */
  role: "text-[16px] text-[#777]",
  /** Default body copy. */
  body: "text-[16.5px] leading-[1.7] text-foreground [text-wrap:pretty]",
  /** Inline text link with navy underline. */
  link: "text-foreground underline decoration-accent decoration-[1.5px] underline-offset-[4px]",
  /** Proof numeric value (navy). */
  proofNum: "text-[24px] font-medium tracking-[-0.02em] text-accent",
  /** Proof label below the number. */
  proofLabel: "font-mono text-[10.5px] uppercase tracking-[0.08em] leading-[1.4] text-[#999]",
  /** Service row: number, name, body. */
  serviceNum: "font-mono text-[11px] tracking-[0.06em] text-[#bbb]",
  serviceName: "text-[15px] font-medium text-foreground",
  serviceBody: "text-[15px] leading-[1.55] text-muted",
  /** Project meta kicker. */
  projMeta: "font-mono text-[11px] uppercase tracking-[0.08em] text-[#999]",
  /** Project title. */
  projTitle:
    "text-[19px] font-medium tracking-[-0.01em] leading-[1.35] text-foreground [text-wrap:balance]",
  /** Project body copy. */
  projBody: "text-[15.5px] leading-[1.65] text-foreground [text-wrap:pretty]",
  /** Project outcome (italic, ruled). */
  outcome:
    "text-[14.5px] italic leading-[1.6] text-muted [text-wrap:pretty] border-l-2 border-line-warm pl-[14px]",
  /** Phone screen center label. */
  phoneLabel: "font-mono text-[9.5px] uppercase tracking-[0.08em] text-faint",
  /** Phone screen corner labels. */
  phoneCorner: "font-mono text-[8px] uppercase tracking-[0.08em] text-[#b8b3a7]",
  /** Cal embed placeholder. */
  calEmbed: "font-mono text-[11.5px] uppercase tracking-[0.08em] text-label",
  /** Footer monospace label. */
  footer: "font-mono text-[11px] uppercase tracking-[0.1em] text-faint",
} as const;

/**
 * Glue the last two words of a block with a non-breaking space so the final
 * wrapped line never holds a single lone word. Whitespace elsewhere (including
 * any leading space, which matters for inline segments) is preserved.
 */
export function preventWidows(text: string): string {
  return text.replace(/\s+(\S+)\s*$/, "\u00A0$1");
}

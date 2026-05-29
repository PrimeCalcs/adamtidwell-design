export const site = {
  name: "Adam Tidwell",
  role: "Product designer · Dallas, Texas",
  availability: "Available — Q3 2026",
  ctaLabel: "Book a call",
  ctaHref: "#contact",
  ctaTrailing: "— or keep scrolling for the work.",
} as const;

/**
 * Hero pitch as ordered segments so the stat phrases can render bold inline.
 */
export const heroPitch: { text: string; strong?: boolean }[] = [
  { text: "I help small teams ship better products. " },
  { text: "200+ apps", strong: true },
  { text: ", used " },
  { text: "38 million times", strong: true },
  { text: " to help close deals for " },
  { text: "half a million", strong: true },
  { text: " real estate pros." },
];

export const proofStats = [
  { value: "38M", label: "Calculations run" },
  { value: "500K", label: "Real-estate pros reached" },
  { value: "200+", label: "Apps shipped" },
] as const;

export const services = [
  {
    title: "Strategy",
    description:
      "Clarify the problem, define the bet, and align around a path forward.",
  },
  {
    title: "Design",
    description:
      "Shape interfaces that feel inevitable, not ornamental.",
  },
  {
    title: "Build",
    description:
      "Partner with engineering to ship polished product, not just polished decks.",
  },
] as const;

export type WorkItem = {
  /** Short label shown on the phone mockup. */
  label: string;
  /** Meta line: name · years · role. */
  meta: string;
  platform: string;
  duration: string;
  reelLabel: string;
  headline: string;
  context: string;
  outcome: string;
};

export const workItems: WorkItem[] = [
  {
    label: "PalmAgent",
    meta: "PalmAgent · 2019–2024 · Lead product designer",
    platform: "iOS",
    duration: "00:42",
    reelLabel: "[ prototype reel ]",
    headline: "Closing-cost software used by 500,000 real estate pros.",
    context:
      "Lead product designer on a white-label calculator platform licensed by title companies nationwide. Twenty years across design, math, and backend architecture — shipping 200+ apps that have run over 38 million calculations.",
    outcome:
      "Widely adopted across the real estate industry; recognized by leading coaches as essential tooling for modern agents.",
  },
  {
    label: "Rep Dash",
    meta: "Rep Dashboard · 2021 · Design + engineering",
    platform: "iOS",
    duration: "00:42",
    reelLabel: "[ prototype reel ]",
    headline: "The control room behind 1,000+ title reps and their agent clients.",
    context:
      "Designed and shipped the internal platform title company reps and managers used to manage client accounts across the PalmAgent network — renewals, reassignments, account expirations, and team oversight. Full ownership from architecture through interface.",
    outcome:
      "Adopted by every rep on the platform; later expanded with self-initiated features that became flagship talking points company-wide.",
  },
  {
    label: "Driftless",
    meta: "Driftless · 2025 · Designer + builder",
    platform: "iOS",
    duration: "00:42",
    reelLabel: "[ prototype reel ]",
    headline: "A new consumer app, launching in the App Store soon.",
    context:
      "[ Project context drops in here once the launch is finalized. The reel will show real prototype footage from the iOS build. ]",
    outcome: "[ Outcome line — early traction and reception once live. ]",
  },
];

export const about = {
  paragraphs: [
    "Nearly twenty years as the person who figures out what the product needs and builds it — strategy, design, math, backend, and the copy in between. Designer who can do the engineering. Builder who can do the pitch.",
    "I never throw up my hands in defeat. I figure it out and ship.",
    "I also like golf, Dallas sports teams (yes, even the Cowboys), and pizza nights with my wife, Nicole.",
  ],
} as const;

export const contact = {
  heading: "Get in touch",
  description: "Tell me what you're building. I reply within a day or two.",
  email: "hello@adamtidwell.design",
  emailLabel: "hello@adamtidwell.design",
  calEmbedPlaceholder: "[ cal.com booking embed ]",
} as const;

export const metadata = {
  title: "Adam Tidwell — Product Designer",
  description:
    "Product designer in Dallas. 200+ apps shipped, used 38 million times to help close deals for half a million real estate pros.",
  url: "https://adamtidwell.design",
} as const;

export const site = {
  name: "Adam Tidwell",
  pitch: "Product strategy and design for teams building what comes next.",
  ctaLabel: "Book a call",
  ctaHref: "#contact",
} as const;

export const proofStats = [
  {
    value: "38M",
    label: "Users reached across shipped products",
  },
  {
    value: "500K",
    label: "Monthly active users at peak scale",
  },
  {
    value: "200+",
    label: "Projects delivered with cross-functional teams",
  },
] as const;

export const services = [
  {
    title: "Strategy",
    description:
      "Clarify the problem, define the bet, and align stakeholders around a path forward.",
  },
  {
    title: "Design",
    description:
      "Shape interfaces and experiences that feel inevitable, not ornamental.",
  },
  {
    title: "Build",
    description:
      "Partner with engineering to ship polished product, not just polished decks.",
  },
] as const;

export type WorkItem = {
  title: string;
  context: string;
  outcome: string;
  imagePath: string;
};

export const workItems: WorkItem[] = [
  {
    title: "Platform Redesign",
    context: "Enterprise SaaS · 18-month engagement",
    outcome: "Increased activation by 34% within the first quarter post-launch.",
    imagePath: "/images/work-1.svg",
  },
  {
    title: "Consumer Mobile App",
    context: "Series B startup · Founding design partner",
    outcome: "Grew DAU from 12K to 180K over twelve months.",
    imagePath: "/images/work-2.svg",
  },
  {
    title: "Design System",
    context: "Fortune 500 · Multi-brand rollout",
    outcome: "Reduced time-to-ship for new features by nearly half.",
    imagePath: "/images/work-3.svg",
  },
];

export const about = {
  paragraphs: [
    "I help product teams turn ambiguity into clarity — and clarity into shipped work.",
    "Over fifteen years, I've led strategy, design, and build across startups and enterprise, from zero-to-one launches to platform-scale redesigns.",
    "My approach is editorial: fewer slides, more substance. I work best with teams who care about craft and are ready to move.",
  ],
} as const;

export const contact = {
  email: "hello@adamtidwell.design",
  emailLabel: "hello@adamtidwell.design",
  calEmbedPlaceholder: "Cal.com embed — replace with your scheduling link",
  secondaryCtaLabel: "Send an email",
  secondaryCtaHref: "mailto:hello@adamtidwell.design",
} as const;

export const metadata = {
  title: "Adam Tidwell — Product Strategy & Design",
  description:
    "Product strategy, design, and build for teams shipping what comes next.",
  url: "https://adamtidwell.design",
} as const;

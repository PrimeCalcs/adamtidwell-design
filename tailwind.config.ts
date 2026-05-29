import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FBFAF7",
        surface: "#FFFFFF",
        ink: "#1A1A18",
        foreground: "#1A1A18",
        muted: "#55554F",
        faint: "#9A958A",
        label: "#B8B3A7",
        line: "#E6E2D8",
        positive: "#3B9A5F",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1080px",
        prose: "640px",
      },
      letterSpacing: {
        label: "0.16em",
      },
      borderRadius: {
        phone: "28px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(26, 26, 24, 0.04), 0 0 0 1px rgba(26, 26, 24, 0.06)",
        "card-hover":
          "0 18px 40px rgba(26, 26, 24, 0.09), 0 0 0 1px rgba(26, 26, 24, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;

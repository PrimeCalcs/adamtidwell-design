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
        foreground: "#1A1A1A",
        muted: "#555550",
        faint: "#9A958A",
        label: "#AAAAAA",
        line: "#E6E2D8",
        "line-warm": "#E6E1D6",
        accent: "#2C4264",
        positive: "#3B9A5F",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "760px",
        prose: "580px",
      },
      letterSpacing: {
        label: "0.12em",
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

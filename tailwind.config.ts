import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Fundos */
        "su-black":   "#0D0D0F",
        "su-dark":    "#141418",
        "su-surface": "#1C1C22",
        "su-border":  "#2A2A35",
        /* Acento laranja industrial */
        "su-accent":       "#E8510A",
        "su-accent-hover": "#FF6B2B",
        "su-accent-muted": "#8C3005",
        /* Texto / metal */
        "su-100": "#E8EEF2",
        "su-200": "#C8D4DC",
        "su-300": "#A8B4C0",
        "su-400": "#8892A0",
        "su-white": "#F5F7FA",
        /* Compat com classes antigas */
        "steel-dark":    "#141418",
        "steel-darker":  "#0D0D0F",
        "steel-gray":    "#1C1C22",
        "steel-card":    "#1C1C22",
        "steel-border":  "#2A2A35",
        "steel-muted":   "#8892A0",
        "steel-accent":  "#E8510A",
        "steel-accent-dark":  "#8C3005",
        "steel-accent-light": "#FF6B2B",
        "steel-metal":   "#A8B4C0",
        "steel-light":   "#E8EEF2",
      },
      fontFamily: {
        heading: ["'Barlow Condensed'", "sans-serif"],
        body:    ["'Barlow'", "sans-serif"],
        mono:    ["'DM Mono'", "monospace"],
      },
      fontSize: {
        hero: "clamp(3rem, 8vw, 6rem)",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #E8510A 0%, #FF6B2B 100%)",
        "gradient-hero":   "linear-gradient(135deg, #0D0D0F 0%, #1a1a24 50%, #0D0D0F 100%)",
        "gradient-metal":  "linear-gradient(180deg, #2A2A35 0%, #1C1C22 100%)",
      },
      boxShadow: {
        accent: "0 4px 32px rgba(232, 81, 10, 0.25)",
        card:   "0 4px 24px rgba(0, 0, 0, 0.4)",
        deep:   "0 20px 60px rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;

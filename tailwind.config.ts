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
        "steel-dark": "#0d0d0d",
        "steel-darker": "#0a0a0a",
        "steel-gray": "#1a1a1a",
        "steel-card": "#141414",
        "steel-border": "#1e2e2f",
        "steel-muted": "#6b7280",
        "steel-accent": "#2acbd2",
        "steel-accent-dark": "#1fa8ae",
        "steel-accent-light": "#4fd8de",
        "steel-metal": "#8a9aaa",
        "steel-light": "#f0f4f8",
      },
      fontFamily: {
        heading: ["var(--font-barlow)", "Barlow Condensed", "sans-serif"],
        body: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "metal-gradient":
          "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 50%, #1a1a1a 100%)",
        "accent-gradient":
          "linear-gradient(135deg, #2acbd2 0%, #1fa8ae 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

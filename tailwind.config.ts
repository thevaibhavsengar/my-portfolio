import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))", input: "hsl(var(--input))", ring: "hsl(var(--ring))", background: "hsl(var(--background))", foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" }
      },
      fontFamily: { sans: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"], display: ["var(--font-sora)", "Sora", "system-ui", "sans-serif"] },
      boxShadow: { glow: "0 0 70px rgba(56, 189, 248, 0.16)", panel: "0 24px 80px rgba(0, 0, 0, 0.35)" },
      keyframes: { float: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-12px)" } }, scan: { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(220%)" } } },
      animation: { float: "float 6s ease-in-out infinite", scan: "scan 5s linear infinite" }
    }
  },
  plugins: []
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: "var(--green)",
        darkparagraph: "var(--dark-paragraph)",
      },
      fontFamily: {
        svatopluk: ["Svatopluk", "sans-serif"],
        jetbrainsmono: ["JetBrains-Mono', sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config; 
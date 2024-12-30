import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        gray: "var(--gray)",
        green: "var(--green)",
        white: "var(--white)",
      },
      boxShadow: {
        greenShadow: "0px 0px 30px 8px #4cff9f",
      },
      fontFamily: {
        PPMon: ["var(--font-PPMon)"],
        geSS: ["var(--font-geSS)"],
      },
      screens: {
        "2xl": "3700px",
      },
    },
  },
  plugins: [],
} satisfies Config;

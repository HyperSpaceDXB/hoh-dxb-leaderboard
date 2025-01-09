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
        Arco: ["var(--font-arco)"],
        geSS: ["var(--font-geSS)"],
        PPMon: ["var(--font-PPMon)"],
      },
      screens: {
        "2xl": "1441px",
      },
      keyframes: {
        flash: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        flip: {
          "0%": { transform: "rotateX(0)" },
          "10%": { transform: "rotateX(90deg)" },
          "20%": { transform: "rotateX(0)" },
          "30%": { transform: "rotateX(90deg)" },
          "40%": { transform: "rotateX(0)" },
          "50%": { transform: "rotateX(90deg)" },
          "60%": { transform: "rotateX(0)" },
          "70%": { transform: "rotateX(90deg)" },
          "80%": { transform: "rotateX(0)" },
          "90%": { transform: "rotateX(90deg)" },
          "100%": { transform: "rotateX(0)" },
        },
      },
      animation: {
        flash: "flash 1s step-start infinite",
        rotate: "rotate 10s linear infinite;",
        flip: "flip 0.8s ease-in-out infinite ",
      },
    },
  },
  plugins: [],
} satisfies Config;

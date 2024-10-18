import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        geist: ['var(--font-geist-sans)'],
        geist2: ['var(--font-geist-sans2)'],
      },
      margin: {
        mPKC: "275px",
      }
    },
  },
  plugins: [],
};
export default config;

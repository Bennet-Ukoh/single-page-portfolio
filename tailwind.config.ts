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
        "text-heading": "#FFFFFF",
        "text-body": "#D9D9D9",
        "text-link": "#4EE1A0",
        "bg-primary": "#151515",
      },
      fontSize: {
        "heading-xl": ["88px", "88px"], // [font-size, line-height]
        "heading-l": ["48px", "56px"],
        "heading-m": ["24px", "32px"],
        "body-l": ["18px", "28px"],
      },
      letterSpacing: {
        tightest: "-2.5px",
        tighter: "-1.5px",
      },
    },
  },
  plugins: [],
};
export default config;

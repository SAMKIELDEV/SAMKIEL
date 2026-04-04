import type { Config } from "tailwindcss";

const config: any = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/layout.tsx",
    "./app/page.tsx",
  ],
  safelist: [
    "bg-emerald-500",
    "bg-amber-400",
    "bg-[#888888]",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;

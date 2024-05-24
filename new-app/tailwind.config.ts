import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:  {
      outfit: ['var(--font-outfit)', 'sans-serif'],
      texturina: ['var(--font-texturina)', 'serif'],
    },
  },
  plugins: [],
};
export default config;

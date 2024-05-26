import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:  {
        outfit: ['var(--font-outfit)'],
        alegreya: ['var(--font-alegreya)'],
      },
      colors: {
        'blue-ocean': '#266FDC',
        'dark-orange': '#EC7824',
        'light-orange': '#FF984E',
      },
    },
  },
  plugins: [],
};
export default config;

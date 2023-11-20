import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-noto-sans)",
      },
      backgroundImage: {
        stone: "url('/deepslate.jpg')",
        wood: "url('/wood.png')",
        haybale: "url('/haybale.jpg')",
        enderPortal: "url('/enderPortal.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;

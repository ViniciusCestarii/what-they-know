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
        background: "rgb(17 24 39)",
        primary: "rgb(34 197 94)",
      },
      maxWidth: {
        default: "900px"
      }
    },
  },
  plugins: [],
};
export default config;

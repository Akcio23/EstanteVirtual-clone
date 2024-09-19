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
        'custom-blue': 'rgb(19, 110, 248)',
        'custom-gree': 'rgb(0, 123, 124)',
      },
      screens:{
        'xs': '375px'
      }
    },
  },
  plugins: [],
};
export default config;

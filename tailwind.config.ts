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
        'border':'rgb(59, 191, 174)',
      },
      screens:{
        'xs': '375px',
        'xz':'1200px',
      },
      filter: {
        'alter-green': 'invert(86%) sepia(15%) saturate(4691%) hue-rotate(134deg) brightness(95%) contrast(91%)',
      },
    },
  },
  plugins: [
 ],
};
export default config;

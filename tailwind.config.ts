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
        'off-white': '#f7f7f7',
        'light-purple': '#8a4fff',
        'purple-hover': '#7a3fef',
        'text-black': '#333333',
      },
    },
  },
  plugins: [],
};

export default config;

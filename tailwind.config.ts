import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brandcolor: "var(--brandcolor)",
        grey700: "var(--grey700)",
        grey400: "var(--grey400)",
        grey100: "var(--grey100)",
        fontColor: "var(--fontColor)",
      },
    },
  },
  plugins: [],
} satisfies Config;

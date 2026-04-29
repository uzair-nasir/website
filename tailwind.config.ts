import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#f7f8fa",
        surface: "#ffffff",
        text: "#111827",
        muted: "#4b5563",
        border: "#dde3ec",
        accent: "#1f4d8f",
      },
      boxShadow: {
        soft: "0 8px 28px rgba(17, 24, 39, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

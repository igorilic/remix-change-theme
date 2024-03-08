import type { Config } from "tailwindcss";
import themesPlugin from "./themes/themes.config";
import themes from "./themes/themes.json";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: ["selector", '[data-mode="dark"]'],
  plugins: [themesPlugin({ colorThemes: themes })],
} satisfies Config;

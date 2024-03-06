import { type Config } from "tailwindcss";
import { twPreset } from "./src/lib/tw-plugin";

export default {
  presets: [twPreset],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
} satisfies Config;

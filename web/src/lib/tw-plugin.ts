import plugin from "tailwindcss/plugin";
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
// @ts-ignore
import animatePlugin from "tailwindcss-animate";
// @ts-ignore
// import hexToHsl from "hex-to-hsl";

const convertHex = (color: string) => hexToHsl(color).reverse().join("% ").split(" ").reverse().join(" ");
export const twPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": " 0 0% 100%",
        "--foreground": " 0 0% 3.9%",
        "--card": " 0 0% 100%",
        "--card-foreground": " 0 0% 3.9%",
        "--popover": " 0 0% 100%",
        "--popover-foreground": " 0 0% 3.9%",
        "--primary": " 0 72.2% 50.6%",
        "--primary-foreground": " 0 85.7% 97.3%",
        "--secondary": " 0 0% 96.1%",
        "--secondary-foreground": " 0 0% 9%",
        "--muted": " 0 0% 96.1%",
        "--muted-foreground": " 0 0% 45.1%",
        "--accent": " 0 0% 96.1%",
        "--accent-foreground": " 0 0% 9%",
        "--destructive": " 0 84.2% 60.2%",
        "--destructive-foreground": " 0 0% 98%",
        "--border": " 0 0% 89.8%",
        "--input": " 0 0% 89.8%",
        "--ring": " 0 72.2% 50.6%",
        "--radius": " 0.5rem",
      },
      ".dark": {
        "--background": " 0 0% 3.9%",
        "--foreground": " 0 0% 98%",
        "--card": " 0 0% 3.9%",
        "--card-foreground": " 0 0% 98%",
        "--popover": " 0 0% 3.9%",
        "--popover-foreground": " 0 0% 98%",
        "--primary": " 0 72.2% 50.6%",
        "--primary-foreground": " 0 85.7% 97.3%",
        "--secondary": " 0 0% 14.9%",
        "--secondary-foreground": " 0 0% 98%",
        "--muted": " 0 0% 14.9%",
        "--muted-foreground": " 0 0% 63.9%",
        "--accent": " 0 0% 14.9%",
        "--accent-foreground": " 0 0% 98%",
        "--destructive": " 0 62.8% 30.6%",
        "--destructive-foreground": " 0 0% 98%",
        "--border": " 0 0% 14.9%",
        "--input": " 0 0% 14.9%",
        "--ring": " 0 72.2% 50.6%",
      },
    }),
      addBase({
        "*": {
          "@apply border-border": {},
        },
        body: {
          "@apply bg-background text-foreground": {},
          "font-feature-settings": "'rlig' 1, 'calt' 1",
        },
      });
  },
  {
    darkMode: "class",
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          dark: "#27272A",
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          "admin-background": "var(--background)",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
        // fontFamily: {
        //   sans: ["medium"],
        //   display: ["medium"],
        //   body: ["body"],
        //   semibold:['bold'],
        //   bold:['black'],
        //   medium:['medium'],
        // },
      },
    },
  }
);

export const twPreset = {
  content: [],
  plugins: [twPlugin, animatePlugin],
} satisfies Config;

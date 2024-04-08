/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
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
        background: "#0F0F0F",
        foreground: "#AFA18F",
        accent: "#EC4E39",
      },
      height: {
        screen: "100dvh",
      },

      fontFamily: {
        sans: [
          "var(--font-avgard)",
          "var(--font-fondest)",
          "var(--font-pantonbold)",
          ...fontFamily.sans,
        ],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-displaymodes"),
    plugin(({ theme, addUtilities }) => {
      const neonUtils: { [key: string]: { boxShadow: string } } = {};
      const colors = theme("colors");

      for (const color in colors) {
        if (typeof colors[color] === "object") {
          const light = colors[color]["400"];
          const dark = colors[color]["900"];
          neonUtils[`.neon-${color}`] = {
            boxShadow: `0px 0px 5px ${light}, 0px 0px 20px ${dark}`,
          };
        }
      }

      addUtilities(neonUtils);
    }),
  ],
};

/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0F0F",
        foreground: "#AFA18F",
        accent: "#EC4E39",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};

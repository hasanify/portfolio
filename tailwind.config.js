/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        silk: ["Silk", "sans-serif"],
        galano: ["Galano", "sans-serif"],
      },
      colors: {
        teal: {
          100: "#cceff0",
          200: "#99dee1",
          300: "#66ced3",
          400: "#33bdc4",
          500: "#00adb5",
          600: "#008a91",
          700: "#00686d",
          800: "#004548",
          900: "#002324",
        },
        darkGray: "#222831",
        gray: "#393E46",
        accent: "#00ADB5",
        primary: "#EEEEEE",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}

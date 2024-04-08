import localFont from "next/font/local";

const avgardFont = localFont({
  src: [
    {
      path: "./avgard.woff2",
      weight: "400",
      style: "regular",
    },
  ],
  preload: true,
  display: "block",
  variable: "--font-avgard",
});

const fondestFont = localFont({
  src: [
    {
      path: "./fondest.woff2",
      weight: "400",
      style: "regular",
    },
  ],
  preload: true,
  display: "block",
  variable: "--font-avgard",
});

const pantonLightFont = localFont({
  src: [
    {
      path: "./panton/light.woff2",
      weight: "400",
      style: "regular",
    },
  ],
  preload: true,
  display: "block",
  variable: "--font-avgard",
});

const pantonBoldFont = localFont({
  src: [
    {
      path: "./panton/bold.woff2",
      weight: "400",
      style: "regular",
    },
  ],
  preload: true,
  display: "block",
  variable: "--font-avgard",
});

export const avgard = `${avgardFont.className} font-sans` as const;
export const fondest = `${fondestFont.className} font-sans` as const;
export const pantonLight = `${pantonLightFont.className} font-sans` as const;
export const pantonBold = `${pantonBoldFont.className} font-sans` as const;

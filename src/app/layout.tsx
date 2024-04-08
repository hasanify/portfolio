import Header from "@/components/Header";
import "./globals.css";

import { avgard } from "@/utils/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hasan Ali",
  description: "Hasan Ali's Portfolio",
  icons: ["/favicon.svg", "/favicon.ico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={avgard}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}

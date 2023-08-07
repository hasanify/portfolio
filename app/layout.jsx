import "./globals.css"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"], weight: ["400"] })
import Navigation from "./Components/Navigation"

export const metadata = {
  title: "Hasan Ali",
  description: "Portfolio Website for Hasan Ali",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`font-normal ${inter.className}`}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

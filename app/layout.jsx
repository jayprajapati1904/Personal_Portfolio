import { Bricolage_Grotesque, Space_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

// The "Star" of the show: Bricolage Grotesque
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// A technical font for small details (keeps the dev vibe)
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${spaceMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

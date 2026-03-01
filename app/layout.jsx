// "use client";
// import { Bricolage_Grotesque, Space_Mono } from "next/font/google";
// import Navbar from "./components/Navbar";
// import "./globals.css";
// import { useEffect } from "react";
// import { useAuthStore } from "./store/authStore.js";

// // The "Star" of the show: Bricolage Grotesque
// const bricolage = Bricolage_Grotesque({
//   subsets: ["latin"],
//   variable: "--font-heading",
//   display: "swap",
// });

// // A technical font for small details (keeps the dev vibe)
// const spaceMono = Space_Mono({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-body",
//   display: "swap",
// });

// export default function RootLayout({ children }) {
//   const { initializeAuth } = useAuthStore();

//   useEffect(() => {
//     initializeAuth();
//   }, []);
//   return (
//     <html lang="en">
//       <body
//         className={`${bricolage.variable} ${spaceMono.variable} antialiased`}
//       >
//         <Navbar />
//         {children}
//       </body>
//     </html>
//   );
// }

"use client";
import { Bricolage_Grotesque, Space_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore.js";
import Script from "next/script";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({ children }) {
  const { initializeAuth } = useAuthStore();

  useEffect(() => {
    initializeAuth();
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VWKY481JCQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VWKY481JCQ');
          `}
        </Script>
      </head>

      <body
        className={`${bricolage.variable} ${spaceMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

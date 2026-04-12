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

import { Bricolage_Grotesque, Space_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientShell from "./components/ClientShell";
import {
  getBaseUrl,
  organizationJsonLd,
  personJsonLd,
  siteConfig,
  websiteJsonLd,
} from "./seo";

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
  const baseUrl = getBaseUrl();
  const personSchema = personJsonLd();
  const websiteSchema = websiteJsonLd();
  const organizationSchema = organizationJsonLd();

  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${spaceMono.variable} antialiased`}
      >
        <ClientShell>{children}</ClientShell>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VWKY481JCQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VWKY481JCQ', { page_path: window.location.pathname });
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "Jay Prajapati (Prajapati Jay) | Full Stack Developer Portfolio",
    template: "%s | Jay Prajapati",
  },
  description:
    "Official portfolio of Jay Prajapati, also known as Prajapati Jay. Full stack developer from Ahmedabad, India.",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: getBaseUrl() }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: getBaseUrl(),
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: "/profile2.jpg",
        width: 1200,
        height: 630,
        alt: "Jay Prajapati - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/profile2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "yZp1WdAiC8r9csPsZfqYcaGPBWBfOmjaMKVl18IFi0o",
  },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fefbed",
};

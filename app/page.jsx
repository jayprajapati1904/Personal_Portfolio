"use client";

import React from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { faqJsonLd, getBaseUrl } from "./seo";

export default function Home() {
  const baseUrl = getBaseUrl();
  const faqSchema = faqJsonLd();
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Jay Prajapati | Prajapati Jay Full Stack Developer Portfolio",
    url: `${baseUrl}/`,
    description:
      "Official portfolio of Jay Prajapati, also known as Prajapati Jay, from Ahmedabad, India.",
    about: {
      "@type": "Person",
      name: "Jay Prajapati",
      alternateName: "Prajapati Jay",
    },
    primaryImageOfPage: `${baseUrl}/profile.jpg`,
    inLanguage: "en-IN",
  };

  return (
    <main className="bg-[#fefbed] min-h-screen pb-20 flex flex-col items-center px-4">
      <h1 className="sr-only">Jay Prajapati Full Stack Developer Portfolio</h1>
      <p className="sr-only">
        Jay Prajapati, also known as Prajapati Jay, is a full stack developer
        from Ahmedabad, India.
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}

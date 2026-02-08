"use client";

import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="bg-[#fefbed] min-h-screen pb-20 flex flex-col items-center px-4">
      <Hero />
      <Services />
      <Experience />
      <Projects />
    </main>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full sticky top-0 z-50 transition-all border-b-2"
      style={{
        backgroundColor: "var(--background)",
        borderColor: "var(--card-border)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center h-20">
        {/* LOGO - Uses your Heading Font */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter uppercase hover:opacity-70 transition-opacity"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--foreground)",
          }}
        >
          JAY<span style={{ color: "var(--primary)" }}>.DEV</span>
        </Link>

        {/* DESKTOP LINKS - Uses your Mono Font */}
        <div className="hidden md:flex items-center space-x-8">
          {["WORK", "ABOUT", "SERVICES"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold tracking-widest relative group transition-colors"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--foreground)",
              }}
            >
              {item}
              {/* Hover Underline Effect */}
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "var(--primary)" }}
              ></span>
            </Link>
          ))}

          {/* CTA BUTTON - Cleaner Look */}
          <Link
            href="#contact"
            className="px-6 py-3 text-sm font-bold border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            style={{
              backgroundColor: "var(--secondary)", // Teal
              borderColor: "var(--card-border)",
              color: "var(--foreground)",
              fontFamily: "var(--font-body)",
            }}
          >
            LET'S TALK
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="md:hidden flex flex-col space-y-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-8 h-[3px] bg-black transition-transform ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
          ></span>
          <span
            className={`block w-8 h-[3px] bg-black transition-opacity ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-8 h-[3px] bg-black transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b-2`}
        style={{
          backgroundColor: "var(--background)",
          borderColor: "var(--card-border)",
          maxHeight: isOpen ? "300px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="flex flex-col p-6 space-y-4 text-center">
          {["WORK", "ABOUT", "SERVICES", "CONTACT"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-bold hover:text-[var(--primary)] transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

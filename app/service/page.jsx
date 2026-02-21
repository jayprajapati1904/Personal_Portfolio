"use client";
import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "01",
      title: "Static Website",
      price: "₹3,000",
      description:
        "Perfect for personal portfolios, landing pages, or small business info sites.",
      features: [
        "7 to 8 Custom Pages",
        "Responsive Mobile Design",
        "Fast Loading Speed",
        "Contact Form Integration",
        "Social Media Links",
        "1 Month Support",
      ],
      color: "bg-white",
      btnColor: "bg-black text-white hover:bg-[#4ecdc4] hover:text-black",
      popular: false,
    },
    {
      id: "02",
      title: "Full Stack App",
      price: "₹15,000",
      description:
        "A complete dynamic solution with data management and control panels.",
      features: [
        "User & Admin Panels",
        "Secure Database Storage",
        "User Authentication (Login/Signup)",
        "Payment Gateway Integration",
        "Dynamic Content Management",
        "3 Months Support",
      ],
      color: "bg-[#facc15]", // Featured Yellow
      btnColor: "bg-black text-white hover:bg-white hover:text-black",
      popular: true,
    },
    {
      id: "03",
      title: "Custom Build",
      price: "Let's Talk",
      description:
        "Need something complex? AI tools, SaaS platforms, or specific automation.",
      features: [
        "Fully Custom Requirements",
        "AI Model Integration",
        "Scalable Cloud Architecture",
        "Advanced Security",
        "API Development",
        "Priority 24/7 Support",
      ],
      color: "bg-black text-white", // Dark Mode style for contrast
      btnColor: "bg-white text-black hover:bg-[#ff6b6b] hover:text-white",
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffdf5] py-20 px-4 md:px-8 font-mono selection:bg-[#ff6b6b] selection:text-white">
      {/* 1. HEADER SECTION (Matches Reference Image Exactly) */}
      <div className=" mx-auto mb-20 text-center relative z-10">
        {/* Top Tag: "Transparent Pricing" */}
        <div className="inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-300">
          <span className="bg-black text-white px-6 py-2 text-sm md:text-base font-black uppercase tracking-[0.2em] shadow-[6px_6px_0px_0px_#4ecdc4] border-2 border-transparent">
            Transparent Pricing
          </span>
        </div>

        {/* Headline: "Choose Your Weapon" */}
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mt-8 mb-6">
          CHOOSE YOUR <br className="md:hidden" />
          {/* Red Highlight Block */}
          <span className="relative inline-block mx-2 md:mx-4 mt-2 md:mt-0">
            <span className="absolute inset-0 bg-[#ff6b6b] transform -skew-x-6 translate-y-1"></span>
            <span className="relative z-10 text-white px-2 ">WEAPON</span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl font-bold text-[#444] max-w-2xl mx-auto mt-6 leading-relaxed">
          No hidden fees. No nonsense. Just clean code and{" "}
          <br className="hidden md:block" />
          <span className="border-b-4 border-black">brutal performance.</span>
        </p>
      </div>

      {/* 2. PRICING GRID */}
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-0">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`
              relative border-4 border-black p-8 flex flex-col h-full 
              ${service.color} 
              shadow-[8px_8px_0px_0px_#000] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_#000] transition-all duration-300 group
            `}
          >
            {/* "POPULAR" BADGE (Only for middle card) */}
            {service.popular && (
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-black text-white px-6 py-2 font-black uppercase tracking-widest text-xs border-4 border-white shadow-[4px_4px_0px_0px_#000]">
                  Most Popular
                </div>
              </div>
            )}

            {/* CARD HEADER */}
            <div
              className={`border-b-4 ${service.id === "03" ? "border-white/20" : "border-black"} pb-8 mb-8`}
            >
              <div className="flex justify-between items-start mb-2">
                <span
                  className={`text-sm font-black uppercase tracking-widest ${service.id === "03" ? "text-gray-400" : "text-gray-500"}`}
                >
                  Plan {service.id}
                </span>
                {service.id === "03" && <span className="text-2xl">⚡</span>}
              </div>

              <h2 className="text-4xl font-black uppercase mb-6 tracking-tight leading-none">
                {service.title}
              </h2>

              <div className="flex flex-col">
                {service.price !== "Let's Talk" && (
                  <span
                    className={`text-sm font-bold uppercase tracking-wide mb-1 ${service.id === "03" ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Starting at
                  </span>
                )}
                <span className="text-5xl md:text-6xl font-black tracking-tighter">
                  {service.price}
                </span>
              </div>

              <p
                className={`mt-6 font-bold text-sm leading-relaxed ${service.id === "03" ? "text-gray-300" : "text-gray-700"}`}
              >
                {service.description}
              </p>
            </div>

            {/* FEATURES LIST */}
            <ul className="flex-grow space-y-4 mb-10">
              {service.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-sm font-bold"
                >
                  <div
                    className={`flex-shrink-0 w-6 h-6 border-2 flex items-center justify-center ${service.id === "03" ? "border-white bg-white text-black" : "border-black bg-black text-white"}`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    className={
                      service.id === "03" ? "text-gray-200" : "text-gray-900"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA BUTTON */}
            <Link
              href="#contact"
              className={`w-full py-5 text-center font-black uppercase tracking-[0.1em] text-sm border-2 border-black shadow-[4px_4px_0px_0px_#000] active:translate-y-[2px] active:shadow-none transition-all ${service.btnColor}`}
            >
              {service.id === "03" ? "Book a Call  " : "Select Plan"}
            </Link>
          </div>
        ))}
      </div>

      {/* 3. FAQ / BOTTOM TEXT */}
      <div className="max-w-3xl mx-auto mt-24 text-center">
        <div className="inline-block border-t-4 border-black pt-12 px-8">
          <p className="font-bold text-xl mb-4 text-gray-600">
            Not sure which plan is right for you?
          </p>
          <Link href="#contact" className="inline-block relative group">
            {/* TEXT */}
            <span
              className="
    text-3xl md:text-4xl font-black uppercase relative z-10
    md:group-hover:text-white transition-colors duration-200
  "
            >
              Let's schedule a free call ↗
            </span>

            {/* BACKGROUND HIGHLIGHT */}
            <span
              className="
      absolute left-0 w-full bg-[#ff6b6b] -z-0
      bottom-0 h-full
      md:bottom-1 md:h-4
      md:group-hover:h-full md:group-hover:bottom-0
      transition-all duration-200
    "
            ></span>
          </Link>
        </div>
      </div>
    </main>
  );
}

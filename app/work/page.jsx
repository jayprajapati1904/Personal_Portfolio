"use client";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  const works = [
    {
      id: 1,
      client: "nargis niaz",
      title: "Real Estate Website",
      points: [
        "Designed an attractive and responsive real estate website with a modern UI.",
        "Implemented dynamic property listings with detailed property pages and visuals.",
        "Built a structured blog section for real estate updates and content.",
        "Developed an Admin panel to manage properties, blog content, and website data.",
      ],
      tags: ["Reactjs", "Nodejs", "MongoDB", "Cloudinary", "Tailwind"],
      image: "/project1.png",
      link: "https://www.eliteinemirates.com/",
      year: "2025",
      color: "bg-[#ff6b6b]",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffdf5] pt-12 pb-24 px-4 md:px-8 font-mono text-black selection:bg-[#ff6b6b] selection:text-white">
      {/* 1. PAGE CONTAINER (The Architectural Box) */}
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6">
          <div>
            <span className="inline-block bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-2 transform -rotate-2">
              Portfolio 2026
            </span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              Client <br /> Work
            </h1>
          </div>

          {/* DECORATIVE ARROW */}
          <div className="hidden md:block">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M50 0V80" stroke="black" strokeWidth="8" />
              <path d="M10 50L50 90L90 50" stroke="black" strokeWidth="8" />
            </svg>
          </div>
        </div>

        {/* WORK LIST CONTAINER */}
        <div className="border-4 border-black bg-white shadow-[12px_12px_0px_0px_#000]">
          {/* PROJECTS LOOP */}
          <div>
            {works.map((work, index) => (
              <div
                key={work.id}
                className={`group grid grid-cols-1 lg:grid-cols-2 border-b-4 border-black last:border-b-0 min-h-[500px]`}
              >
                {/* COLUMN A: IMAGE (Swaps side based on index) */}
                <div
                  className={`relative h-[300px] lg:h-auto border-b-4 lg:border-b-0 border-black overflow-hidden ${index % 2 === 1 ? "lg:order-2 lg:border-l-4" : "lg:border-r-4"}`}
                >
                  {/* Background Color Layer */}
                  <div
                    className={`absolute inset-0 ${work.color} opacity-20`}
                  ></div>

                  {/* Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:16px_16px]"></div>

                  {/* The Image */}
                  <div className="relative w-full h-full p-8 transition-transform duration-500 group-hover:scale-95">
                    <div className="relative w-full h-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] group-hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-300">
                      {/* Placeholder for Next.js Image */}
                      <div className="w-full h-full bg-gray-200 relative overflow-hidden">
                        {/* Replace 'src' with your actual image paths */}
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Floating 'View' Button overlay */}
                      <div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm cursor-pointer"
                        onClick={() => window.open(work.link, "_blank")}
                      >
                        <span className="bg-white border-2 border-black px-6 py-2 font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_#000]">
                          View Live
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COLUMN B: DETAILS */}
                <div
                  className={`p-8 lg:p-16 flex flex-col justify-center bg-white hover:bg-gray-50 transition-colors ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-black text-4xl opacity-10">
                      0{index + 1}
                    </span>
                    <span
                      className={`px-3 py-1 border-2 border-black text-xs font-bold uppercase ${work.color}`}
                    >
                      {work.year}
                    </span>
                    <span className="text-sm font-bold uppercase text-gray-500">
                      // {work.client}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-[0.9]">
                    {work.title}
                  </h2>

                  {/* Description */}
                  {/* <p className="text-lg font-medium leading-relaxed opacity-80 mb-8 max-w-md">
                    {work.description}
                  </p> */}
                  <ul className="text-base font-medium leading-relaxed opacity-90 mb-8 max-w-md space-y-3">
                    {work.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 bg-black shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 border border-black text-xs font-bold uppercase"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <Link
                    href={work.link}
                    target="_blank"
                    className="inline-flex items-center gap-3 text-xl font-black uppercase hover:underline decoration-4 underline-offset-4 decoration-[#ff6b6b]"
                  >
                    Visit Website
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50">
            Need something similar?
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#facc15] border-4 border-black px-10 py-5 text-2xl font-black uppercase shadow-[8px_8px_0px_0px_#000] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] transition-all"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </main>
  );
}

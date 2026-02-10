// "use client";
// import Image from "next/image";
// import Link from "next/link";

// export default function Work() {
//   const works = [
//     {
//       id: 1,
//       client: "nargis niaz",
//       title: "Real Estate Website",
//       points: [
//         "Designed an attractive and responsive real estate website with a modern UI.",
//         "Implemented dynamic property listings with detailed property pages and visuals.",
//         "Built a structured blog section for real estate updates and content.",
//         "Developed an Admin panel to manage properties, blog content, and website data.",
//       ],
//       tags: ["Reactjs", "Nodejs", "MongoDB", "Cloudinary", "Tailwind"],
//       image: "/project1.png",
//       link: "https://www.eliteinemirates.com/",
//       year: "2025",
//       color: "bg-[#ff6b6b]",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-[#fffdf5] pt-12 pb-24 px-4 md:px-8 font-mono text-black selection:bg-[#ff6b6b] selection:text-white">
//       {/* 1. PAGE CONTAINER (The Architectural Box) */}
//       <div className=" mx-auto">
//         {/* HEADER SECTION */}
//         <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6">
//           <div>
//             <span className="inline-block bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-2 transform -rotate-2">
//               Portfolio 2026
//             </span>
//             <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
//               Client <br /> Work
//             </h1>
//           </div>

//           {/* DECORATIVE ARROW */}
//           <div className="hidden md:block">
//             <svg
//               width="100"
//               height="100"
//               viewBox="0 0 100 100"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M50 0V80" stroke="black" strokeWidth="8" />
//               <path d="M10 50L50 90L90 50" stroke="black" strokeWidth="8" />
//             </svg>
//           </div>
//         </div>

//         {/* WORK LIST CONTAINER */}
//         <div className="max-w-7xl border-4 border-black bg-white shadow-[12px_12px_0px_0px_#000]">
//           {/* PROJECTS LOOP */}
//           <div>
//             {works.map((work, index) => (
//               <div
//                 key={work.id}
//                 className={`group grid grid-cols-1 lg:grid-cols-2 border-b-4 border-black last:border-b-0 min-h-[500px]`}
//               >
//                 {/* COLUMN A: IMAGE (Swaps side based on index) */}
//                 <div
//                   className={`relative h-[300px] lg:h-auto border-b-4 lg:border-b-0 border-black overflow-hidden ${index % 2 === 1 ? "lg:order-2 lg:border-l-4" : "lg:border-r-4"}`}
//                 >
//                   {/* Background Color Layer */}
//                   <div
//                     className={`absolute inset-0 ${work.color} opacity-20`}
//                   ></div>

//                   {/* Grid Pattern Overlay */}
//                   <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:16px_16px]"></div>

//                   {/* COLUMN A: IMAGE (Browser Window Style) */}
//                   <div
//                     className={`relative min-h-[400px] border-b-4 lg:border-b-0 border-black flex items-center justify-center p-6 md:p-12 bg-[#f0f0f0] ${index % 2 === 1 ? "lg:order-2 lg:border-l-4" : "lg:border-r-4"}`}
//                   >
//                     {/* Background Pattern (Subtle dots) */}
//                     <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

//                     {/* THE BROWSER CARD CONTAINER */}
//                     <div className="relative w-full transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
//                       {/* The Frame (Border + Shadow) */}
//                       <div className="relative w-full border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] group-hover:shadow-[16px_16px_0px_0px_#ff6b6b] transition-all duration-300 rounded-lg overflow-hidden">
//                         {/* 1. Browser Header Bar */}
//                         <div className="border-b-4 border-black bg-white p-3 flex items-center gap-3">
//                           {/* Window Controls */}
//                           <div className="flex gap-1.5">
//                             <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ff6b6b]"></div>
//                             <div className="w-3 h-3 rounded-full border-2 border-black bg-[#facc15]"></div>
//                             <div className="w-3 h-3 rounded-full border-2 border-black bg-[#4ecdc4]"></div>
//                           </div>
//                           {/* Fake URL Bar */}
//                           <div className="flex-1 border-2 border-black bg-gray-50 h-7 rounded px-3 flex items-center">
//                             <div className="w-3 h-3 bg-gray-400 rounded-full mr-2 opacity-50"></div>
//                             <span className="text-[10px] font-bold font-mono opacity-40 truncate w-full">
//                               {work.link}
//                             </span>
//                           </div>
//                         </div>

//                         {/* 2. The Screen / Image Area */}
//                         <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-200 border-t-0">
//                           <Image
//                             src={work.image}
//                             alt={work.title}
//                             fill
//                             className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
//                           />

//                           {/* 3. Hover Overlay (Interactive) */}
//                           <div
//                             className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm cursor-pointer"
//                             onClick={() => window.open(work.link, "_blank")}
//                           >
//                             <button className="bg-[#facc15] text-black px-6 py-3 font-black uppercase border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:scale-110 transition-transform">
//                               View Project ↗
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* COLUMN B: DETAILS */}
//                 <div
//                   className={`p-8 lg:p-16 flex flex-col justify-center bg-white hover:bg-gray-50 transition-colors ${index % 2 === 1 ? "lg:order-1" : ""}`}
//                 >
//                   {/* Meta Data */}
//                   <div className="flex items-center gap-4 mb-6">
//                     <span className="font-black text-4xl opacity-10">
//                       0{index + 1}
//                     </span>
//                     <span
//                       className={`px-3 py-1 border-2 border-black text-xs font-bold uppercase ${work.color}`}
//                     >
//                       {work.year}
//                     </span>
//                     <span className="text-sm font-bold uppercase text-gray-500">
//                       // {work.client}
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-[0.9]">
//                     {work.title}
//                   </h2>

//                   {/* Description */}
//                   {/* <p className="text-lg font-medium leading-relaxed opacity-80 mb-8 max-w-md">
//                     {work.description}
//                   </p> */}
//                   <ul className="text-base font-medium leading-relaxed opacity-90 mb-8 max-w-md space-y-3">
//                     {work.points.map((point, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <span className="w-2 h-2 mt-2 bg-black shrink-0"></span>
//                         <span>{point}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2 mb-10">
//                     {work.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="px-3 py-1 bg-gray-100 border border-black text-xs font-bold uppercase"
//                       >
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Action Link */}
//                   <Link
//                     href={work.link}
//                     target="_blank"
//                     className="inline-flex items-center gap-3 text-xl font-black uppercase hover:underline decoration-4 underline-offset-4 decoration-[#ff6b6b]"
//                   >
//                     Visit Website
//                     <svg
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="3"
//                     >
//                       <path d="M7 17L17 7M17 7H7M17 7V17" />
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* BOTTOM CTA */}
//         <div className="mt-12 text-center">
//           <p className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50">
//             Need something similar?
//           </p>
//           <Link
//             href="/#contact"
//             className="inline-block bg-[#facc15] border-4 border-black px-10 py-5 text-2xl font-black uppercase shadow-[8px_8px_0px_0px_#000] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] transition-all"
//           >
//             Start a Project
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  const works = [
    {
      id: 1,
      client: "Nargis Niaz",
      title: "Real Estate Website",
      points: [
        "Designed an attractive and responsive real estate website with a modern UI.",
        "Implemented dynamic property listings with detailed property pages and visuals.",
        "Built a structured blog section for real estate updates and content.",
        "Developed an Admin panel to manage properties, blog content, and website data.",
      ],
      tags: ["React.js", "Node.js", "MongoDB", "Cloudinary", "Tailwind"],
      image: "/project1.png", // Ensure this image exists in your public folder
      link: "https://www.eliteinemirates.com/",
      year: "2025",
      color: "bg-[#ff6b6b]", // Red Background for this project
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffdf5] pt-12 pb-24 px-4 md:px-8 font-mono text-black selection:bg-[#ff6b6b] selection:text-white">
      {/* 1. PAGE CONTAINER */}
      <div className=" mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-2 transform -rotate-2 shadow-[4px_4px_0px_0px_#4ecdc4]">
              Portfolio 2026
            </span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              Client <br /> Work
            </h1>
          </div>

          {/* DECORATIVE ARROW */}
          <div className="hidden md:block opacity-50">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              stroke="black"
              strokeWidth="8"
            >
              <path d="M50 0V80" />
              <path d="M10 50L50 90L90 50" />
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
                {/* COLUMN A: BROWSER MOCKUP (Swaps side based on index) */}
                <div
                  className={`relative p-6 md:p-12 bg-[#f0f0f0] border-b-4 lg:border-b-0 border-black flex items-center justify-center overflow-hidden ${index % 2 === 1 ? "lg:order-2 lg:border-l-4" : "lg:border-r-4"}`}
                >
                  {/* Background Color Blob */}
                  <div
                    className={`absolute inset-0 ${work.color} opacity-20`}
                  ></div>
                  {/* Dot Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

                  {/* === THE BROWSER WINDOW === */}
                  <div className="relative w-full transform transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]">
                    <div className="border-4 border-black bg-white rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] group-hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                      {/* Browser Header (Address Bar) */}
                      <div className="bg-white border-b-4 border-black p-3 flex items-center gap-3">
                        {/* 3 Dots */}
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full border-2 border-black bg-[#ff6b6b]"></div>
                          <div className="w-3 h-3 rounded-full border-2 border-black bg-[#facc15]"></div>
                          <div className="w-3 h-3 rounded-full border-2 border-black bg-[#4ecdc4]"></div>
                        </div>

                        {/* URL Bar */}
                        <div className="flex-1 border-2 border-black bg-gray-50 h-8 rounded px-3 flex items-center overflow-hidden">
                          <div className="w-3 h-3 bg-gray-400 rounded-full mr-2 shrink-0"></div>
                          <span className="text-[10px] md:text-xs font-bold font-mono text-gray-500 truncate">
                            {work.link}
                          </span>
                        </div>
                      </div>

                      {/* Image Screen Area */}
                      <div className="relative aspect-[16/10] w-full bg-gray-200 group-hover:brightness-100 transition-all">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                        />

                        {/* Hover Overlay Button */}
                        <div
                          className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] cursor-pointer"
                          onClick={() => window.open(work.link, "_blank")}
                        >
                          <span className="bg-[#facc15] text-black px-6 py-3 font-black uppercase border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:scale-105 transition-transform">
                            Visit Site ↗
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* === END BROWSER WINDOW === */}
                </div>

                {/* COLUMN B: DETAILS */}
                <div
                  className={`p-8 lg:p-12 flex flex-col justify-center bg-white hover:bg-gray-50 transition-colors ${index % 2 === 1 ? "lg:order-1" : ""}`}
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
                  <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 leading-[0.9]">
                    {work.title}
                  </h2>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-8">
                    {work.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm md:text-base font-medium opacity-90 leading-relaxed"
                      >
                        <span className="w-2 h-2 mt-2 bg-black shrink-0 rotate-45"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 border border-black text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <Link
                    href={work.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-lg font-black uppercase hover:underline decoration-4 underline-offset-4 decoration-[#ff6b6b]"
                  >
                    View Live Project
                    <svg
                      width="20"
                      height="20"
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
        <div className="mt-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50">
            Have a similar project?
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#facc15] border-4 border-black px-10 py-5 text-xl md:text-2xl font-black uppercase shadow-[8px_8px_0px_0px_#000] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000] transition-all"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </main>
  );
}

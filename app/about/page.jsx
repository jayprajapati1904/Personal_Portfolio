// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function About() {
//   return (
//     <main className="min-h-screen bg-[#fffdf5] font-mono text-black selection:bg-[#ff6b6b] selection:text-white pb-20">
//       {/* 1. HEADER SECTION */}
//       <div className="w-full border-b-4 border-black bg-white py-12 px-6 md:px-12 relative overflow-hidden">
//         {/* Background Noise */}
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           <span className="inline-block bg-[#ff6b6b] text-white px-3 py-1 text-sm font-bold uppercase tracking-widest mb-4 border-2 border-black shadow-[4px_4px_0px_0px_#000] transform -rotate-1">
//             The Origin Story
//           </span>
//           <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
//             FROM{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
//               ZERO
//             </span>{" "}
//             TO <br />
//             <span className="bg-black text-white px-2">FULL STACK.</span>
//           </h1>
//           <p className="text-lg md:text-xl font-bold max-w-2xl leading-relaxed">
//             I didn't start coding in the womb. In fact, back in 12th grade, I
//             didn't know a
//             <span className="bg-[#facc15] px-1 mx-1 border border-black">
//               loop
//             </span>{" "}
//             from a
//             <span className="bg-[#4ecdc4] px-1 mx-1 border border-black">
//               database
//             </span>
//             .
//           </p>
//         </div>
//       </div>

//       {/* 2. THE GRID LAYOUT */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 border-x-4 border-black shadow-[12px_12px_0px_0px_#000] mt-12 bg-white">
//         {/* LEFT COLUMN: THE STORY (8 Cols) */}
//         <div className="lg:col-span-8 p-8 md:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-black">
//           <h2 className="text-3xl font-black uppercase mb-12 border-b-4 border-black inline-block pb-2">
//             The Timeline
//           </h2>

//           {/* TIMELINE ITEM 1 */}
//           <div className="relative pl-8 md:pl-12 border-l-4 border-black pb-12 last:pb-0">
//             {/* Dot */}
//             <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white border-4 border-black rounded-full"></div>

//             <span className="text-xs font-bold uppercase bg-gray-200 px-2 py-1 border border-black mb-2 inline-block">
//               The Beginning (12th Grade)
//             </span>
//             <h3 className="text-2xl font-black uppercase mb-3">
//               The "I Know Nothing" Phase
//             </h3>
//             <p className="text-base font-medium opacity-80 leading-relaxed">
//               I entered the world of Computer Engineering completely blind.
//               While others were writing scripts, I was trying to figure out how
//               to print "Hello World". It was overwhelming, confusing, but I was
//               curious.
//             </p>
//           </div>

//           {/* TIMELINE ITEM 2 */}
//           <div className="relative pl-8 md:pl-12 border-l-4 border-black pb-12">
//             <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#ff6b6b] border-4 border-black rounded-full"></div>

//             <span className="text-xs font-bold uppercase bg-[#ff6b6b] text-white px-2 py-1 border border-black mb-2 inline-block">
//               Semesters 1 - 6
//             </span>
//             <h3 className="text-2xl font-black uppercase mb-3">
//               The Grind & The Click
//             </h3>
//             <p className="text-base font-medium opacity-80 leading-relaxed">
//               I spent these years absorbing everything. C, C++, Java, Data
//               Structures. But then I found <b>Web Development</b>. Suddenly,
//               code wasn't just logic; it was <i>visual</i>. It was creative. I
//               was hooked.
//             </p>
//           </div>

//           {/* TIMELINE ITEM 3 */}
//           <div className="relative pl-8 md:pl-12 border-l-4 border-black pb-12">
//             <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#facc15] border-4 border-black rounded-full"></div>

//             <span className="text-xs font-bold uppercase bg-[#facc15] text-black px-2 py-1 border border-black mb-2 inline-block">
//               The Internships
//             </span>
//             <h3 className="text-2xl font-black uppercase mb-3">
//               Real World Experience
//             </h3>
//             <p className="text-base font-medium opacity-80 leading-relaxed">
//               I joined <b>WebSeeder</b> (Feb '25) and later <b>Exito Systems</b>{" "}
//               (Sep '25). This is where I stopped being a student and started
//               being a developer. I learned how to manage databases, optimize
//               APIs, and ship production code.
//             </p>
//           </div>

//           {/* TIMELINE ITEM 4 */}
//           <div className="relative pl-8 md:pl-12 border-l-4 border-black">
//             <div className="absolute -left-[14px] top-0 w-6 h-6 bg-black border-4 border-black rounded-full animate-pulse"></div>

//             <span className="text-xs font-bold uppercase bg-black text-white px-2 py-1 border border-black mb-2 inline-block">
//               NOW (8th Semester)
//             </span>
//             <h3 className="text-2xl font-black uppercase mb-3">
//               The Professional
//             </h3>
//             <p className="text-base font-medium opacity-80 leading-relaxed">
//               Today, I am mastering the MERN Stack. I can build complex,
//               scalable applications from scratch. The confusion of 12th grade is
//               gone, replaced by a hunger to build the next big thing.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: STATS & PHOTO (4 Cols) */}
//         <div className="lg:col-span-4 bg-[#f0f0f0]">
//           {/* PHOTO CARD */}
//           <div className="border-b-4 border-black p-8">
//             <div className="relative w-full aspect-square border-4 border-black bg-white p-2 shadow-[8px_8px_0px_0px_#4ecdc4]">
//               {/* Replace with your image */}
//               <div className="relative w-full h-full bg-gray-300 overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-500">
//                 <Image
//                   src="/profile.jpg"
//                   alt="Jay Prajapati"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="absolute -bottom-4 -right-4 bg-white border-2 border-black px-3 py-1 text-xs font-bold uppercase rotate-[-5deg]">
//                 Level 8/8
//               </div>
//             </div>
//           </div>

//           {/* STATS CARD */}
//           <div className="p-8">
//             <h3 className="text-xl font-black uppercase mb-6 border-b-2 border-black inline-block">
//               Character Stats
//             </h3>

//             <div className="space-y-4 font-bold text-sm">
//               {/* Stat 1 */}
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span>Frontend (React/Next)</span>
//                   <span>95%</span>
//                 </div>
//                 <div className="w-full h-3 bg-white border-2 border-black">
//                   <div className="h-full bg-[#ff6b6b] w-[95%]"></div>
//                 </div>
//               </div>

//               {/* Stat 2 */}
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span>Backend (Node/Express)</span>
//                   <span>90%</span>
//                 </div>
//                 <div className="w-full h-3 bg-white border-2 border-black">
//                   <div className="h-full bg-[#4ecdc4] w-[90%]"></div>
//                 </div>
//               </div>

//               {/* Stat 3 */}
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span>Database (Mongo/SQL)</span>
//                   <span>85%</span>
//                 </div>
//                 <div className="w-full h-3 bg-white border-2 border-black">
//                   <div className="h-full bg-[#facc15] w-[85%]"></div>
//                 </div>
//               </div>

//               {/* Stat 4 */}
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span>Coffee Consumption</span>
//                   <span>110%</span>
//                 </div>
//                 <div className="w-full h-3 bg-white border-2 border-black">
//                   <div className="h-full bg-black w-full animate-pulse"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* BOTTOM BOX */}
//           <div className="border-t-4 border-black p-8 bg-[#facc15] text-center">
//             <p className="font-bold text-sm mb-2">Want to work with me?</p>
//             <Link
//               href="/#contact"
//               className="block w-full bg-black text-white py-3 font-bold uppercase border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all"
//             >
//               Hiring Open
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* 3. TECH STACK MARQUEE (To end the page) */}
//       <div className="max-w-7xl mx-auto mt-12 border-4 border-black bg-black text-white py-6 overflow-hidden relative">
//         <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
//         <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

//         <div className="whitespace-nowrap flex animate-scroll">
//           {[...Array(6)].map((_, i) => (
//             <span
//               key={i}
//               className="text-4xl font-black uppercase tracking-widest mx-8 opacity-50 hover:opacity-100 transition-opacity cursor-default"
//             >
//               REACT • NODE • NEXT.JS • MYSQL • MONGODB • TAILWIND
//             </span>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[#fffdf5] font-mono text-black selection:bg-[#ff6b6b] selection:text-white pb-20">
      {/* 1. HERO SECTION: The Hook */}
      <div className=" mx-auto pt-20 px-6 md:px-12 mb-20">
        <div className="border-l-8 border-black pl-6 md:pl-12">
          <p className="text-xl md:text-2xl font-bold text-gray-500 mb-4 uppercase tracking-widest">
            The Developer Log // Entry 001
          </p>
          <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] mb-8">
            I Built My Career <br />
            <span className="bg-[#ff6b6b] text-white px-4 py-1 transform -skew-x-6 inline-block mt-2 shadow-[8px_8px_0px_0px_#000]">
              One Line at a Time.
            </span>
          </h1>
          <p className="text-lg md:text-2xl font-medium max-w-3xl leading-relaxed">
            I’m Jay Prajapati. A Computer Engineering student (8th Sem) who
            turned curiosity into a profession. I didn't wait for a degree to
            start building. I just started.
          </p>
        </div>
      </div>

      {/* 2. THE STORY GRID */}
      <div className=" mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: The Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-12">
            {/* Chapter 1 */}
            <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#000]">
              <span className="text-6xl font-black text-gray-100 absolute -mt-20 -ml-8 -z-10">
                01
              </span>
              <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-4 inline-block">
                The "Zero" Phase
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In 12th grade, I was a blank slate. I didn't know what a
                variable was. Entering college was a shock—everyone seemed to
                know more than me. Instead of panicking, I got obsessed. I
                mastered <b>C, C++, and Java</b> not because I had to, but
                because I wanted to understand how machines <i>think</i>.
              </p>
            </div>

            {/* Chapter 2 */}
            <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#000] relative overflow-hidden">
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#facc15] rounded-bl-full z-0"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-4 inline-block">
                  The Turning Point
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Then I found <b>Web Development</b>. It was magic. I could
                  write code and see it instantly. I dove deep into the MERN
                  Stack (MongoDB, Express, React, Node). I built clones, broken
                  apps, and messy code until it started making sense.
                </p>
                <div className="flex gap-2 flex-wrap font-bold text-xs uppercase">
                  <span className="bg-black text-white px-2 py-1">React</span>
                  <span className="bg-black text-white px-2 py-1">Next.js</span>
                  <span className="bg-black text-white px-2 py-1">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>

            {/* Chapter 3: The First Client Story */}
            <div className="bg-[#4ecdc4] border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#000]">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white border-2 border-black p-2 rounded-full animate-bounce">
                  💰
                </div>
                <h2 className="text-3xl font-black uppercase">
                  The First Paycheck
                </h2>
              </div>

              <p className="text-lg font-bold leading-relaxed mb-4">
                "I didn't find my first client on LinkedIn. I found them in a
                random WhatsApp group."
              </p>
              <p className="text-base font-medium leading-relaxed mb-6">
                A
                <span className="mx-1 px-2 py-[2px] bg-yellow-300 text-black font-bold border-2 border-black inline-block">
                  simple message
                </span>
                in a group led to my
                <span className="mx-1 px-2 py-[2px] bg-black text-white font-bold border-2 border-black inline-block">
                  first freelance client
                </span>
                . By sharing my work,
                <span className="mx-1 px-2 py-[2px] bg-gray-200 text-black font-semibold border border-black inline-block">
                  communicating clearly
                </span>
                , and
                <span className="mx-1 px-2 py-[2px] bg-gray-200 text-black font-semibold border border-black inline-block">
                  building trust
                </span>
                , a small task turned into a
                <span className="mx-1 px-2 py-[2px] bg-[#ff6b6b] text-white font-bold border-2 border-black inline-block">
                  long-term collaboration
                </span>
                and opened the door to my freelancing journey.
              </p>

              <div className="bg-white border-2 border-black p-4 text-sm font-mono rotate-1">
                <p className="font-bold border-b border-black pb-2 mb-2">
                  PROJECT RECEIPT #001
                </p>

                <div className="flex justify-between">
                  <span>Service:</span>
                  <span>Real Estate Website Development</span>
                </div>

                <div className="flex justify-between">
                  <span>Client:</span>
                  <span>Confidential</span>
                </div>

                <div className="flex justify-between font-bold mt-2">
                  <span>Status:</span>
                  <span className="text-green-600">DELIVERED SUCCESSFULLY</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Stats & Contact (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24 h-fit">
            {/* Profile Card */}
            <div className="border-4 border-black bg-white p-2">
              <div className="relative aspect-[4/5] w-full bg-gray-200 border-2 border-black mb-4">
                <Image
                  src="/profile2.jpg"
                  alt="Jay Prajapati"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-center px-2">
                <h3 className="font-black text-xl uppercase">Jay Prajapati</h3>
                <span className="bg-black text-white text-xs px-2 py-1 font-bold">
                  Lvl 8 (Sem 8)
                </span>
              </div>
            </div>

            {/* "Why Me" List */}
            <div className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_#ff6b6b]">
              <h3 className="text-xl font-black uppercase mb-4 text-[#ff6b6b]">
                Why Clients Hire Me
              </h3>
              <ul className="space-y-4 font-bold text-sm">
                <li className="flex gap-3">
                  <span className="text-[#ff6b6b]">01.</span>I don't just code;
                  I solve business problems.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6b6b]">02.</span>I ship fast.
                  Deadlines are sacred.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6b6b]">03.</span>
                  From random WhatsApp gigs to Enterprise apps.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="block w-full bg-[#facc15] border-4 border-black p-6 text-center shadow-[8px_8px_0px_0px_#000] hover:translate-y-1 hover:shadow-none transition-all"
            >
              <span className="text-2xl font-black uppercase">
                Start a Project
              </span>
              <span className="block text-xs font-bold mt-1">
                Ready for the next challenge
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

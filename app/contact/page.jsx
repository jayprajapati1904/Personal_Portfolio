// // "use client";
// // import React from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { Mail, Phone, ArrowUpRight, CheckCircle2 } from "lucide-react";

// // export default function Contact() {
// //   return (
// //     <main className="min-h-screen bg-[#fffdf5] pt-12 pb-24 px-4 md:px-8 font-mono text-black selection:bg-[#ff6b6b] selection:text-white">
// //       {/* 1. PAGE HEADER */}
// //       <div className="max-w-7xl mx-auto mb-12">
// //         <div className="border-l-8 border-black pl-6 md:pl-12 py-4">
// //           <p className="text-xl md:text-2xl font-bold text-gray-500 mb-2 uppercase tracking-widest">
// //             Contact Me
// //           </p>
// //           <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter">
// //             LET'S <br />
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-[#ff4747]">
// //               COLLAB
// //             </span>
// //           </h1>
// //         </div>
// //       </div>

// //       {/* 2. CONTACT BENTO GRID */}
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// //         {/* CARD 1: EMAIL (Primary - Spans 2 cols on Desktop) */}
// //         <Link
// //           href="mailto:jay1904prajapati@gmail.com"
// //           className="md:col-span-2 group relative border-4 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_#000] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_#ff6b6b] transition-all duration-300 flex flex-col justify-between min-h-[300px]"
// //         >
// //           <div className="flex justify-between items-start">
// //             <div className="bg-black text-white px-4 py-1 text-sm font-bold uppercase rotate-[-2deg]">
// //               Primary Channel
// //             </div>
// //             <Mail
// //               strokeWidth={1.5}
// //               className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
// //             />
// //           </div>

// //           <div>
// //             <h2 className="text-2xl font-black uppercase text-gray-400 mb-2">
// //               Drop a Mail
// //             </h2>
// //             <p className="text-2xl md:text-5xl font-black uppercase break-all leading-none group-hover:text-[#ff6b6b] transition-colors">
// //               jay1904prajapati
// //               <br />
// //               @gmail.com
// //             </p>
// //           </div>

// //           <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
// //             <span className="font-bold border-b-2 border-black">Send Now</span>
// //             <ArrowUpRight className="w-5 h-5" />
// //           </div>
// //         </Link>

// //         {/* CARD 2: STATUS (Decorative Filler) */}
// //         <div className="border-4 border-black bg-[#facc15] p-8 md:p-12 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-center items-center text-center min-h-[300px]">
// //           <div className="relative mb-6">
// //             <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute -top-1 -right-1"></div>
// //             <CheckCircle2 strokeWidth={2} className="w-16 h-16 text-black" />
// //           </div>
// //           <h2 className="text-3xl font-black uppercase mb-2">Available</h2>
// //           <p className="font-bold text-sm">
// //             Currently accepting new freelance projects for Feb 2026.
// //           </p>
// //         </div>

// //         {/* CARD 3: PHONE (Direct Call) */}
// //         <Link
// //           href="tel:+919429468900"
// //           className="group border-4 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_#000] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_#000] transition-all duration-300 flex flex-col justify-between min-h-[300px]"
// //         >
// //           <Phone
// //             strokeWidth={1.5}
// //             className="w-16 h-16 group-hover:-rotate-12 transition-transform duration-300 block"
// //           />

// //           <div>
// //             <h2 className="text-xl font-black uppercase text-gray-400 mb-2">
// //               Direct Line
// //             </h2>
// //             <p className="text-3xl md:text-4xl font-black uppercase group-hover:underline decoration-4 decoration-black underline-offset-4">
// //               +91 94294
// //               <br />
// //               68900
// //             </p>
// //           </div>
// //         </Link>

// //         {/* CARD 4: WHATSAPP (Chat) */}
// //         <Link
// //           href="https://wa.me/919429468900"
// //           target="_blank"
// //           className="md:col-span-2 group border-4 border-black bg-[#25D366] p-8 md:p-12 shadow-[8px_8px_0px_0px_#000] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_#000] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between min-h-[250px]"
// //         >
// //           <div className="flex flex-col justify-between h-full">
// //             <div className="bg-black text-white px-4 py-1 text-sm font-bold uppercase w-fit mb-4">
// //               Fastest Response
// //             </div>
// //             <div>
// //               <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-2 leading-none">
// //                 WhatsApp
// //               </h2>
// //               <p className="font-bold text-black border-l-4 border-black pl-4">
// //                 Chat directly. No formalities.
// //                 <br />
// //                 Average response: 1 Hour
// //               </p>
// //             </div>
// //           </div>

// //           <div className="mt-8 md:mt-0">
// //             <Image
// //               src="/whatsapp.svg"
// //               alt="WhatsApp"
// //               width={96}
// //               height={96}
// //               className="group-hover:scale-110 transition-transform duration-300"
// //             />
// //           </div>
// //         </Link>
// //       </div>

// //       {/* 3. BOTTOM MARQUEE (To fill vertical space visually) */}
// //       <div className="max-w-7xl mx-auto mt-12 border-4 border-black bg-black text-white py-4 overflow-hidden">
// //         <div className="whitespace-nowrap flex animate-scroll">
// //           {[...Array(10)].map((_, i) => (
// //             <span
// //               key={i}
// //               className="text-2xl font-black uppercase tracking-widest mx-6"
// //             >
// //               AVAILABLE FOR FREELANCE • HIRE ME •
// //             </span>
// //           ))}
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Mail, Phone } from "lucide-react";

// export default function Contact() {
//   return (
//     <main className="min-h-screen bg-[#fffdf5] pt-12 pb-24 px-4 md:px-8 font-mono text-black selection:bg-[#ff6b6b] selection:text-white">
//       {/* ===============================
//           1. PAGE HEADER
//          =============================== */}
//       <div className="max-w-7xl mx-auto mb-16">
//         <div className="border-l-8 border-black pl-6 md:pl-12 py-4">
//           <p className="text-xl md:text-2xl font-bold text-gray-500 mb-2 uppercase tracking-widest">
//             Contact Me
//           </p>
//           <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter">
//             LET&apos;S <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-[#ff4747]">
//               COLLAB
//             </span>
//           </h1>
//         </div>
//       </div>

//       {/* ===============================
//           2. CONTACT GRID
//          =============================== */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//         {/* ===============================
//             EMAIL (PRIMARY)
//            =============================== */}
//         <Link
//           href="mailto:jay1904prajapati@gmail.com"
//           className="md:col-span-2 group relative border-4 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_#000] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_#ff6b6b] transition-all duration-300 flex flex-col justify-between min-h-[320px]"
//         >
//           <div className="flex justify-between items-start">
//             <span className="bg-black text-white px-4 py-1 text-xs font-bold uppercase rotate-[-2deg]">
//               Primary Channel
//             </span>
//             <Mail
//               strokeWidth={1.5}
//               className="w-14 h-14 group-hover:scale-110 transition-transform duration-300"
//             />
//           </div>

//           <div>
//             <h2 className="text-2xl font-black uppercase text-gray-400 mb-2">
//               Email Me
//             </h2>
//             <p className="text-2xl md:text-5xl font-black uppercase break-all leading-none group-hover:text-[#ff6b6b] transition-colors">
//               jay1904prajapati
//               <br />
//               @gmail.com
//             </p>
//           </div>

//           <span className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity font-bold border-b-2 border-black">
//             Send Now →
//           </span>
//         </Link>

//         {/* ===============================
//             STATUS (MINIMAL & TRUST)
//            =============================== */}
//         <div className="border-4 border-black bg-[#facc15] p-8 md:p-12 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-center min-h-[320px]">
//           <span className="text-xs font-bold uppercase tracking-widest mb-4 border-b-2 border-black pb-1 w-fit">
//             Status
//           </span>

//           <h2 className="text-4xl font-black uppercase mb-4 leading-none">
//             Available
//           </h2>

//           <p className="font-bold text-sm max-w-xs">
//             Currently accepting new freelance and contract-based projects.
//           </p>

//           <div className="mt-6 flex items-center gap-2">
//             <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
//             <span className="text-xs font-bold uppercase">Active</span>
//           </div>
//         </div>

//         {/* ===============================
//             PHONE
//            =============================== */}
//         <Link
//           href="tel:+919429468900"
//           className="group border-4 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_#000] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_#000] transition-all duration-300 flex flex-col justify-between min-h-[320px]"
//         >
//           <span className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 w-fit mb-6">
//             Direct Call
//           </span>

//           <p className="text-4xl font-black uppercase leading-none">
//             +91 94294
//             <br />
//             68900
//           </p>

//           <Phone
//             strokeWidth={1.5}
//             className="w-10 h-10 self-end opacity-40 group-hover:opacity-100 transition-opacity"
//           />
//         </Link>

//         {/* ===============================
//             WHATSAPP (SECONDARY HERO)
//            =============================== */}
//         <Link
//           href="https://wa.me/919429468900"
//           target="_blank"
//           className="md:col-span-2 group border-4 border-black bg-[#25D366] p-8 md:p-12 shadow-[8px_8px_0px_0px_#000] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_#000] transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between min-h-[260px]"
//         >
//           <div>
//             <span className="inline-block bg-black text-white px-3 py-1 text-xs font-bold uppercase mb-4">
//               Fastest Response
//             </span>

//             <h2 className="text-5xl md:text-6xl font-black uppercase text-white leading-none mb-4">
//               WhatsApp
//             </h2>

//             <p className="font-bold text-black border-l-4 border-black pl-4 max-w-sm">
//               Chat directly and discuss your project.
//               <br />
//               Avg response time: ~1 hour
//             </p>
//           </div>

//           <Image
//             src="/whatsapp.svg"
//             alt="WhatsApp"
//             width={88}
//             height={88}
//             className="mt-8 md:mt-0 group-hover:scale-110 transition-transform"
//           />
//         </Link>
//       </div>

//       {/* ===============================
//           3. BOTTOM MARQUEE
//          =============================== */}
//       <div className="max-w-7xl mx-auto mt-16 border-4 border-black bg-black text-white py-3 overflow-hidden">
//         <div className="whitespace-nowrap flex animate-scroll opacity-80">
//           {[...Array(8)].map((_, i) => (
//             <span
//               key={i}
//               className="text-xl font-black uppercase tracking-widest mx-8"
//             >
//               AVAILABLE FOR FREELANCE •
//             </span>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MessageCircle,
  Copy,
  Check,
  ArrowUpRight,
  Clock,
  MapPin,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  // Real-time clock for Ahmedabad (IST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("jay1904prajapati@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#fffdf5] pt-12 pb-24 px-4 md:px-8 font-mono text-black selection:bg-[#ff6b6b] selection:text-white">
      {/* 1. HEADER SECTION (with Live Status) */}
      <div className=" mx-auto mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="border-l-8 border-black pl-6 md:pl-12 py-2">
          <div className="flex items-center gap-3 mb-2 text-gray-500 font-bold text-xs md:text-sm uppercase tracking-widest">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Online Now
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {time} (IST)
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter">
            GET IN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-black">
              TOUCH.
            </span>
          </h1>
        </div>

        {/* Location Badge */}
        <div className="hidden md:flex items-center gap-2 border-2 border-black px-4 py-2 bg-white shadow-[4px_4px_0px_0px_#000]">
          <MapPin className="w-4 h-4 text-[#ff6b6b]" />
          <span className="font-bold text-xs uppercase">Ahmedabad, India</span>
        </div>
      </div>

      {/* 2. DASHBOARD GRID */}
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        {/* === LEFT COL: EMAIL TERMINAL (Span 7) === */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* EMAIL CARD (Terminal Style) */}
          <div className="group relative border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#4ecdc4] hover:-translate-y-1 transition-all duration-300">
            {/* Fake Terminal Header */}
            <div className="bg-black text-white p-3 flex justify-between items-center border-b-4 border-black">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff6b6b]"></div>
                <div className="w-3 h-3 rounded-full bg-[#facc15]"></div>
                <div className="w-3 h-3 rounded-full bg-[#4ecdc4]"></div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                bash — email-client
              </span>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <p className="text-gray-400 font-bold mb-4 text-sm">
                // Click to copy or send directly
              </p>

              <div className="text-3xl md:text-5xl font-black break-all mb-8 group-hover:text-[#4ecdc4] transition-colors leading-tight">
                jay1904prajapati
                <br />
                @gmail.com
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="mailto:jay1904prajapati@gmail.com"
                  className="flex-1 bg-black text-white px-6 py-4 font-bold uppercase border-2 border-black hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_#000] transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" /> Send Mail
                </Link>

                <button
                  onClick={handleCopy}
                  className="flex-1 bg-[#f0f0f0] text-black px-6 py-4 font-bold uppercase border-2 border-black hover:bg-[#4ecdc4] hover:text-black hover:shadow-[4px_4px_0px_0px_#000] transition-all flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                  {copied ? "Copied!" : "Copy Address"}
                </button>
              </div>
            </div>
          </div>

          {/* WHATSAPP CARD (Wide) */}
          <Link
            href="https://wa.me/919429468900"
            target="_blank"
            className="group relative border-4 border-black bg-[#25D366] p-8 shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-y-1 transition-all overflow-hidden flex justify-between items-center"
          >
            <div className="relative z-10">
              <span className="bg-black text-white px-3 py-1 text-[10px] font-bold uppercase mb-2 inline-block">
                Fastest Reply
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-white leading-none mb-1">
                WhatsApp Chat
              </h2>
              <p className="font-bold text-black text-sm md:text-base">
                +91 94294 68900
              </p>
            </div>

            <div className=" p-4  group-hover:rotate-12 transition-transform">
              <Image
                src="/whatsapp.svg"
                alt="WhatsApp"
                width={88}
                height={88}
                className="mt-8 md:mt-0 group-hover:scale-110 transition-transform "
              />
            </div>
          </Link>
        </div>

        {/* === RIGHT COL: PHONE & INFO (Span 5) === */}
        <div className="lg:col-span-5 flex flex-col gap-8 h-full">
          {/* PHONE CARD (Emergency Style) */}
          <Link
            href="tel:+919429468900"
            className="flex-grow group border-4 border-black bg-[#ff6b6b] p-8 md:p-10 shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] hover:-translate-y-1 transition-all flex flex-col justify-between min-h-[300px]"
          >
            <div className="flex justify-between items-start">
              <span className="bg-white border-2 border-black px-3 py-1 font-bold text-xs uppercase shadow-[2px_2px_0px_0px_#000]">
                Hotline / Urgent
              </span>
              <Phone className="w-10 h-10 text-black fill-black animate-pulse" />
            </div>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase mb-2 opacity-70 border-b-2 border-black pb-1 w-fit">
                Dial Direct
              </p>

              <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] tracking-tighter">
                +91 94294
                <br />
                68900
              </h2>

              {/* 👇 NEW CONTEXT COPY */}
              <p className="mt-6 max-w-xs text-sm font-bold leading-relaxed opacity-80">
                For urgent discussions, quick clarifications, or time-sensitive
                project needs. Ideal when a fast response matters.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t-4 border-black flex justify-between items-center group-hover:bg-black group-hover:text-white transition-colors p-2 -mx-2 -mb-2 rounded-sm">
              <span className="font-bold uppercase tracking-widest text-sm">
                Call Now
              </span>
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </div>

      {/* 3. SCROLLING TICKER */}
      {/* 3. SCROLLING TICKER */}
      <div className="mx-auto mt-16 border-4 border-black bg-black text-white py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="text-lg md:text-xl font-black uppercase tracking-widest mx-8"
            >
              • NO FORMS • NO SPAM • JUST CODE • DIRECT CONTACT •
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}

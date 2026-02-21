import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    // CHANGE 1: Added 'border-b-0' to remove bottom border
    // CHANGE 2: Added 'mt-8' to give some space from the navbar (optional)
    <main className="w-full  mx-auto border-x-4 border-t-4 border-b-0 border-black grid grid-cols-1 lg:grid-cols-12  mt-8 bg-white font-mono text-black selection:bg-[#ff6b6b] selection:text-white">
      {/* 1. TOP BAR: Name */}
      <div className="lg:col-span-8 border-b-4 lg:border-r-4 border-black p-8 md:p-12 flex flex-col justify-center bg-white hover:bg-[#ff6b6b] hover:text-white transition-colors duration-300 group cursor-default">
        <p className="font-bold text-xs md:text-sm tracking-widest mb-2 opacity-60 group-hover:text-black">
          PORTFOLIO 2026
        </p>
        <h1 className="text-4xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none break-words">
          JAY <br className="hidden md:block" /> PRAJAPATI
        </h1>
      </div>

      {/* 2. TOP RIGHT: Availability */}
      <div className="lg:col-span-4 border-b-4 border-black p-8 flex flex-col justify-between bg-[#4ecdc4] text-black min-h-[200px]">
        <div className="w-full flex justify-between items-start">
          <span className="text-4xl font-black opacity-50">01</span>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border-2 border-black rounded-full shadow-[2px_2px_0px_0px_#000]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600 border border-black"></span>
            </span>
            <span className="text-sm font-bold tracking-wide text-black uppercase">
              Available <span className="hidden sm:inline">for work</span>
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold border-b-2 border-black pb-1 mb-2 inline-block">
            STATUS
          </h3>
          <p className="text-xl md:text-2xl font-bold leading-tight">
            FULLSTACK DEV &<br /> FREELANCER
          </p>
        </div>
      </div>

      {/* 3. MIDDLE LEFT: The Image */}
      <div className="lg:col-span-5 lg:row-span-2 border-b-4 lg:border-b-0 lg:border-r-4 border-black relative h-[400px] md:h-125 lg:h-auto min-h-[600px] group overflow-hidden">
        <Image
          src="/profile.jpg"
          alt="Jay Prajapati"
          fill
          className="object-cover md:object-[center_10%] transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white font-mono text-xs md:text-sm">
            📍 AHMEDABAD, INDIA
          </p>
        </div>
      </div>

      {/* 4. MIDDLE CENTER: Role & Description */}
      <div className="lg:col-span-7 border-b-4 border-black p-8 md:p-12 flex flex-col justify-center bg-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="bg-black text-white px-2 decoration-clone">
            FULL STACK
          </span>{" "}
          <br className="md:hidden" /> DEVELOPER
        </h2>
        <p className="text-base md:text-xl text-[#444] font-medium leading-relaxed max-w-2xl">
          With
          <span className="mx-1 px-2 py-[2px] bg-[#ff6b6b] text-white font-black border-2 border-black -rotate-1 inline-block">
            1+ years
          </span>
          of real-world and
          <span className="mx-1 px-2 py-[2px] bg-yellow-300 text-black font-black border-2 border-black rotate-1 inline-block">
            freelance experience
          </span>
          , I build websites that are fast, functional, and unapologetically
          bold. I specialize in
          <span className="border-b-2 border-[#ff6b6b] mx-1 md:mx-2 font-bold text-black whitespace-nowrap">
            React
          </span>
          ,
          <span className="border-b-2 border-[#ff6b6b] mx-1 md:mx-2 font-bold text-black whitespace-nowrap">
            Next.js
          </span>
          , and
          <span className="border-b-2 border-[#ff6b6b] mx-1 md:mx-2 font-bold text-black whitespace-nowrap">
            UI Design
          </span>
          — turning complex ideas into sharp, usable digital products for
          clients and real-world projects.
        </p>
      </div>

      {/* 5. BOTTOM RIGHT: Call to Action */}
      <div className="lg:col-span-7 flex flex-col sm:flex-row min-h-[100px]">
        <a
          href="/Jay_Prajapati_CV.pdf"
          download
          className="flex-1 bg-white hover:bg-black hover:text-white border-b-4 sm:border-b-0 sm:border-r-4 border-black p-6 text-lg md:text-xl font-bold flex items-center justify-center gap-2 transition-all group"
        >
          DOWNLOAD CV{" "}
          <span className="group-hover:translate-y-1 transition-transform">
            ↓
          </span>
        </a>
        <Link
          href="/contact"
          className="flex-1 bg-[#ff6b6b] hover:bg-[#ff4747] text-white p-6 text-lg md:text-xl font-bold flex items-center justify-center gap-2 transition-all"
        >
          LET'S TALK <span>→</span>
        </Link>
      </div>
    </main>
  );
}

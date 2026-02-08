import Link from "next/link";
import Image from "next/image";

export default function Experience() {
  return (
    // 'border-t-0' removes the top border so it merges with the Services section above
    <section className="w-full mx-auto border-x-4 border-b-4 border-black bg-white text-black font-mono border-t-0 relative z-20">
      {/* HEADER STRIP */}
      <div className="bg-black text-white hover:bg-white hover:text-black p-4 flex justify-between items-center border-b-4 border-black">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
          Work History
        </h2>
        {/* <span className="text-xs font-bold border border-white px-2 py-1 rounded-full animate-pulse">
          2 YEARS EXP
        </span> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* ==========================================
            JOB 1: EXITO SYSTEMS (Current)
           ========================================== */}

        {/* LEFT: Dates (Span 3) */}
        <div className="lg:col-span-3 bg-[#fffdf5] p-8 border-b-4 lg:border-b-0 lg:border-r-4 border-black flex flex-col justify-center relative">
          <div className="inline-block bg-green-500 text-black border-2 border-black px-3 py-1 text-xs font-bold uppercase -rotate-2 absolute top-6 right-6 shadow-[2px_2px_0px_0px_#000]">
            Current
          </div>
          <span className="text-6xl font-black opacity-10">01</span>
          <p className="text-xl font-bold mt-2">SEP 2025</p>
          <p className="text-sm opacity-60">To Present</p>
        </div>

        {/* RIGHT: Details (Span 9) */}
        <div className="lg:col-span-9 p-8 md:p-12 relative overflow-hidden group">
          <h3 className="text-3xl font-black uppercase mb-2">
            Software Development Intern
          </h3>
          <div className="flex flex-wrap gap-2 mb-6 text-sm font-bold items-center">
            <Image
              src="/exitoSystems.png"
              alt="Exito Systems Logo"
              width={50}
              height={50}
              className="border  bg-white p-1"
            />
            <span className="text-[#4ecdc4]">@ EXITO SYSTEMS PVT LTD</span>
            <span>•</span>
            <span>AHMEDABAD</span>
          </div>

          <div className="bg-gray-100 p-6 border-l-4 border-black mb-6 relative">
            <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rotate-3 border border-black">
              Working
            </div>

            <p className="text-base font-medium leading-relaxed mb-2">
              Worked as a
              <span className="mx-1 px-2 py-[2px] bg-black text-white font-bold border-2 border-black inline-block">
                Frontend Developer
              </span>
              at
              <span className="mx-1 px-2 py-[2px] bg-yellow-300 text-black font-bold border-2 border-black inline-block">
                Exito Systems
              </span>
              , contributing to production-level web applications in the
              <span className="mx-1 px-2 py-[2px] bg-gray-200 text-black font-semibold border border-black inline-block">
                trading
              </span>
              and
              <span className="mx-1 px-2 py-[2px] bg-gray-200 text-black font-semibold border border-black inline-block">
                sports-tech
              </span>
              domain. Built responsive and scalable UI components using
              <span className="mx-1 px-2 py-[2px] bg-[#ff6b6b] text-white font-bold border-2 border-black inline-block whitespace-nowrap">
                React
              </span>
              and
              <span className="mx-1 px-2 py-[2px] bg-[#ff6b6b] text-white font-bold border-2 border-black inline-block whitespace-nowrap">
                Next.js
              </span>
              , integrated
              <span className="mx-1 px-2 py-[2px] bg-gray-200 text-black font-semibold border border-black inline-block">
                REST APIs
              </span>
              , and implemented complex state-driven features such as
              <span className="mx-1 px-2 py-[2px] bg-gray-200 text-black font-semibold border border-black inline-block">
                dashboards
              </span>
              ,
              <span className="mx-1 px-2 py-[2px] bg-gray-200 text-black font-semibold border border-black inline-block">
                prediction flows
              </span>
              , and
              <span className="mx-1 px-2 py-[2px] bg-gray-200 text-black font-semibold border border-black inline-block">
                data-driven views
              </span>
              while focusing on performance and usability.
            </p>
          </div>

          <Link
            href="https://exitosystems.com"
            target="_blank"
            className="inline-block px-6 py-3 bg-white border-2 border-black font-bold uppercase hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_#000]"
          >
            Visit Company ↗
          </Link>
        </div>

        {/* DIVIDER LINE (Visual break) */}
        <div className="col-span-1 lg:col-span-12 h-4 bg-black border-y-4 border-white stripe-pattern"></div>

        {/* ==========================================
            JOB 2: WEBSEEDER (Past)
           ========================================== */}

        {/* LEFT: Dates (Span 3) */}
        <div className="lg:col-span-3 bg-[#fffdf5] p-8 border-b-4 lg:border-b-0 lg:border-r-4 border-black flex flex-col justify-center">
          <span className="text-6xl font-black opacity-10">02</span>
          <p className="text-xl font-bold mt-2">FEB 2025</p>
          <p className="text-sm opacity-60">To APR 2025</p>
        </div>

        {/* RIGHT: Details (Span 9) */}
        <div className="lg:col-span-9 p-8 md:p-12">
          <h3 className="text-3xl font-black uppercase mb-2">
            Web Developer Intern
          </h3>
          <div className="flex flex-wrap gap-2 mb-6 text-sm font-bold items-center">
            <Image
              src="/webseeder.webp"
              alt="WebSeeder Logo"
              width={50}
              height={50}
              className="border  bg-white p-1"
            />
            <span className="text-[#ff6b6b]">@ WEBSEEDER</span>
            <span>•</span>
            <span>REMOTE / HYBRID</span>
          </div>

          <div className="bg-gray-100 p-6 border-l-4 border-black mb-6 relative">
            <p className="text-lg font-medium leading-relaxed mb-6 ">
              Built a strong foundation in
              <span className="mx-1 px-2 py-[2px] bg-black text-white font-bold border-2 border-black inline-block">
                web architecture
              </span>
              by creating real-world landing pages using
              <span className="mx-1 px-2 py-[2px] bg-yellow-300 text-black font-bold border-2 border-black inline-block whitespace-nowrap">
                HTML
              </span>
              ,
              <span className="mx-1 px-2 py-[2px] bg-yellow-300 text-black font-bold border-2 border-black inline-block whitespace-nowrap">
                CSS
              </span>
              , and
              <span className="mx-1 px-2 py-[2px] bg-yellow-300 text-black font-bold border-2 border-black inline-block whitespace-nowrap">
                JavaScript
              </span>
              . Began my journey into
              <span className="mx-1 px-2 py-[2px] bg-[#ff6b6b] text-white font-bold border-2 border-black inline-block">
                React components
              </span>
              while focusing on
              <span className="mx-1 px-2 py-[2px] bg-gray-200 text-black font-semibold border border-black inline-block">
                responsive design
              </span>
              ,
              <span className="mx-1 px-2 py-[2px] bg-gray-200 text-black font-semibold border border-black inline-block">
                layout consistency
              </span>
              , and
              <span className="mx-1 px-2 py-[2px] bg-gray-200 text-black font-semibold border border-black inline-block">
                cross-device usability
              </span>
              .
            </p>
          </div>

          <Link
            href="https://webseeder.com"
            target="_blank"
            className="inline-block text-sm font-bold uppercase border-b-2 border-black hover:text-[#ff6b6b] hover:border-[#ff6b6b] transition-colors"
          >
            Visit Website ↗
          </Link>
        </div>
      </div>

      {/* Decorative Stripe Pattern CSS */}
      <style jsx>{`
        .stripe-pattern {
          background-image: linear-gradient(
            45deg,
            #000 25%,
            transparent 25%,
            transparent 50%,
            #000 50%,
            #000 75%,
            transparent 75%,
            transparent
          );
          background-size: 10px 10px;
        }
      `}</style>
    </section>
  );
}

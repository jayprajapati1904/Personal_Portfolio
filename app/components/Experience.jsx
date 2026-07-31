import Link from "next/link";
import Image from "next/image";

export default function Experience() {
  return (
    // 'border-t-0' removes the top border so it merges with the Services section above
    <section className="w-full mx-auto border-4 border-black bg-white text-black font-mono relative z-20">
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
          <h3 className="text-3xl font-black uppercase mb-1">
            Software Dev Intern → Junior Software Developer
          </h3>
          <p className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-widest">
            Sep 2025 – Apr 2026 (Intern) &nbsp;→&nbsp;{" "}
            <span className="text-green-600">
              May 2026 – Present (Junior Dev)
            </span>
          </p>
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

            <ul className="space-y-3 text-sm font-medium leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-black shrink-0 rotate-45"></span>
                <span>
                  Contributed to a comprehensive{" "}
                  <span className="px-1 py-[1px] bg-black text-white font-bold border border-black inline-block">
                    Payroll SaaS
                  </span>{" "}
                  platform — unifying workforce operations, attendance
                  management, IoT biometric devices, and cross-platform mobile
                  (React Native) experiences into a unified digital ecosystem.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-black shrink-0 rotate-45"></span>
                <span>
                  Orchestrated data infrastructure for a{" "}
                  <span className="px-1 py-[1px] bg-[#ff6b6b] text-white font-bold border border-black inline-block">
                    FIFA World Cup
                  </span>{" "}
                  prediction platform (Sportskins), powering automated match
                  sync, prediction evaluation, and real-time leaderboards at
                  scale.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-black shrink-0 rotate-45"></span>
                <span>
                  Crafted responsive and engaging interfaces for the{" "}
                  <span className="px-1 py-[1px] bg-yellow-300 text-black font-bold border border-black inline-block">
                    Himalaya Jets
                  </span>{" "}
                  platform — transforming design concepts into modern,
                  user-centric web experiences across multiple content modules.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-black shrink-0 rotate-45"></span>
                <span>
                  Enhanced{" "}
                  <span className="px-1 py-[1px] bg-[#4ecdc4] text-black font-bold border border-black inline-block">
                    TradeMatrix
                  </span>{" "}
                  — a strategy-driven trading platform — enabling traders to
                  design, validate, and deploy custom strategies across leading
                  brokerage ecosystems.
                </span>
              </li>
            </ul>
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
            Full-Stack Developer Intern
          </h3>
          <div className="flex flex-wrap gap-2 mb-6 text-sm font-bold items-center">
            <Image
              src="/webseeder.webp"
              alt="WebSeeder Logo"
              width={50}
              height={50}
              className="border  bg-white p-1"
            />
            <span className="text-[#ff6b6b]">
              @ WEBSEEDER TECHNOLOGIES PVT LTD
            </span>
            <span>•</span>
            <span>REMOTE / HYBRID</span>
          </div>

          <div className="bg-gray-100 p-6 border-l-4 border-black mb-6 relative">
            <ul className="space-y-3 text-sm font-medium leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-black shrink-0 rotate-45"></span>
                <span>
                  Developed a full-stack{" "}
                  <span className="px-1 py-[1px] bg-yellow-300 text-black font-bold border border-black inline-block">
                    eCommerce
                  </span>{" "}
                  solution with secure payment processing via{" "}
                  <span className="px-1 py-[1px] bg-black text-white font-bold border border-black inline-block">
                    Razorpay
                  </span>{" "}
                  and comprehensive admin capabilities for end-to-end business
                  operations.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-black shrink-0 rotate-45"></span>
                <span>
                  Contributed to a{" "}
                  <span className="px-1 py-[1px] bg-[#ff6b6b] text-white font-bold border border-black inline-block">
                    MERN-based
                  </span>{" "}
                  task management platform — enhancing collaboration, organizing
                  workflows, and improving team productivity.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-black shrink-0 rotate-45"></span>
                <span>
                  Elevated UX through responsive interface design and frontend
                  optimization, ensuring seamless interactions across all
                  devices and platforms.
                </span>
              </li>
            </ul>
          </div>

          <Link
            href="https://webseeder.com"
            target="_blank"
            className="inline-block px-6 py-3 bg-white border-2 border-black font-bold uppercase hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_#000]"
          >
            Visit Company ↗
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

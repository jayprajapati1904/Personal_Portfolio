export default function Services() {
  return (
    // CHANGE: Added 'shadow-[8px_8px_0px_0px_#000000]' so it aligns depth with Hero
    <section className="w-full mx-auto border-3 border-black bg-white text-black font-mono ">
      {/* 1. INFINITE MARQUEE (The "Ticker" Tape) */}
      <div className="w-full border-b-4 border-black bg-yellow-400 overflow-hidden py-4">
        <div className="whitespace-nowrap flex animate-scroll">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-3xl md:text-4xl font-black uppercase tracking-widest mx-8"
            >
              • REACT.JS • NEXT.JS • PYTHON • AI AUTOMATION • UI/UX DESIGN
            </span>
          ))}
        </div>
      </div>

      {/* 2. SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
        {/* Service 1 */}
        <div className="p-8 hover:bg-gray-800 hover:text-white transition-colors group">
          <span className="text-5xl mb-6 block">💻</span>
          <h3 className="text-2xl font-black mb-4 uppercase">
            Web
            <br />
            Development
          </h3>
          <p className="font-medium text-sm leading-relaxed opacity-80 mb-6">
            I build fast, SEO-friendly websites using Next.js and MERN Stack.
          </p>
          <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-current pb-1 group-hover:border-white">
            See Packages ↘
          </button>
        </div>

        {/* Service 2 */}
        <div className="p-8 bg-[#ff6b6b]  hover:bg-gray-700 hover:text-white transition-colors group">
          <span className="text-5xl mb-6 block">🤖</span>
          <h3 className="text-2xl font-black mb-4 uppercase">
            AI &<br />
            Automation
          </h3>
          <p className="font-medium text-sm leading-relaxed opacity-90 mb-6">
            I integrate Python AI models into web apps (WhatsApp/Telegram bots).
          </p>
          <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-current pb-1 group-hover:border-white">
            View Case Studies ↘
          </button>
        </div>

        {/* Service 3 */}
        <div className="p-8 hover:bg-gray-500 hover:text-white transition-colors group bg-amber-100">
          <span className="text-5xl mb-6 block">🎨</span>
          <h3 className="text-2xl font-black mb-4 uppercase">
            UI/UX &<br />
            Design
          </h3>
          <p className="font-medium text-sm leading-relaxed opacity-80 mb-6">
            Neo-Brutalist, minimal, or modern interfaces that convert users.
          </p>
          <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-current pb-1 group-hover:border-white">
            See Portfolio ↘
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: "⌨️",
    color: "bg-white",
    skills: ["C++", "Python", "JavaScript", "PHP"],
  },
  {
    title: "Frontend Technologies",
    icon: "🎨",
    color: "bg-[#ff6b6b] text-white",
    skills: [
      "React.js",
      "Next.js",
      "Streamlit",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend Technologies",
    icon: "⚙️",
    color: "bg-[#4ecdc4]",
    skills: ["Node.js", "Express.js", "FastAPI", "Laravel"],
  },
  {
    title: "Mobile Development",
    icon: "📱",
    color: "bg-[#facc15]",
    skills: ["React Native", "Expo"],
  },
  {
    title: "Databases & Data",
    icon: "🗄️",
    color: "bg-white",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Database Design"],
  },
  {
    title: "AI & Automation",
    icon: "🤖",
    color: "bg-black text-white",
    skills: ["OpenRouter API", "LLM Integrations", "Workflow Automation"],
  },
  {
    title: "APIs & Integrations",
    icon: "🔌",
    color: "bg-white",
    skills: [
      "REST APIs",
      "Google Drive API",
      "Meta (Facebook) API",
      "X (Twitter) API",
      "Razorpay",
      "SportMonks API",
      "Third-Party Integrations",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    color: "bg-[#facc15]",
    skills: ["Git", "GitHub", "GitHub Actions"],
  },
  {
    title: "Core Competencies",
    icon: "🧠",
    color: "bg-[#4ecdc4]",
    skills: [
      "System Design",
      "Problem Solving",
      "Data Scraping",
      "Data Pipelines",
      "Data Processing",
      "Collaboration",
    ],
  },
];

const MARQUEE_SKILLS = [
  "REACT",
  "NEXT.JS",
  "NODE.JS",
  "PYTHON",
  "MONGODB",
  "POSTGRESQL",
  "REACT NATIVE",
  "LARAVEL",
  "TAILWIND",
  "REST APIs",
  "AI AUTOMATION",
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#fffdf5] font-mono text-black selection:bg-[#ff6b6b] selection:text-white pb-20">
      {/* 1. HERO SECTION */}
      <div className="mx-auto pt-20 px-6 md:px-12 mb-20">
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
            I&apos;m Jay Prajapati. I&apos;ve completed my degree in Computer
            Engineering and turned curiosity into a profession. I didn&apos;t
            wait for a degree to start building. I just started.
          </p>
        </div>
      </div>

      {/* 2. THE STORY GRID */}
      <div className="mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: The Narrative */}
          <div className="lg:col-span-7 space-y-12">
            <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#000]">
              <span className="text-6xl font-black text-gray-100 absolute -mt-20 -ml-8 -z-10">
                01
              </span>
              <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-4 inline-block">
                The &quot;Zero&quot; Phase
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In 12th grade, I was a blank slate. I didn&apos;t know what a
                variable was. Entering college was a shock—everyone seemed to
                know more than me. Instead of panicking, I got obsessed. I
                mastered <b>C, C++, and Python</b> not because I had to, but
                because I wanted to understand how machines <i>think</i>.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#000] relative overflow-hidden">
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

            <div className="bg-[#4ecdc4] border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#000]">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white border-2 border-black p-2 rounded-full">
                  🏢
                </div>
                <h2 className="text-3xl font-black uppercase">
                  Real Company Experience
                </h2>
              </div>

              <p className="text-base font-bold leading-relaxed mb-6">
                I didn&apos;t just learn in classrooms — I shipped production
                code at real companies, working alongside engineering teams on
                live products used by thousands of users.
              </p>

              <div className="space-y-4">
                <div className="bg-white border-2 border-black p-4 text-sm font-mono">
                  <p className="font-black border-b border-black pb-2 mb-3 uppercase tracking-widest">
                    Exito Systems Pvt Ltd
                  </p>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold">Role:</span>
                    <span>Intern → Junior Software Developer</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold">Duration:</span>
                    <span>Sep 2025 – Present</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold">Products:</span>
                    <span>Payroll SaaS, Sportskins, TradeMatrix</span>
                  </div>
                  <div className="flex justify-between font-bold mt-2">
                    <span>Status:</span>
                    <span className="text-green-600">CURRENTLY EMPLOYED ✓</span>
                  </div>
                </div>

                <div className="bg-white border-2 border-black p-4 text-sm font-mono">
                  <p className="font-black border-b border-black pb-2 mb-3 uppercase tracking-widest">
                    Webseeder Technologies Pvt Ltd
                  </p>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold">Role:</span>
                    <span>Full-Stack Developer Intern</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold">Duration:</span>
                    <span>Feb 2025 – Apr 2025</span>
                  </div>
                  <div className="flex justify-between font-bold mt-2">
                    <span>Status:</span>
                    <span className="text-blue-600">COMPLETED ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Stats & Contact */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24 h-fit">
            <div className="border-4 border-black bg-white p-2">
              <div className="relative aspect-4/5 w-full bg-gray-200 border-2 border-black mb-4">
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
                  Computer Engineer
                </span>
              </div>
            </div>

            <div className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_#ff6b6b]">
              <h3 className="text-xl font-black uppercase mb-4 text-[#ff6b6b]">
                Why Companies Hire Me
              </h3>
              <ul className="space-y-4 font-bold text-sm">
                <li className="flex gap-3">
                  <span className="text-[#ff6b6b]">01.</span>I&apos;ve shipped
                  production code in real engineering teams — not just side
                  projects.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6b6b]">02.</span>I ramp up fast.
                  Give me a codebase and I&apos;m contributing within days.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6b6b]">03.</span>Full-stack depth —
                  frontend, backend, mobile, databases, APIs.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ff6b6b]">04.</span>9.21 CGPA. I take
                  both learning and delivery seriously.
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="block w-full bg-[#facc15] border-4 border-black p-6 text-center shadow-[8px_8px_0px_0px_#000] hover:translate-y-1 hover:shadow-none transition-all"
            >
              <span className="text-2xl font-black uppercase">
                Open to Opportunities
              </span>
              <span className="block text-xs font-bold mt-1">
                Available for full-time roles — let&apos;s talk
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. TECHNICAL SKILLS & TOOLKIT */}
      <section className="mx-auto px-4 md:px-8 mt-24">
        <div className="border-l-8 border-black pl-6 md:pl-12 mb-12">
          <p className="text-xl font-bold text-gray-500 mb-2 uppercase tracking-widest">
            Resume // Skills Inventory
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
            Technical Skills,
            <br />
            <span className="bg-black text-white px-3 py-1 inline-block mt-2 shadow-[6px_6px_0px_0px_#ff6b6b]">
              Knowledge & Toolkit
            </span>
          </h2>
          <p className="text-base md:text-lg font-medium max-w-2xl mt-6 leading-relaxed opacity-80">
            The languages, frameworks, and tools I use to build full-stack web
            apps, mobile experiences, data pipelines, and AI automation — pulled
            straight from my resume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className={`${category.color} border-4 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000] transition-all`}
            >
              <div className="flex items-center gap-3 mb-5 border-b-4 border-black pb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-sm md:text-base font-black uppercase tracking-wide leading-tight">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-bold uppercase border-2 border-black px-2 py-1 bg-white text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SKILLS MARQUEE */}
      <div className="mx-auto px-4 md:px-8 mt-12">
        <div className="border-4 border-black bg-black text-white py-5 overflow-hidden">
          <div className="whitespace-nowrap flex animate-skills-scroll">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-xl md:text-3xl font-black uppercase tracking-widest mx-8 shrink-0"
              >
                {MARQUEE_SKILLS.map((skill) => `• ${skill}`).join(" ")} •
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes skills-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-skills-scroll {
          animation: skills-scroll 20s linear infinite;
        }
      `}</style>
    </main>
  );
}

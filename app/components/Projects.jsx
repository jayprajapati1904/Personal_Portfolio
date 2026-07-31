import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "Payroll SaaS Platform",
      category: "SAAS • HRMS",
      description:
        "Built a comprehensive HRMS & Payroll SaaS supporting employee management, attendance, leave workflows, payroll processing, and role-based administration. Integrated mobile apps, IoT biometric devices, remote attendance, and location-aware tracking for distributed teams. Automated salary calculations, overtime, deductions, and payslip generation.",
      tech: ["Node.js", "Next.js", "React Native", "React.js", "PostgreSQL"],
      links: {
        demo: "#",
        code: "https://github.com/jayprajapati1904",
      },
      color: "bg-[#4ecdc4]",
    },
    {
      id: "02",
      title: "Sportskins — FIFA Prediction",
      category: "SPORTS-TECH • DATA",
      description:
        "Architected the backend and data infrastructure of a large-scale sports prediction platform supporting 1,000+ active users across FIFA World Cup & Premier League. Engineered resilient pipelines integrating the SportMonks API for automated match sync and result processing. Built scoring engines, leaderboards, and secure payment validation.",
      tech: ["PHP", "Laravel", "React.js", "MySQL", "Sportsmonk API"],
      links: {
        demo: "#",
        code: "https://github.com/jayprajapati1904",
      },
      color: "bg-[#ff6b6b]",
    },
    {
      id: "03",
      title: "Mahendra Ke Namkeen",
      category: "ECOMMERCE • PRODUCTION",
      description:
        "Production-ready eCommerce platform combining intuitive customer UX with comprehensive admin controls. Implemented secure payment and identity workflows via Razorpay. Architected backend systems for order lifecycles, customer data, and operational analytics enabling sustainable business growth.",
      tech: ["Next.js", "Node.js", "MongoDB", "Razorpay API"],
      links: {
        demo: "#",
        code: "https://github.com/jayprajapati1904",
      },
      color: "bg-[#facc15]",
    },
    {
      id: "04",
      title: "Image Data Pipeline",
      category: "DATA • AUTOMATION",
      description:
        "Automated image data collection pipeline ingesting large-scale datasets from the Pixabay API, orchestrating storage workflows across Google Drive and MongoDB. Engineered a scalable architecture managing 50,000+ image assets with metadata tracking. Built a monitoring dashboard to detect duplicates, validate integrity, and reconcile inconsistencies.",
      tech: ["React.js", "Node.js", "Python", "Google Drive API", "MongoDB"],
      links: {
        demo: "#",
        code: "https://github.com/jayprajapati1904",
      },
      color: "bg-white",
    },
    {
      id: "05",
      title: "Facebook Post AI Bot",
      category: "AI • AUTOMATION",
      description:
        "AI-powered social media automation platform with a Streamlit interface, enabling users to transform simple topics into platform-ready content. Integrated OpenRouter LLMs and Facebook Graph API to automate content creation and publishing — eliminating manual effort with seamless end-to-end posting from ideation to publication.",
      tech: ["Python", "Streamlit", "Meta API", "OpenRouter API"],
      links: {
        demo: "#",
        code: "https://github.com/jayprajapati1904",
      },
      color: "bg-[#4ecdc4]",
    },
    {
      id: "06",
      title: "E-Commerce & Admin Panel",
      category: "FULL STACK • MERN",
      description:
        "Built a full-featured e-commerce web application with separate User and Admin panels, secure authentication, and role-based access. Users can browse products and place orders, while the Admin dashboard provides complete control over products, users, and order management.",
      tech: ["Next.js", "Node.js", "React.js", "PostgreSQL", "Tailwind"],
      links: {
        demo: "https://shahcreation.techorbitra.com/",
        code: "https://github.com/jayprajapati1904",
      },
      color: "bg-[#ff6b6b]",
    },
    {
      id: "07",
      title: "Real-Time Chat App",
      category: "SOCKET.IO • REALTIME",
      description:
        "Built a secure real-time chat application supporting private and group conversations using WebSocket-based communication. Implemented user authentication, end-to-end message flow, live typing indicators, and read receipts, with a clean and responsive UI designed using DaisyUI for a smooth messaging experience.",
      tech: ["Socket.io", "Express", "React", "MongoDB", "DaisyUI"],
      links: {
        demo: "https://live-chat-app-nmmz.onrender.com",
        code: "https://github.com/jayprajapati1904",
      },
      color: "bg-[#facc15]",
    },
    {
      id: "08",
      title: "DevBlog Platform",
      category: "CONTENT • CMS",
      description:
        "Built a technology-focused blogging platform where developers can publish articles and users can read, like, and comment on posts. The application includes a unified Admin and User panel for managing blogs, comments, and user interactions, delivering a clean, scalable, and engaging content-sharing experience.",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind"],
      links: {
        demo: "https://mern-project-mcwd.onrender.com/",
        code: "https://github.com/jayprajapati1904",
      },
      color: "bg-white",
    },
  ];

  return (
    // 'border-t-0' merges this section with the Experience section above
    <section
      id="work"
      className="w-full mx-auto border-x-4 border-b-4 border-black bg-white text-black font-mono  border-t-0 relative z-10"
    >
      {/* HEADER */}
      <div className="bg-black text-white hover:bg-white hover:text-black p-6 md:p-8 border-b-4 border-black flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
          Projects & Case Studies
        </h2>
        <a
          href="https://github.com/jayprajapati1904"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-sm font-bold uppercase tracking-widest border border-white hover:border-black px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer">
            View GitHub Profile ↗
          </p>
        </a>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`
              group relative p-8 md:p-12 border-b-4 border-black 
              ${index % 2 === 0 ? "md:border-r-4" : ""} 
              hover:bg-[#fffdf5] transition-colors
            `}
          >
            {/* Top Bar: ID and Category */}
            <div className="flex justify-between items-start mb-6">
              <span className="text-5xl font-black opacity-10 group-hover:opacity-100 transition-opacity duration-300">
                {project.id}
              </span>
              <span
                className={`text-[10px] font-bold uppercase tracking-widest border-2 border-black px-2 py-1 ${project.color}`}
              >
                {project.category}
              </span>
            </div>

            {/* Project Title */}
            <h3 className="text-3xl font-black uppercase mb-4 leading-none group-hover:translate-x-2 transition-transform duration-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="font-medium text-sm leading-relaxed opacity-80 mb-6 ">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-bold bg-gray-100 border border-black px-2 py-1"
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Link
                href={project.links.demo}
                className="flex-1 bg-black text-white text-center py-3 font-bold border-2 border-black hover:bg-transparent hover:text-black shadow-[4px_4px_0px_0px_#000000] active:translate-y-[2px] active:shadow-none transition-all"
              >
                LIVE DEMO
              </Link>
              <Link
                href={project.links.code}
                className="flex-1 bg-white text-black text-center py-3 font-bold border-2 border-black hover:bg-[#ff6b6b] hover:text-white shadow-[4px_4px_0px_0px_#000000] active:translate-y-[2px] active:shadow-none transition-all"
              >
                CODE
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER CTA */}
      <div className="bg-[#facc15] p-8 text-center border-t-0">
        <h3 className="text-2xl font-bold uppercase mb-4">
          Have a project in mind?
        </h3>
        <Link
          href="/contact"
          className="inline-block bg-black text-white px-8 py-4 font-black text-xl border-2 border-black hover:bg-white hover:text-black shadow-[6px_6px_0px_0px_#fff] hover:shadow-[6px_6px_0px_0px_#000] transition-all"
        >
          LET'S BUILD IT ⚡
        </Link>
      </div>
    </section>
  );
}

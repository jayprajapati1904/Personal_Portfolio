import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "E-Commerce & Admin Panel",
      category: "FULL STACK • MERN",
      description:
        "Built a full-featured e-commerce web application with separate User and Admin panels, secure authentication, and role-based access. Users can browse products and place orders, while the Admin dashboard provides complete control over products, users, and order management.",
      tech: ["nextjs", "Node.js", "reactjs", "postgresql", "tailwind"],
      links: { demo: "https://shahcreation.techorbitra.com/", code: "" },
      color: "bg-[#4ecdc4]", // Teal
    },
    {
      id: "02",
      title: "ShopEase Payment",
      category: "FINTECH • INTEGRATION",
      description:
        "Built the ShopEase e-commerce platform with secure user authentication, cart and order management, and Razorpay payment integration. Implemented a safe checkout flow with payment verification, ensuring secure transactions, reliable order processing, and a smooth shopping experience.",
      tech: ["Next.js", "Razorpay API", "Node.js", "Neon postgres", "Tailwind"],
      links: { demo: "https://shop-ease-eight-omega.vercel.app/", code: "#" },
      color: "bg-[#ff6b6b]", // Red
    },
    {
      id: "03",
      title: "Real-Time Chat App",
      category: "SOCKET.IO • REALTIME",
      description:
        "Built a secure real-time chat application supporting private and group conversations using WebSocket-based communication. Implemented user authentication, end-to-end message flow, live typing indicators, and read receipts, with a clean and responsive UI designed using DaisyUI for a smooth messaging experience.",
      tech: ["Socket.io", "Express", "React", "mongodb", "daisyui"],
      links: { demo: "https://live-chat-app-nmmz.onrender.com", code: "#" },
      color: "bg-[#facc15]", // Yellow
    },
    {
      id: "04",
      title: "DevBlog Platform",
      category: "CONTENT • CMS",
      description:
        "Built a technology-focused blogging platform where developers can publish articles and users can read, like, and comment on posts. The application includes a unified Admin and User panel for managing blogs, comments, and user interactions, delivering a clean, scalable, and engaging content-sharing experience.",
      tech: ["Reactjs", "Node.js", "mongodb", "tailwind"],
      links: { demo: "https://mern-project-mcwd.onrender.com/", code: "#" },
      color: "bg-white", // White
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
          href="#contact"
          className="inline-block bg-black text-white px-8 py-4 font-black text-xl border-2 border-black hover:bg-white hover:text-black shadow-[6px_6px_0px_0px_#fff] hover:shadow-[6px_6px_0px_0px_#000] transition-all"
        >
          LET'S BUILD IT ⚡
        </Link>
      </div>
    </section>
  );
}

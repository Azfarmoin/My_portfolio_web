import React from "react";

const projects = [
  {
    title: "Modern Portfolio",
    description:
      "A fully responsive developer portfolio with animations, glass UI and smooth interactions.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    live: "/projects/portfolio",
    github: "https://github.com/yourusername/project",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application with cart system, payments integration and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    live: "/projects/ecommerce",
    github: "https://github.com/yourusername/project",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Modern analytics dashboard with authentication, charts and real-time data updates.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    live: "/projects/saas",
    github: "https://github.com/yourusername/project",
  },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.23-3.23-.12-.3-.53-1.53.12-3.19 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.01 2.05.14 3.01.41 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.89.12 3.19.77.84 1.23 1.92 1.23 3.23 0 4.62-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Projects = () => {
  const projectCount = projects.length;

  return (
    <section className="min-h-screen bg-[#003366] py-60 px-6">
      <div className="max-w-7xl mx-auto">
        

        {/* SINGLE ROW - DYNAMIC SIZE */}
        <div className="flex gap-6 md:gap-8 overflow-hidden">

          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                group
                flex-shrink-0
                rounded-3xl
                overflow-hidden
                shadow-xl
                transition-all duration-300
                hover:shadow-[0_25px_70px_rgba(0,128,128,0.45)]
                hover:-translate-y-2
                bg-white/5
                backdrop-blur-xl
                border border-white/10
              `}
              style={{
                // dynamically calculate width based on number of projects
                width: `calc((100% - ${6 * (projectCount - 1)}px) / ${projectCount})`,
                minWidth: "220px", // prevent cards from getting too small
              }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={`${project.image}?auto=format&fit=crop&w=1200&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-transparent to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="p-5 lg:p-7 flex flex-col justify-between h-[clamp(200px,22vw,280px)]">
                <div>
                  <h3 className="text-base lg:text-lg xl:text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <a
                    href={project.live}
                    className="relative px-5 py-2.5 text-sm font-semibold tracking-wide rounded-xl text-white overflow-hidden bg-gradient-to-r from-[#008080] to-[#00b3b3] shadow-[0_4px_15px_rgba(0,128,128,0.4)] transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,128,128,0.8)] hover:-translate-y-1"
                  >
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                      <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-white/20 skew-x-[-20deg] group-hover:left-[125%] transition-all duration-700" />
                    </span>
                    <span className="relative z-10 text-white">View Project</span>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/github relative flex items-center justify-center w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md transition-all duration-300 hover:bg-[#008080] hover:border-[#008080] hover:shadow-[0_8px_25px_rgba(0,128,128,0.6)] hover:-translate-y-1"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;

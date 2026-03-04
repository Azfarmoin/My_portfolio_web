import React from "react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.23-3.23-.12-.3-.53-1.53.12-3.19 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.01 2.05.14 3.01.41 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.89.12 3.19.77.84 1.23 1.92 1.23 3.23 0 4.62-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Projects = ({ title = "Featured Projects", projects = [] }) => {
  return (
    <section className=" w-full flex flex-nowrap py-15 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          {title}
        </h2>

        {/* BLOCK GRID LAYOUT */}
        <div className="w-full flex flex-nowrap gap-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-1 min-w-0 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,128,128,0.45)] bg-white/5 backdrop-blur-xl border border-white/10"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between min-h-[220px]">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <a
                    href={project.live}
                    className="px-5 py-2.5 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-[#008080] to-[#00b3b3] shadow-lg transition-all hover:scale-105 active:scale-95"
                  >
                    View Project
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-[#008080] transition-colors"
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
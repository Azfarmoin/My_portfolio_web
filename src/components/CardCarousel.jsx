
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Projects from "./ProjectCards";

// ─── Step 1: Custom hook to detect screen size ───────────────────────────────
// Returns true if screen width is small (less than 768px = Tailwind's "md")
function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 1025);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 1025);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  return isSmall;
}

// ─── Step 2: A single reusable project card (for mobile view) ────────────────
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.23-3.23-.12-.3-.53-1.53.12-3.19 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.01 2.05.14 3.01.41 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.89.12 3.19.77.84 1.23 1.92 1.23 3.23 0 4.62-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
//  const SingleCard = ({ project }) => (
//    <div className=" w-auto  h-auto object-covergroup flex flex-col rounded-3xl overflow-hidden shadow-xl bg-white/5 backdrop-blur-xl border border-white/10 mx-4 my-4">
//      <div className="relative aspect-[16/10] overflow-hidden">
//        <img
//          src={project.image}
//         alt={project.title}
//         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent" />
//     </div>
//     <div className="p-6 flex flex-col justify-between min-h-[200px]">
//       <div>
//         <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
//         <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{project.description}</p>
//       </div>
//       <div className="flex items-center justify-between mt-6">
//         {/* Fixed missing <a> tags */}
//         <a
//           href={project.live}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-5 py-2.5 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-[#008080] to-[#00b3b3] shadow-lg transition-all hover:scale-105 active:scale-95"
//         >
//           View Project
//         </a>

//         <a
//           href={project.github}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-[#008080] transition-colors"
//         >
//           <GithubIcon />
//         </a>
//       </div>
//     </div>
//   </div>
// );

const SingleCard = ({ project, compact = false }) => (
  <div className={`group flex flex-col rounded-3xl overflow-hidden shadow-xl bg-white/5 backdrop-blur-xl border border-white/10 
    ${compact ? "mx-8 my-3 max-w-xs" : "mx-4 my-4"}`}>
    
    <div className={`relative overflow-hidden ${compact ? "aspect-[16/9] max-h-28" : "aspect-[16/10]"}`}>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent" />
    </div>

    <div className={`flex flex-col justify-between ${compact ? "p-4 min-h-[140px]" : "p-6 min-h-[200px]"}`}>
      <div>
        <h3 className={`font-semibold text-white mb-1 ${compact ? "text-sm" : "text-lg"}`}>{project.title}</h3>
        <p className={`text-gray-300 leading-relaxed line-clamp-2 ${compact ? "text-xs" : "text-sm"}`}>{project.description}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-semibold rounded-xl text-white bg-gradient-to-r from-[#008080] to-[#00b3b3] shadow-lg transition-all hover:scale-105 active:scale-95
            ${compact ? "px-3 py-1.5 text-xs" : "px-5 py-2.5 text-sm"}`}
        >
          View Project
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white hover:bg-[#008080] transition-colors
            ${compact ? "w-8 h-8" : "w-11 h-11"}`}
        >
          <GithubIcon />
        </a>

      </div>
    </div>
  </div>
);

// ─── Step 3: Main Carousel Component ─────────────────────────────────────────
const CardCarousel = () => {
  const isSmall = useIsSmallScreen(); // true on mobile, false on tablet/desktop

  // ── Your project data (unchanged) ──
  const myprojects = [
    {
      title: "Modern Portfolio",
      description: "A fully responsive developer portfolio with animations, glass UI and smooth interactions.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      live: "/projects/portfolio",
      github: "https://github.com/yourusername/project",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with cart system, payments integration and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      live: "/projects/ecommerce",
      github: "https://github.com/yourusername/project",
    },
    {
      title: "SaaS Dashboard",
      description: "Modern analytics dashboard with authentication, charts and real-time data updates.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      live: "/projects/saas",
      github: "https://github.com/yourusername/project",
    },
  ];

  const saasProjects = [
    {
      title: "Multi-Tenant SaaS CRM",
      description: "Production-ready SaaS CRM with multi-tenant architecture, JWT authentication, Stripe subscription billing, role-based access control, and real-time notifications using WebSockets. Built with MERN stack and deployed on AWS.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      live: "https://crm-demo.com",
      github: "https://github.com/azfar/saas-crm",
    },
    {
      title: "AI-Powered Resume Analyzer",
      description: "Fullstack AI application that analyzes resumes using OpenAI API, provides ATS scoring, keyword suggestions, and job matching. Includes user authentication, file uploads, and dashboard analytics.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      live: "https://resume-ai-demo.com",
      github: "https://github.com/azfar/ai-resume-analyzer",
    },
    {
      title: "Real-Time Collaboration Tool",
      description: "Google Docs–style collaborative editor built with React, Node.js, Socket.io, and MongoDB. Features real-time updates, cursor tracking, version history, and authentication system.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      live: "https://collab-editor-demo.com",
      github: "https://github.com/azfar/realtime-collab",
    },
  ];

  const backendProjects = [
    {
      title: "Scalable E-Commerce Microservices",
      description: "Microservices-based e-commerce backend using Node.js, Express, MongoDB, Redis caching, and RabbitMQ for event-driven architecture.",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      live: "https://ecommerce-api-demo.com",
      github: "https://github.com/azfar/ecommerce-microservices",
    },
    {
      title: "High-Performance REST API",
      description: "Optimized REST API handling 10k+ concurrent users using clustering, rate limiting, Redis caching, and JWT authentication.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      live: "https://api-demo.com/docs",
      github: "https://github.com/azfar/high-performance-api",
    },
    {
      title: "Job Queue & Background Processing System",
      description: "Background job processing system using BullMQ and Redis for handling email notifications, report generation, and scheduled tasks.",
      image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9",
      live: "https://queue-system-demo.com",
      github: "https://github.com/azfar/job-queue-system",
    },
  ];

  const frontendProjects = [
    {
      title: "Advanced Analytics Dashboard",
      description: "Interactive analytics dashboard built with React, Recharts, and Framer Motion. Includes dynamic filtering, lazy loading, and responsive dark/light themes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      live: "https://analytics-dashboard-demo.com",
      github: "https://github.com/azfar/analytics-dashboard",
    },
    {
      title: "3D Portfolio with Three.js",
      description: "High-performance 3D portfolio using React Three Fiber with optimized rendering, smooth camera transitions, and interactive 3D elements.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      live: "https://3d-portfolio-demo.com",
      github: "https://github.com/azfar/3d-portfolio",
    },
    {
      title: "Design System & Component Library",
      description: "Reusable enterprise-level component library built with React and TypeScript. Includes custom hooks, accessibility support (ARIA), and Storybook documentation.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
      live: "https://design-system-demo.com",
      github: "https://github.com/azfar/design-system",
    },
  ];

  // ── Step 4: Combine ALL projects into one flat array for mobile ──
  // Each project becomes its own slide on small screens
  const allGroups = [
    { label: "My Work", projects: myprojects },
    { label: "Frontend Engineering", projects: frontendProjects },
    { label: "Backend Engineering", projects: backendProjects },
    { label: "SaaS Applications", projects: saasProjects },
  ];

  // ─────────────────────────────────────────────────────────────────────────
  // MOBILE VIEW: 1 card per slide
  // ─────────────────────────────────────────────────────────────────────────
  if (isSmall) {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        swipeable={true}
        emulateTouch={true}
        showThumbs={false}
        showStatus={false}
        transitionTime={500}
      >
        {allGroups.flatMap((group) =>
          group.projects.map((project, i) => (
            <div key={`${group.label}-${i}`}>
              {/* Show category label above each card */}
              <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-2 px-4">
                {group.label}
              </p>
              <div className="w-1/2flex justify-center">
              <SingleCard project={project}  />
              </div>
            </div>
          ))
        )}
      </Carousel>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // DESKTOP VIEW: All 3 cards per slide (your original layout)
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={2500}
      swipeable={true}
      emulateTouch={true}
      centerMode={true}
      centerSlidePercentage={80}
      transitionTime={600}
      showThumbs={false}
      showStatus={false}

    >
      <div className="card"><div className="card-content"><Projects title="My Work" projects={myprojects} /></div></div>
      <div className="card"><div className="card-content"><Projects title="Frontend Engineering" projects={frontendProjects} compact={true} /></div></div>
      <div className="card"><div className="card-content"><Projects title="Backend Engineering" projects={backendProjects} /></div></div>
      <div className="card"><div className="card-content"><Projects title="SaaS Applications" projects={saasProjects} /></div></div>
    </Carousel>
  );
};

export default CardCarousel;
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Projects from "./ProjectCards";
const CardCarousel = () => {
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
      description:
        "Production-ready SaaS CRM with multi-tenant architecture, JWT authentication, Stripe subscription billing, role-based access control, and real-time notifications using WebSockets. Built with MERN stack and deployed on AWS.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      live: "https://crm-demo.com",
      github: "https://github.com/azfar/saas-crm",
    },
    {
      title: "AI-Powered Resume Analyzer",
      description:
        "Fullstack AI application that analyzes resumes using OpenAI API, provides ATS scoring, keyword suggestions, and job matching. Includes user authentication, file uploads, and dashboard analytics.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      live: "https://resume-ai-demo.com",
      github: "https://github.com/azfar/ai-resume-analyzer",
    },
    {
      title: "Real-Time Collaboration Tool",
      description:
        "Google Docs–style collaborative editor built with React, Node.js, Socket.io, and MongoDB. Features real-time updates, cursor tracking, version history, and authentication system.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      live: "https://collab-editor-demo.com",
      github: "https://github.com/azfar/realtime-collab",
    },
  ];
  const backendProjects = [
    {
      title: "Scalable E-Commerce Microservices",
      description:
        "Microservices-based e-commerce backend using Node.js, Express, MongoDB, Redis caching, and RabbitMQ for event-driven architecture. Includes authentication service, product service, order service, and payment integration.",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      live: "https://ecommerce-api-demo.com",
      github: "https://github.com/azfar/ecommerce-microservices",
    },
    {
      title: "High-Performance REST API",
      description:
        "Optimized REST API handling 10k+ concurrent users using clustering, rate limiting, Redis caching, and JWT authentication. Includes automated testing with Jest and CI/CD pipeline.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      live: "https://api-demo.com/docs",
      github: "https://github.com/azfar/high-performance-api",
    },
    {
      title: "Job Queue & Background Processing System",
      description:
        "Background job processing system using BullMQ and Redis for handling email notifications, report generation, and scheduled tasks with retry mechanisms and monitoring dashboard.",
      image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9",
      live: "https://queue-system-demo.com",
      github: "https://github.com/azfar/job-queue-system",
    },
  ]; const frontendProjects = [
    {
      title: "Advanced Analytics Dashboard",
      description:
        "Interactive analytics dashboard built with React, Recharts, and Framer Motion. Includes dynamic filtering, lazy loading, authentication, and responsive dark/light themes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      live: "https://analytics-dashboard-demo.com",
      github: "https://github.com/azfar/analytics-dashboard",
    },
    {
      title: "3D Portfolio with Three.js",
      description:
        "High-performance 3D portfolio using React Three Fiber with optimized rendering, smooth camera transitions, and interactive 3D elements. Fully responsive and SEO optimized.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      live: "https://3d-portfolio-demo.com",
      github: "https://github.com/azfar/3d-portfolio",
    },
    {
      title: "Design System & Component Library",
      description:
        "Reusable enterprise-level component library built with React and TypeScript. Includes custom hooks, accessibility support (ARIA), theme system, and Storybook documentation.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
      live: "https://design-system-demo.com",
      github: "https://github.com/azfar/design-system",
    },
  ];
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
    >
      <div className="card">
        <div className="card-content">

          <Projects title="My Work" projects={myprojects} />;
        </div>
      </div>

      <div className="card">
        <div className="card-content">

          <Projects title="Frontend Engineering" projects={frontendProjects} />
        </div>
      </div>


      <div className="card">
        <div className="card-content">

          <Projects title="Backend Engineering" projects={backendProjects} />
        </div>
      </div>

      <div className="card">
        <div className="card-content">

          <Projects title="SaaS Applications" projects={saasProjects} />
        </div>
      </div>
    </Carousel>
  );
};

export default CardCarousel;
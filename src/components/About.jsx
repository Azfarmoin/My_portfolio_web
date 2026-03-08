import React, { useRef, useEffect } from "react";
import divTransition from "./DivTran.jsx";
import HeroParagraph from "./Heropara.jsx";
import pic from "../assets/azfarpf.png";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Tailwind", icon: "🎨" },
  { name: "GSAP", icon: "✨" },
];

const stats = [
  { value: "2+", label: "Years Exp." },
  { value: "20+", label: "Projects" },
  { value: "10+", label: "Clients" },
];

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    if (!aboutRef.current) return;
    const cleanup = divTransition(
      aboutRef.current,
      200,
      1,
      "top bottom",
      "center center",
      "bottom bottom",
      "half"
    );
    return cleanup;
  }, []);

  return (
    <>
      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .about-section { font-family: 'DM Sans', sans-serif; }
        .about-heading { font-family: 'Cormorant Garamond', serif; }

        .img-reveal::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 20px;
          background: linear-gradient(135deg, #2dd4bf, #06b6d4, #3b82f6, transparent 60%);
          z-index: 0;
          animation: borderGlow 4s ease-in-out infinite alternate;
        }

        @keyframes borderGlow {
          0%   { opacity: 0.5; filter: blur(0px); }
          100% { opacity: 1;   filter: blur(2px); }
        }

        .skill-pill {
          position: relative;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .skill-pill::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(45,212,191,0.3), rgba(6,182,212,0.3));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: inherit;
        }
        .skill-pill:hover {
          transform: translateY(-3px) scale(1.05);
          border-color: rgba(45,212,191,0.7);
          box-shadow: 0 8px 24px rgba(45,212,191,0.25);
        }
        .skill-pill:hover::after { opacity: 1; }

        .stat-card {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .stat-card:hover { transform: translateY(-4px); }

        .resume-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .resume-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        .resume-btn:hover::before { left: 100%; }
        .resume-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(45,212,191,0.45);
        }

        .noise-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
        }

        .float-shape {
          animation: floatShape 6s ease-in-out infinite;
        }
        .float-shape-2 {
          animation: floatShape 8s ease-in-out infinite reverse;
        }
        @keyframes floatShape {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-18px) rotate(5deg); }
        }

        .divider-line {
          background: linear-gradient(90deg, #2dd4bf, #06b6d4, transparent);
          animation: expandLine 1s ease-out forwards;
          transform-origin: left;
        }
        @keyframes expandLine {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        .tag-badge {
          background: linear-gradient(135deg, rgba(45,212,191,0.15), rgba(6,182,212,0.1));
          border: 1px solid rgba(45,212,191,0.3);
          color: #2dd4bf;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 100px;
          text-transform: uppercase;
        }
      `}</style>

      <section
        ref={aboutRef}
        className="about-section mt-32 mb-24 relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 py-20 md:py-28 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #020c1b 0%, #011628 40%, #002147 75%, #003366 100%)" }}
      >
        {/* Noise texture overlay */}
        <div className="noise-overlay absolute inset-0 pointer-events-none z-0" />

        {/* Grid lines background */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ambient glow blobs */}
        <div className="absolute top-[-5%] left-[-5%] w-[40vw] h-[40vw] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(45,212,191,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 65%)" }} />
        <div className="absolute top-[40%] left-[50%] w-[30vw] h-[30vw] rounded-full pointer-events-none z-0"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />

        {/* Floating geometric accents */}
        <div className="float-shape absolute top-16 right-[12%] w-20 h-20 border border-teal-400/20 rounded-full pointer-events-none z-0" />
        <div className="float-shape-2 absolute bottom-24 left-[8%] w-14 h-14 border border-cyan-400/20 rotate-45 pointer-events-none z-0" />
        <div className="float-shape absolute top-[35%] right-[5%] w-8 h-8 bg-teal-400/10 rounded-full pointer-events-none z-0" />
        <div
          className="float-shape-2 absolute top-[15%] left-[20%] pointer-events-none z-0 opacity-20"
          style={{ width: 3, height: 80, background: "linear-gradient(to bottom, #2dd4bf, transparent)" }}
        />

        {/* Main content */}
        <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center gap-14 md:gap-20">

          {/* ─── LEFT: IMAGE ─── */}
          <div className="relative w-[78%] sm:w-[55%] md:w-[42%] flex-shrink-0 flex justify-center md:justify-start">
            {/* Corner accent */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-teal-400/50 rounded-tl-xl pointer-events-none z-20" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-cyan-400/50 rounded-br-xl pointer-events-none z-20" />

            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(45,212,191,0.18) 0%, transparent 70%)", filter: "blur(20px)" }} />

            {/* Image wrapper */}
            <div className="img-reveal relative rounded-[20px] z-10 w-full" style={{ padding: "2px" }}>
              <div className="relative rounded-[18px] overflow-hidden" style={{ background: "#011628" }}>
                <img
                  src={pic}
                  alt="Profile"
                  className="relative w-full h-auto object-cover block"
                  style={{ display: "block", borderRadius: "16px" }}
                />
                {/* Image shimmer overlay */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(180deg, transparent 55%, rgba(2,12,27,0.6) 100%)" }} />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-3 md:-right-8 z-20 flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 backdrop-blur-md"
              style={{ background: "rgba(1,22,40,0.85)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse inline-block" />
              <span className="text-white text-xs font-medium tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Open to work
              </span>
            </div>
          </div>

          {/* ─── RIGHT: CONTENT ─── */}
          <div className="w-full md:w-[58%] text-center md:text-left text-white flex flex-col gap-6">

            {/* Badge */}
            <div className="flex justify-center md:justify-start">
              <span className="tag-badge">Full-Stack Developer</span>
            </div>

            {/* Heading */}
            <div>
              <h2
                className="about-heading font-bold leading-[1.1] tracking-tight"
                style={{ fontSize: "clamp(2.8rem, 6vw, 4.2rem)", color: "#f0f9ff" }}
              >
                Crafting Digital
                <br />
                <span style={{ background: "linear-gradient(90deg, #2dd4bf, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Experiences
                </span>
              </h2>
            </div>

            {/* Divider */}
            <div className="divider-line h-[2px] w-28 md:mx-0 mx-auto rounded-full" />

            {/* Paragraph */}
            <div className="text-[clamp(0.95rem,2vw,1.08rem)] leading-[1.85] font-light"
              style={{ color: "rgba(186,230,253,0.85)" }}>
              <HeroParagraph triggerRef={aboutRef} />
            </div>

            {/* Stats row */}
            <div className="flex justify-center md:justify-start gap-5 sm:gap-8 mt-1">
              {stats.map(({ value, label }, i) => (
                <div key={i} className="stat-card flex flex-col items-center md:items-start">
                  <span
                    className="about-heading font-bold leading-none"
                    style={{ fontSize: "clamp(1.8rem,4vw,2.4rem)", background: "linear-gradient(135deg,#2dd4bf,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    {value}
                  </span>
                  <span className="text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(148,210,252,0.6)", letterSpacing: "0.12em" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider thin */}
            <div style={{ height: 1, background: "linear-gradient(90deg, rgba(45,212,191,0.2), transparent)" }} />

            {/* Skills */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
              {skills.map(({ name, icon }, i) => (
                <span
                  key={i}
                  className="skill-pill flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-xl cursor-default select-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#e0f2fe",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span>{icon}</span>
                  {name}
                </span>
              ))}
            </div>

            {/* CTA button */}
            <div className="flex justify-center md:justify-start mt-2">
              <button
                className="resume-btn flex items-center gap-3 px-8 py-3.5 rounded-xl font-semibold text-[#011628] text-base"
                style={{
                  background: "linear-gradient(135deg, #2dd4bf 0%, #06b6d4 60%, #38bdf8 100%)",
                  boxShadow: "0 8px 32px rgba(45,212,191,0.3)",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.01em",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Résumé
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;

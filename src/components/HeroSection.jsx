import React, { useEffect, useRef } from "react";
import Scene from "./Scene.jsx";
import pic from "../assets/azfarpf.png";
import divTransition from "./DivTran.jsx";
import reasume from "../assets/AzfarmoinResume.pdf";
const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const cleanup = divTransition(heroRef, 200, 1, "top 70%", "bottom top");
    return cleanup;
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .hero-section  { font-family: 'DM Sans', sans-serif; }
        .hero-heading  { font-family: 'Cormorant Garamond', serif; }

        /* Scrolling text ticker */
        .ticker-track {
          display: flex;
          gap: 3rem;
          animation: ticker 18s linear infinite;
          white-space: nowrap;
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* Gradient name */
        .name-gradient {
          background: linear-gradient(135deg, #ffffff 30%, #2dd4bf 65%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Image glow border */
        .hero-img-wrap::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 24px;
          background: linear-gradient(135deg, #2dd4bf, #06b6d4, #3b82f6, transparent 60%);
          z-index: 0;
          animation: borderPulse 4s ease-in-out infinite alternate;
        }
        @keyframes borderPulse {
          0%   { opacity: 0.4; }
          100% { opacity: 0.9; }
        }

        /* CTA buttons */
        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
          transition: left 0.5s ease;
        }
        .btn-primary:hover::before { left: 100%; }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(45,212,191,0.45);
        }

        .btn-secondary {
          transition: all 0.3s ease;
        }
        .btn-secondary:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.08);
          border-color: rgba(45,212,191,0.5);
        }

        /* Float animations */
        .float-a { animation: floatA 7s ease-in-out infinite; }
        .float-b { animation: floatB 9s ease-in-out infinite; }
        @keyframes floatA {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-16px); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-12px) rotate(8deg); }
        }

        /* Social icons */
        .social-icon {
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .social-icon:hover {
          transform: translateY(-4px);
          color: #2dd4bf;
        }

        /* Cursor blink */
        .cursor-blink {
          display: inline-block;
          width: 3px;
          height: 1em;
          background: #2dd4bf;
          margin-left: 4px;
          vertical-align: middle;
          animation: blink 1.1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        .divider-glow {
          background: linear-gradient(90deg, #2dd4bf, #06b6d4, transparent);
        }

        .tag-badge {
          background: linear-gradient(135deg, rgba(45,212,191,0.12), rgba(6,182,212,0.08));
          border: 1px solid rgba(45,212,191,0.28);
          color: #2dd4bf;
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          font-weight: 600;
          padding: 4px 14px;
          border-radius: 100px;
          text-transform: uppercase;
        }
      `}</style>

      <section
        ref={heroRef}
        className="hero-section relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 py-20 md:py-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #020c1b 0%, #011628 40%, #002147 75%, #003366 100%)" }}
      >
        {/* ── Scene: floating balls live behind everything ── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Scene />
        </div>

        {/* Noise texture */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            mixBlendMode: "overlay",
          }}
        />

        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none z-[1] opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ambient glow blobs */}
        <div className="absolute top-[-8%] left-[-6%] w-[45vw] h-[45vw] rounded-full pointer-events-none z-[1]"
          style={{ background: "radial-gradient(circle, rgba(45,212,191,0.10) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-10%] right-[-4%] w-[50vw] h-[50vw] rounded-full pointer-events-none z-[1]"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 65%)" }} />

        {/* Floating geometry */}
        <div className="float-a absolute top-20 right-[14%] w-20 h-20 border border-teal-400/15 rounded-full pointer-events-none z-[2]" />
        <div className="float-b absolute bottom-32 left-[6%] w-12 h-12 border border-cyan-400/15 rotate-45 pointer-events-none z-[2]" />
        <div
          className="float-a absolute top-[30%] right-[4%] pointer-events-none z-[2] opacity-20"
          style={{ width: 3, height: 90, background: "linear-gradient(to bottom, #2dd4bf, transparent)" }}
        />

        {/* ── Main grid ── */}
        <div className="relative z-10 w-full max-w-7xl flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ─── LEFT COLUMN ─── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">

            {/* Badge */}
            <span className="tag-badge">Full-Stack Developer · MERN Stack</span>

            {/* Greeting */}
            <p
              className="hero-heading font-light tracking-wide"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: "rgba(148,210,252,0.7)" }}
            >
              Asalamu Alaikum — Welcome 👋
            </p>

            {/* Name */}
            <div>
              <p
                className="hero-section font-medium uppercase tracking-[0.22em] mb-1"
                style={{ fontSize: "clamp(0.7rem, 1.2vw, 0.85rem)", color: "rgba(148,210,252,0.5)" }}
              >
                I'm
              </p>
              <h1
                className="hero-heading name-gradient font-bold leading-[1.05]"
                style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
              >
                M. Azfar
                <br />
                Moin
                <span className="cursor-blink" />
              </h1>
            </div>

            {/* Divider */}
            <div className="divider-glow h-[2px] w-28 md:mx-0 mx-auto rounded-full" />

            {/* Description */}
            <div className="flex flex-col gap-3 max-w-md">
              <p
                className="leading-relaxed"
                style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.08rem)", color: "rgba(186,230,253,0.9)" }}
              >
                A passionate{" "}
                <span
                  className="font-medium"
                  style={{ color: "#2dd4bf", borderBottom: "1px solid rgba(45,212,191,0.35)" }}
                >
                  full-stack developer
                </span>{" "}
                focused on building modern, scalable, and visually refined web applications.
              </p>
              <p
                className="leading-relaxed font-light"
                style={{ fontSize: "clamp(0.88rem, 1.4vw, 1rem)", color: "rgba(148,210,252,0.6)" }}
              >
                Specializing in the MERN stack — crafting responsive front‑end systems and robust backend architectures.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-1">
              <a href={reasume} download target="_blank" rel="noopener noreferrer">
              <button
                className="btn-primary flex items-center gap-2.5 px-7 py-3 rounded-xl font-semibold text-[#011628] text-sm"
                style={{
                  background: "linear-gradient(135deg, #2dd4bf 0%, #06b6d4 60%, #38bdf8 100%)",
                  boxShadow: "0 8px 28px rgba(45,212,191,0.3)",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.01em",
                }}
                >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Résumé
              </button>
              </a>
            <a href="#project">
              <button
                className="btn-secondary flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-medium border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#e0f2fe",
                  backdropFilter: "blur(8px)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                >

                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                View Projects
              </button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-1 mt-2">
              <span className="text-xs uppercase tracking-widest mr-3" style={{ color: "rgba(148,210,252,0.4)", letterSpacing: "0.14em" }}>
                Connect
              </span>
              <div style={{ width: 24, height: 1, background: "rgba(45,212,191,0.3)" }} />

              {/* GitHub */}
              <a href="https://github.com/Azfarmoin/" aria-label="GitHub"
                className="social-icon w-9 h-9 flex items-center justify-center rounded-lg ml-2"
                style={{ color: "rgba(186,230,253,0.6)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/azfar-moin-9bb31339b/" aria-label="LinkedIn"
                className="social-icon w-9 h-9 flex items-center justify-center rounded-lg"
                style={{ color: "rgba(186,230,253,0.6)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Email */}
              <a href="#contact" aria-label="Email"
                className="social-icon w-9 h-9 flex items-center justify-center rounded-lg"
                style={{ color: "rgba(186,230,253,0.6)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ─── RIGHT: IMAGE ─── */}
          <div className="relative w-full flex justify-center md:justify-end">

            {/* Corner brackets */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-teal-400/40 rounded-tl-xl pointer-events-none z-20" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-cyan-400/40 rounded-br-xl pointer-events-none z-20" />

            {/* Ambient glow behind image */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(45,212,191,0.16) 0%, transparent 70%)", filter: "blur(24px)" }} />

            {/* Image with gradient border */}
            <div
              className="hero-img-wrap relative rounded-[22px] z-10"
              style={{ padding: "2px", maxWidth: "clamp(260px, 45vw, 480px)", width: "100%" }}
            >
              <div className="relative rounded-[20px] overflow-hidden" style={{ background: "#011628" }}>
                <img
                  src={pic}
                  alt="Azfar Moin"
                  className="w-full h-auto object-cover block"
                  style={{ borderRadius: "18px", display: "block" }}
                />
                {/* Bottom fade */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(180deg, transparent 50%, rgba(2,12,27,0.55) 100%)" }} />
              </div>
            </div>

            {/* Floating "Available" badge */}
            <div
              className="absolute -bottom-5 -left-3 md:-left-8 z-20 flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 backdrop-blur-md"
              style={{ background: "rgba(1,22,40,0.88)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse inline-block" />
              <span className="text-white text-xs font-medium tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Open to work
              </span>
            </div>

            {/* Floating XP badge */}
            <div
              className="absolute -top-5 -right-3 md:-right-8 z-20 flex flex-col items-center px-4 py-2.5 rounded-xl border border-white/10 backdrop-blur-md"
              style={{ background: "rgba(1,22,40,0.88)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
            >
              <span
                className="hero-heading font-bold leading-none"
                style={{ fontSize: "1.6rem", background: "linear-gradient(135deg,#2dd4bf,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                2+
              </span>
              <span className="text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "rgba(148,210,252,0.6)" }}>
                Yrs Exp
              </span>
            </div>
          </div>

        </div>

        {/* ── Bottom ticker ── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t"
          style={{ borderColor: "rgba(45,212,191,0.1)", background: "rgba(1,22,40,0.6)", backdropFilter: "blur(8px)", padding: "10px 0" }}
        >
          <div className="ticker-track">
            {[
              "React", "·", "Node.js", "·", "MongoDB", "·", "Tailwind CSS", "·",
              "GSAP", "·", "REST APIs", "·", "Express.js", "·", "Full-Stack Dev", "·",
              "React", "·", "Node.js", "·", "MongoDB", "·", "Tailwind CSS", "·",
              "GSAP", "·", "REST APIs", "·", "Express.js", "·", "Full-Stack Dev", "·",
            ].map((item, i) => (
              <span
                key={i}
                className="text-xs font-medium uppercase tracking-widest"
                style={{ color: item === "·" ? "rgba(45,212,191,0.4)" : "rgba(148,210,252,0.45)", letterSpacing: "0.14em" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default HeroSection;

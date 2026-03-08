import React, { useRef, useState } from "react";

// ─── Replace these with your actual imports ───────────────────────────────────
// import cert1 from "../assets/cert-mern.png";
// import cert2 from "../assets/cert-react.png";
// etc.
// For now we use placeholder gradients when no image is provided
// ─────────────────────────────────────────────────────────────────────────────

const certificates = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    issuer: "Coursera / Meta",
    date: "Jan 2024",
    credential: "Credential ID: META-FSW-2024",
    skills: ["React", "Node.js", "MongoDB", "REST APIs"],
    image: null, // replace with: cert1
    accent: "#2dd4bf",
    accentSoft: "rgba(45,212,191,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "MERN Stack Specialization",
    issuer: "Udemy",
    date: "Mar 2024",
    credential: "Credential ID: UD-MERN-5821",
    skills: ["Express.js", "MongoDB", "JWT", "Redux"],
    image: null, // replace with: cert2
    accent: "#38bdf8",
    accentSoft: "rgba(56,189,248,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    issuer: "Google / Coursera",
    date: "Jun 2024",
    credential: "Credential ID: GGL-UX-9934",
    skills: ["Figma", "Wireframing", "Prototyping", "User Research"],
    image: null, // replace with: cert3
    accent: "#a78bfa",
    accentSoft: "rgba(167,139,250,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "Sep 2023",
    credential: "Credential ID: FCC-JS-7712",
    skills: ["Algorithms", "Data Structures", "ES6+", "OOP"],
    image: null, // replace with: cert4
    accent: "#fb923c",
    accentSoft: "rgba(251,146,60,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Cloud Fundamentals",
    issuer: "AWS / Coursera",
    date: "Nov 2024",
    credential: "Credential ID: AWS-CLF-3309",
    skills: ["EC2", "S3", "Lambda", "IAM"],
    image: null, // replace with: cert5
    accent: "#34d399",
    accentSoft: "rgba(52,211,153,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Aug 2023",
    credential: "Credential ID: FCC-RWD-4401",
    skills: ["HTML5", "CSS3", "Flexbox", "Grid"],
    image: null, // replace with: cert6
    accent: "#f472b6",
    accentSoft: "rgba(244,114,182,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
];

/* ── Placeholder when no image is provided ──────────────────────────────────── */
const PlaceholderDiploma = ({ accent, title }) => (
  <div
    className="w-full h-full flex flex-col items-center justify-center gap-3"
    style={{
      background: `linear-gradient(135deg, rgba(1,22,40,0.9) 0%, ${accent}18 100%)`,
      borderRadius: "12px",
      minHeight: "180px",
    }}
  >
    <div style={{
      width: 64, height: 64, borderRadius: "50%",
      border: `1.5px solid ${accent}50`,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    </div>
    <p style={{
      fontSize: "0.68rem", color: `${accent}80`, letterSpacing: "0.14em",
      textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
      textAlign: "center", padding: "0 16px", maxWidth: 180,
    }}>
      {title}
    </p>
    <p style={{
      fontSize: "0.6rem", color: "rgba(148,210,252,0.3)",
      fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em",
    }}>
      Replace with diploma image
    </p>
  </div>
);

/* ── Certificate Card ─────────────────────────────────────────────────────── */
const CertCard = ({ cert, index }) => {
  const [hovered, setHovered] = useState(false);
  const [imgOpen, setImgOpen] = useState(false);

  return (
    <>
      {/* Lightbox */}
      {imgOpen && cert.image && (
        <div
          onClick={() => setImgOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out",
          }}
        >
          <img
            src={cert.image} alt={cert.title}
            style={{ maxWidth: "90vw", maxHeight: "85vh", borderRadius: 16, boxShadow: "0 0 80px rgba(45,212,191,0.25)" }}
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={() => setImgOpen(false)}
            style={{
              position: "absolute", top: 24, right: 28,
              background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%",
              width: 40, height: 40, color: "#fff", cursor: "pointer", fontSize: 18,
            }}
          >✕</button>
        </div>
      )}

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered
            ? `linear-gradient(160deg, rgba(1,22,40,0.97) 0%, ${cert.accentSoft} 100%)`
            : "rgba(1,22,40,0.7)",
          border: `1px solid ${hovered ? cert.accent + "45" : "rgba(255,255,255,0.07)"}`,
          borderRadius: 20,
          backdropFilter: "blur(12px)",
          transition: "all 0.4s cubic-bezier(0.34,1.2,0.64,1)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered
            ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${cert.accent}30, inset 0 1px 0 rgba(255,255,255,0.06)`
            : "0 4px 24px rgba(0,0,0,0.3)",
          overflow: "hidden",
          cursor: "default",
          animationDelay: `${index * 0.08}s`,
        }}
        className="cert-card-appear"
      >
        {/* Top accent bar */}
        <div style={{
          height: 2,
          background: `linear-gradient(90deg, ${cert.accent}, transparent)`,
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.4s",
        }} />

        {/* Image area */}
        <div
          style={{
            position: "relative", overflow: "hidden",
            cursor: cert.image ? "zoom-in" : "default",
          }}
          onClick={() => cert.image && setImgOpen(true)}
        >
          {cert.image ? (
            <img
              src={cert.image}
              alt={cert.title}
              style={{
                width: "100%", height: 180, objectFit: "cover", display: "block",
                transition: "transform 0.5s ease",
                transform: hovered ? "scale(1.04)" : "scale(1)",
              }}
            />
          ) : (
            <PlaceholderDiploma accent={cert.accent} title={cert.title} />
          )}
          {/* Gradient overlay on image */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(180deg, transparent 40%, rgba(1,22,40,0.85) 100%)",
            pointerEvents: "none",
          }} />
          {/* View badge */}
          {cert.image && (
            <div style={{
              position: "absolute", bottom: 10, right: 12,
              background: "rgba(1,22,40,0.8)", backdropFilter: "blur(6px)",
              border: `1px solid ${cert.accent}40`, borderRadius: 8,
              padding: "3px 10px",
              fontSize: "0.6rem", color: cert.accent,
              letterSpacing: "0.12em", textTransform: "uppercase",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.3s",
            }}>
              View Certificate
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: "18px 20px 20px" }}>
          {/* Icon + issuer */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <div style={{
              color: cert.accent, flexShrink: 0,
              background: cert.accentSoft, borderRadius: 8,
              padding: 6, display: "flex",
            }}>
              {cert.icon}
            </div>
            <div>
              <p style={{
                fontSize: "0.65rem", color: cert.accent, letterSpacing: "0.14em",
                textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                lineHeight: 1,
              }}>
                {cert.issuer}
              </p>
              <p style={{
                fontSize: "0.6rem", color: "rgba(148,210,252,0.4)",
                fontFamily: "'DM Sans', sans-serif", marginTop: 2,
              }}>
                {cert.date}
              </p>
            </div>
          </div>

          {/* Title */}
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            fontWeight: 700,
            color: "#e0f2fe",
            lineHeight: 1.25,
            marginBottom: 8,
          }}>
            {cert.title}
          </h3>

          {/* Credential */}
          <p style={{
            fontSize: "0.62rem", color: "rgba(148,210,252,0.35)",
            fontFamily: "'DM Sans', sans-serif", marginBottom: 12,
            letterSpacing: "0.06em",
          }}>
            {cert.credential}
          </p>

          {/* Divider */}
          <div style={{
            height: 1,
            background: `linear-gradient(90deg, ${cert.accent}30, transparent)`,
            marginBottom: 12,
          }} />

          {/* Skills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {cert.skills.map((s, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.6rem", padding: "3px 10px",
                  borderRadius: 100,
                  background: cert.accentSoft,
                  border: `1px solid ${cert.accent}28`,
                  color: cert.accent,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600, letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

/* ── Main Section ─────────────────────────────────────────────────────────── */
const CertificatesSection = () => {
  const total = certificates.length;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .certs-section { font-family: 'DM Sans', sans-serif; }

        @keyframes certFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cert-card-appear {
          animation: certFadeUp 0.55s ease both;
        }

        .cert-heading {
          font-family: 'Cormorant Garamond', serif;
          background: linear-gradient(135deg, #ffffff 30%, #2dd4bf 65%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Scrollbar */
        .certs-scroll::-webkit-scrollbar { display: none; }

        /* Trophy pulse */
        @keyframes trophyPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(45,212,191,0.4); }
          50%       { box-shadow: 0 0 0 10px rgba(45,212,191,0); }
        }
        .trophy-icon { animation: trophyPulse 2.4s ease-in-out infinite; }

        .divider-glow-cert {
          background: linear-gradient(90deg, #2dd4bf, #06b6d4, transparent);
        }
      `}</style>

      <section
        className="certs-section relative w-full px-6 md:px-16 py-24 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #020c1b 0%, #011628 40%, #001f40 75%, #002a55 100%)",
        }}
      >
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.025,
        }} />
        <div className="absolute top-0 left-0 w-full h-px" style={{
          background: "linear-gradient(90deg, transparent, rgba(45,212,191,0.25), transparent)",
        }} />
        <div className="absolute top-[-10%] right-[-4%] w-[40vw] h-[40vw] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(45,212,191,0.07) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-8%] left-[-4%] w-[35vw] h-[35vw] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto">

          {/* ── Section Header ── */}
          <div className="flex flex-col items-center text-center mb-16">
            {/* Trophy icon */}
            <div
              className="trophy-icon mb-6 w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(45,212,191,0.15), rgba(56,189,248,0.10))",
                border: "1px solid rgba(45,212,191,0.3)",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                <path d="M4 22h16"/>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
              </svg>
            </div>

            {/* Label */}
            <span style={{
              fontSize: "0.65rem", letterSpacing: "0.22em",
              color: "#2dd4bf", fontWeight: 700,
              textTransform: "uppercase", marginBottom: 12,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Achievements & Learning
            </span>

            {/* Heading */}
            <h2
              className="cert-heading"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                fontWeight: 700, lineHeight: 1.1,
                marginBottom: 14,
              }}
            >
              My Certifications
              <br />
              <span style={{ fontWeight: 300, fontStyle: "italic" }}>& Diplomas</span>
            </h2>

            {/* Divider */}
            <div className="divider-glow-cert h-[2px] w-24 rounded-full mb-5" />

            {/* Sub */}
            <p style={{
              fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
              color: "rgba(186,230,253,0.6)",
              maxWidth: 480, lineHeight: 1.7,
            }}>
              A curated collection of credentials earned through dedicated self-study, online courses, and formal programs — each one a milestone in my journey.
            </p>

            {/* Stats row */}
            <div style={{
              display: "flex", gap: "2.5rem", marginTop: 28,
              padding: "14px 32px", borderRadius: 16,
              background: "rgba(1,22,40,0.6)",
              border: "1px solid rgba(45,212,191,0.12)",
              backdropFilter: "blur(8px)",
            }}>
              {[
                { val: `${total}`, label: "Certificates" },
                { val: "4+", label: "Platforms" },
                { val: "2024", label: "Latest" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.7rem", fontWeight: 700, lineHeight: 1,
                    background: "linear-gradient(135deg,#2dd4bf,#38bdf8)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>
                    {s.val}
                  </div>
                  <div style={{
                    fontSize: "0.6rem", color: "rgba(148,210,252,0.45)",
                    textTransform: "uppercase", letterSpacing: "0.14em",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 600, marginTop: 4,
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Certificate Grid ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
              gap: "1.5rem",
            }}
          >
            {certificates.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <p style={{
              fontSize: "0.75rem", color: "rgba(148,210,252,0.35)",
              letterSpacing: "0.1em", fontFamily: "'DM Sans', sans-serif",
              marginBottom: 16, textTransform: "uppercase",
            }}>
              Always learning · always growing
            </p>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 24px", borderRadius: 12,
              border: "1px solid rgba(45,212,191,0.2)",
              background: "rgba(45,212,191,0.05)",
              color: "#2dd4bf", fontSize: "0.78rem",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              letterSpacing: "0.08em",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2dd4bf", display: "inline-block" }} />
              Currently pursuing: Advanced TypeScript & System Design
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CertificatesSection;

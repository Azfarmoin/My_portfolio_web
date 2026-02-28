import React, { useRef } from "react";
import divTransition from "./DivTran.jsx";
import HeroParagraph from "./Heropara.jsx";
import pic from "../assets/azfarpf.png";

const About = () => {
  const transition1 = useRef(null);

  // optional div transition for fade/move effect
  divTransition(
    transition1,
    200,
    1,
    "top 60%",
    "center center",
    "bottom 45%",
    "full"
  );

  return (
    <section
      ref={transition1}
      className="mt-32 mb-24 relative w-full min-h-screen bg-[#003366]
                 flex items-center justify-center
                 px-6 md:px-16
                 py-16 md:py-24
                 overflow-hidden"
    >
      {/* Gradient Glow Background */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-teal-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-400/20 blur-[120px] rounded-full"></div>

      <div
        className="relative w-full max-w-7xl
                   flex flex-col md:grid md:grid-cols-2
                   gap-12 md:gap-16
                   items-center"
      >
        {/* LEFT - IMAGE */}
        <div className="relative w-full flex justify-center md:justify-start group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-500 
                          rounded-2xl blur opacity-40 
                          group-hover:opacity-70 transition duration-700"></div>

          <img
            src={pic}
            alt="Profile"
            className="relative w-full 
                       w-[80%] sm:w-[70%] md:w-full
max-w-sm md:max-w-md lg:max-w-lg
                       h-auto object-cover
                       rounded-2xl shadow-2xl
                       border border-white/10"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div className="text-white w-full text-center md:text-left max-w-2xl">
          <h2 className="font-bold tracking-tight mb-6
                         text-[clamp(2rem,5vw,3rem)]">
            About Me
          </h2>

          <div className="h-1 w-24 md:w-32 mx-auto md:mx-0
                          bg-gradient-to-r from-teal-400 to-cyan-500
                          mb-8 rounded-full"></div>

          {/* Hero Paragraph animates only when About section is centered */}
          <div className="text-[clamp(1rem,2.5vw,1.15rem)] leading-relaxed text-[#ecfeff] mb-8">
            <HeroParagraph triggerRef={transition1} />
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mb-10">
            {["React", "Node.js", "MongoDB", "Tailwind", "GSAP"].map(
              (skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm sm:text-base
                             bg-white/10 backdrop-blur-md
                             border border-white/20
                             rounded-full
                             hover:bg-teal-500
                             hover:border-teal-400
                             transition duration-300"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <button
              className="w-full sm:w-auto
                         px-8 py-3
                         bg-gradient-to-r from-teal-400 to-cyan-500
                         text-[#003366] font-semibold
                         rounded-xl shadow-lg
                         hover:scale-105
                         transition duration-300"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
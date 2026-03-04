import React, { useEffect, useRef } from "react";
import Scene from "./Scene.jsx";
import pic from "../assets/azfarpf.png";
import divTransition from "./DivTran.jsx";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const cleanup = divTransition(
      heroRef,
      200,
      1,
      "center center",
      "center center",
      "bottom 40%",
      "exit"
    );

    return cleanup;
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen bg-[#003366] 
                 flex items-center justify-center 
                 px-6 md:px-16 py-16 md:py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-teal-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-400/20 blur-[120px] rounded-full"></div>

      <div className="relative w-full max-w-7xl flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* LEFT COLUMN */}
        <div className="w-full flex justify-center md:justify-start">

          {/* INNER CHILD (Adaptive Behavior) */}
          <div className="w-full lg:w-full lg:h-full 
                          flex flex-col justify-center 
                          text-center md:text-left">

            {/* Scene */}
            <div className="flex justify-center md:justify-start mb-6">
              <Scene />
            </div>

            {/* Greeting */}
            <span
              className="block text-[#80403e] font-semibold"
              style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)" }}
            >
              Asalamu Alaikum
            </span>

            <span
              className="block text-gray-400 font-semibold uppercase tracking-widest mt-2"
              style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)" }}
            >
              I'm
            </span>

            {/* Name */}
            <h1
              className="text-white font-bold leading-[1.1] mt-3"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 3rem)",
                textShadow:
                  "2px 2px 20px rgba(0,0,0,0.5), 0px 0px 15px rgba(162,31,2,0.3)",
              }}
            >
              M. Azfar Moin
            </h1>

            {/* Divider */}
            <div className="h-1 w-54 mx-auto md:mx-0 bg-gradient-to-r from-teal-400 to-cyan-500 my-6 rounded-full"></div>

            {/* Description */}
            {/* Description */}
<div className="w-sm lg:w-md text-center md:text-left">
  <p
    className="text-[#ecfeff] leading-relaxed"
    style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)" }}
  >
    I am a passionate{" "}
    <span className="text-teal-300 border-b border-teal-400/40">
      full-stack developer
    </span>{" "}
    focused on building modern, scalable, and visually refined web applications.
  </p>

  <p
    className="text-[#ecfeff]/70 leading-relaxed mt-2"
    style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)" }}
  >
    With strong experience in the MERN stack, I specialize in crafting
    responsive front-end systems and dynamic backend architectures.
  </p>
</div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full flex justify-center md:justify-end group">
          <div className="absolute -inset-1 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-700"></div>

          <img
            src={pic}
            alt="Azfar Moin"
            className="relative w-[80%] sm:w-[70%] md:w-full 
                       max-w-sm md:max-w-md lg:max-w-lg 
                       h-auto object-cover rounded-3xl 
                       shadow-2xl border border-white/10 
                       transition duration-500 group-hover:scale-[1.02]"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
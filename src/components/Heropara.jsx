import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const HeroParagraph = ({ triggerRef }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!triggerRef?.current || !textRef.current) return;

    const paragraphs = [
      "I'm a full-stack web developer specializing in the MERN stack, with 3 years of dedicated self-learning and real-world experience.",
      "I build clean, responsive, and dynamic web applications, bringing ideas to life through modern technologies like React, Node.js, Express, and MongoDB.",
      "I’m always exploring new ways to enhance user experience and create interactive, visually engaging web projects."
    ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,    // About section
        start: "center center",          // when About section is centered
        once: true,                      // only play once
      }
    });

    paragraphs.forEach((text, index) => {
      tl.to(textRef.current, {
        duration: 4,
        text: text,
        opacity: 1,
        ease: "power1.out"
      });

      if (index !== paragraphs.length - 1) {
        tl.to(textRef.current, {
          duration: 1,
          opacity: 0,
          onComplete: () => (textRef.current.textContent = ""),
        });
      }
    });

  }, [triggerRef]);

  return (
    <p
      ref={textRef}
      style={{
        textShadow:
          "1px 1px 1px rgba(0, 0, 0, 0.89),3px 3px 20px rgb(180, 246, 0)"
      }}
      className="px-1 py-5 text-[clamp(1rem,2.5vw,1.5rem)] text-[#ecfeff] font-medium font-sans leading-relaxed opacity-0"
    />
  );
};

export default HeroParagraph;
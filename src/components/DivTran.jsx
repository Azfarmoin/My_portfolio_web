import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const divTransition = (
  ref,
  valueX = 150,
  duration = 1,
  start = "top 100%",          // when top hits bottom of screen
  centerPoint = "center center", // when element center hits screen center
  end = "bottom 0%",           // when bottom hits top
  mode = "full"                // "full" | "exit"
) => {
  if (!ref?.current) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ref.current,
      start: start,
      end: end,
      scrub: true,
    },
  });

  // 🔹 FULL MODE: Left → Center → Right
  if (mode === "full") {
    tl.fromTo(
      ref.current,
      { x: -valueX, opacity: 0 },
      { x: 0, opacity: 1, duration: duration, ease: "power2.out" }
    ).to(ref.current, {
      x: valueX,
      opacity: 0,
      duration: duration,
      ease: "power2.in",
    });
  }

  // 🔹 EXIT MODE: Only Center → Right
  if (mode === "exit") {
    tl.fromTo(
      ref.current,
      { x: 0, opacity: 1 },
      { x: valueX, opacity: 0, duration: duration, ease: "power2.in" }
    );
  }

  // Clean up
  return () => {
    tl.scrollTrigger?.kill();
    tl.kill();
  };
};

export default divTransition;
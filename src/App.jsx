import { useRef } from "react";
import ProjectCards from "./components/ProjectCards.jsx";
import "./App.css";
import Scene from "./components/Scene.jsx";
import FullScreenSlider from "./components/FullScreenSlider.jsx";
import Logomarquee from "./components/Skills.jsx";
import divTransition from "./components/DivTran.jsx";
import pic from "./assets/azfarpf.png";
import About from "./components/About.jsx";
import Contact from "./components/contact.jsx";
const slides = Array(3).fill({
  content: (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-8">
      <ProjectCards width="100%" height="100%" />
    </div>
  ),
});


function App() {
  
  const transition = useRef(null);
divTransition(
  transition,
  200,
  1,
  "center center",
  "center center",
  "bottom 40%",
  "exit"
);

  return (
    <>
    <div className="w-full overflow-x-hidden">
  
{/* HERO SECTION */}
<section
  ref={transition}
  className="relative w-full min-h-screen  flex items-center bg-[#003366]
              justify-center
             px-6 md:px-16
             py-16 md:py-24
             overflow-hidden"
>
  <div
    className="w-full max-w-7xl
               flex flex-col md:grid md:grid-cols-2
               gap-12 md:gap-16
               items-center"
  >
    {/* LEFT CONTENT */}
    <div className="w-full text-center md:text-left max-w-2xl">

      <h4
        style={{
          textShadow:
            "1px 1px 1px rgb(0,0,0), 2px 2px 10px rgb(162,31,2)",
        }}
        className="font-bold leading-tight space-y-2"
      >
        <Scene />

        <span className="block text-[#80403e] text-[clamp(1rem,4vw,1.4rem)]">
          Asalamu Alaikum
        </span>

        <span className="block text-[#606060] text-[clamp(1rem,4vw,1.4rem)]">
          I'm
        </span>

        <span className="block text-white text-[clamp(2rem,6vw,4rem)]">
          M. Azfar Moin
        </span>
      </h4>

      <div className="h-1 w-24 md:w-32 mx-auto md:mx-0
                      bg-gradient-to-r from-teal-400 to-cyan-500
                      my-6 rounded-full"></div>

      <p className="text-[#ecfeff]
                    text-[clamp(1rem,2.8vw,1.2rem)]
                    leading-relaxed mb-4">
        I am a passionate full-stack developer focused on building modern,
        scalable, and visually refined web applications.
      </p>

      <p className="text-[#ecfeff]
                    text-[clamp(0.95rem,2.5vw,1.05rem)]
                    leading-relaxed">
        With strong experience in the MERN stack, I specialize in crafting
        responsive front-end systems and dynamic backend architectures.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full flex justify-center md:justify-start">
      <img
        src={pic}
        alt="Azfar Moin"
        className="w-full
                   w-[80%] sm:w-[70%] md:w-full
max-w-sm md:max-w-md lg:max-w-lg
                   h-auto object-contain
                   bg-[#00337f]
                   border-4 border-[#0040a0]
                   rounded-2xl
                   shadow-2xl
                   transition-all duration-500"
      />
    </div>
  </div>
</section>

      {/* ABOUT */}
      <About />

      {/* PROJECTS TITLE */}
      <section className="mt-[10vh] py-20 bg-[#003366]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Featured Projects
        </h2>

        <div className="w-full  min-h-[75vh]">
          <FullScreenSlider 
  slides={slides}          // Array of slide objects
  width="100%"             // Full width or any CSS width
  height="80vh"            // Height can be a value or '100%'
  interval={5000}          // Auto-slide interval in ms
  autoPlay={true}          // Enable auto sliding
  pauseOnHover={true}      // Pause when hovering
  animationDuration={600}  // Smooth transition speed in ms
/>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-24 w-full py-20 bg-[#003366] flex flex-col items-center justify-center">
        <h1
          style={{
            textShadow:
              "1px 1px 1px rgb(0, 0, 0), 2px 2px 10px rgb(162, 31, 2)",
          }}
          className="text-[#80403e] text-2xl md:text-3xl font-bold mb-10 text-center"
        >
          My Skills
        </h1>

        <div className="w-full max-w-7xl  px-4">
          <Logomarquee width="100%" height="100" />
        </div>
      </section>

      {/* CONTACT */}
      <Contact />
      </div>
    </>
  );
}

export default App;
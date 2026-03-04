  import React, { useRef, useEffect } from "react";
  import ProjectCards from "./components/ProjectCards.jsx";
  import "./App.css";
  import Scene from "./components/Scene.jsx";
  import FullScreenSlider from "./components/FullScreenSlider.jsx";
  import Logomarquee from "./components/Skills.jsx";
  import divTransition from "./components/DivTran.jsx";
  import pic from "./assets/azfarpf.png";
  import About from "./components/About.jsx";
  import Contact from "./components/contact.jsx";
  import HeroSection from "./components/HeroSection.jsx";
import CardCarousel from "./components/CardCarousel.jsx";



  

  function App() {
  

    return (
      <div className="w-full overflow-x-hidden">
        
        <HeroSection />
        
        {/* ABOUT SECTION */}
        <About />

        {/* PROJECTS SECTION */}
        <section className="mt-[10vh] py-20 bg-[#003366]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Featured Projects
          </h2>
          <div className="w-full min-h-[75vh]">
           {/* <FullScreenSlider
  slides={slides}
  interval={5000}
  autoPlay={true}
  pauseOnHover={true}
  animationDuration={600}
/> */}<CardCarousel />
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="py-24 w-full bg-[#003366] flex flex-col items-center justify-center">
          <h1 style={{ textShadow: "1px 1px 1px rgb(0,0,0), 2px 2px 10px rgb(162,31,2)" }} className="text-[#80403e] text-2xl md:text-3xl font-bold mb-10 text-center">
            My Skills
          </h1>
          <div className="w-full max-w-7xl px-4">
            <Logomarquee width="100%" height="100" />
          </div>
        </section>

        {/* CONTACT SECTION */}
        <Contact />
      </div>
    );
  }

  export default App;
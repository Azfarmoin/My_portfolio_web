import React, { useState, useEffect, useRef, useCallback } from "react";

const FullScreenSlider = ({
  slides = [],
  width = "100%",
  height = "60vh",
  aspectRatio = null,
  interval = 5000,
  autoPlay = true,
  pauseOnHover = true,
  animationDuration = 600,
}) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const intervalRef = useRef(null);

  // Normalize dimension
  const normalizeSize = (value) => (typeof value === "number" ? `${value}px` : value);

  const sliderStyle = {
    width: normalizeSize(width),
    height: aspectRatio ? undefined : normalizeSize(height),
    aspectRatio: aspectRatio || undefined,  willChange: "transform",

  };

  // Navigation
  const nextSlide = useCallback(() => {
    if (slides.length <= 1) return;
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    if (slides.length <= 1) return;
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    if (index === current) return;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // AutoPlay
  useEffect(() => {
    if (!autoPlay || isPaused || slides.length <= 1) return;

    intervalRef.current = setInterval(nextSlide, interval);
    return () => clearInterval(intervalRef.current);
  }, [nextSlide, interval, autoPlay, isPaused, slides.length]);

  // Swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prevSlide();
    if (delta < -50) nextSlide();
  };

  return (
    <div
      className="relative overflow-hidden mx-auto w-full bg-black/10 rounded-2xl"
      style={sliderStyle}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, i) => {
          const isActive = i === current;

          return (
            <div
              key={i}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
              style={{
                transition: `transform ${animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${animationDuration}ms ease`,
                transform: isActive
                  ? "translateX(0%)"
                  : `translateX(${direction * 100}%)`,
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 2 : 1,
              }}
            >
              {slide.content}
            </div>
          );
        })}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-4xl md:text-5xl hover:scale-110 transition"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-4xl md:text-5xl hover:scale-110 transition"
      >
        &#10095;
      </button>

      {/* Modern Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-50 items-center">
        {slides.map((_, i) => {
          const isActive = i === current;

          return (
            <div
              key={i}
              className="relative w-8 h-2 bg-white/20 rounded-full overflow-hidden"
            >
              <div
                className={`
                  absolute top-0 left-0 h-full bg-white rounded-full
                  transition-all duration-500 ease-in-out
                `}
                style={{
                  width: isActive ? "100%" : "0%",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FullScreenSlider;

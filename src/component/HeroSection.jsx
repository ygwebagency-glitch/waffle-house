import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
   
  const images = [
    "/imgi_31_Madeline-front-page-14.webp",
    "/imgi_30_Top-Banner2-2.jpg",
    "/imgi_28_header_2.webp",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
     
    <div className="w-full max-w-8xl mx-auto mt-37 relative">
      {/* SLIDER */}
      <div className="relative h-[90vh] overflow-hidden rounded-lg">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* BUTTONS */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded z-20 hover:bg-black"
        >
          Prev
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded z-20 hover:bg-black"
        >
          Next
        </button>

        {/* 💎 DIAMOND INDICATORS OVERLAY */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-5 z-30">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 cursor-pointer rotate-45 flex items-center justify-center`}
            >
              <div
                className={`w-full h-full border-2 rotate-50 ${ index === current? "bg-yellow-300 border-black": "bg-transparent border-gray-400"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

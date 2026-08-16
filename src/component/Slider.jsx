import React, { useState } from "react";

const slides = [
  { id: 1, title: "Blueberry Waffle", image: "/imgi_20_all-star.webp" },
  { id: 2, title: "All-Star Special", image: "/imgi_21_Star_Special.webp" },
  { id: 3, title: "Simply Beverages", image: "/imgi_19_blueberrywaffleresize-8.webp" },
  { id: 4, title: "TRY OUR PECAN WAFFLE", image: "/imgi_18_pecanwaffle@2x.webp" },

];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
    <div  style={{ backgroundImage: "url('/subway-tile-background-white-seamless-patter-kitchen-backsplash-bathroom-wall-shower_926199-3741952.avif')" }}>
    <div
      className="relative z-0  w-full max-w-5xl mx-auto mt-6 h-150 overflow-hidden rounded-lg "    >
      <div className="relative w-full h-full flex justify-center items-center ">
        {slides.map((slide, index) => {
          let style =
            "absolute transition-all duration-500 ease-in-out rounded-lg shadow-lg";

          if (index === current) {
            // Middle image front
            style += " z-50 scale-100 translate-x-0";
          } else if (index === (current === 0 ? slides.length - 1 : current - 1)) {
            // Left image partially behind middle
            style += " z-20 scale-90 -translate-x-32 opacity-70";
          } else if (index === (current === slides.length - 1 ? 0 : current + 1)) {
            // Right image partially behind middle
            style += " z-20 scale-90 translate-x-32 opacity-70";
          } else {
            style += " hidden";
          }

          return (
            <div key={slide.id} className={style}>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-120 h-90 object-cover rounded-lg"
              />
              {index === current && (
                <div className="absolute bottom-0 w-full h-auto text-center bg-yellow-400 text-black font-bold py-2 rounded-b-lg">
                  {slide.title}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 text-xl -translate-y-1/2 left-4 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-gray-700 hover:text-white transition"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 text-xl -translate-y-1/2 right-4 bg-yellow-400 text-black p-3 rounded-full shadow-lg transition hover:bg-gray-700 hover:text-white"
      >
        &gt;
      </button>
    </div>
    </div>
    </>
  );
};

export default Slider;

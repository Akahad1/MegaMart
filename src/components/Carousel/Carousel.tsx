"use client";
import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const slides = [
  {
    id: 1,
    title: "Best Deal Online on smart watches",
    subtitle: "SMART WEARABLE.",
    discount: "UP to 80% OFF",
    image: "https://i.ibb.co.com/V2rpTYv/image-2.png",
  },
  {
    id: 2,
    title: "Best Deal Online on smart watches",
    subtitle: "SMART WEARABLE.",
    discount: "UP to 80% OFF",
    image: "/watch-image.png",
  },
];

const Carousel: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative  mt-10 w-full bg-[#1a1a3b] rounded-lg shadow-lg h-80 ml-1 ">
      {/* Slide Content */}
      <div className="flex justify-between ml-5 items-center h-full relative">
        <AnimatePresence mode="wait">
          {slides.map(
            (slide, index) =>
              index === currentIndex && (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-8 lg:gap-52 px-8"
                >
                  {/* Text Content */}
                  <div className="text-left  text-white ">
                    <h1 className="lg:text-2xl text-sm font-medium">
                      {slide.title}
                    </h1>
                    <h2 className="lg:text-4xl text-xl font-bold mt-2">
                      {slide.subtitle}
                    </h2>
                    <p className="lg:text-lg text-sm mt-1 text-gray-300">
                      {slide.discount}
                    </p>
                  </div>

                  {/* Image */}
                  <Image
                    src={slide.image}
                    alt="Smart"
                    className="max-h-48 rounded-md lg:ml-80"
                    width={192}
                    height={192}
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Previous Button */}
      <div className="absolute top-1/2 -left-9 -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10">
        <button
          onClick={handlePrev}
          className="text-blue-600 bg-[#F3F9FB] hover:bg-[#e6f2f5] rounded-full p-3 transition"
        >
          <IoChevronBack className="h-6" />
        </button>
      </div>

      {/* Next Button */}
      <div className="absolute top-1/2 -right-9 -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-10">
        <button
          onClick={handleNext}
          className="text-blue-600 bg-[#F3F9FB] hover:bg-[#e6f2f5] rounded-full p-3 transition"
        >
          <IoChevronForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

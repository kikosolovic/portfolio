"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-[300px] w-full">
      <div className="absolute top-0 left-0 h-full w-full">
        <Image
          src={images[currentIndex]}
          alt={`Project image ${currentIndex + 1}`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute top-1/2 left-4 -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="p-2 bg-black/50 text-white rounded-full hover:bg-black/75"
        >
          <FaChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="p-2 bg-black/50 text-white rounded-full hover:bg-black/75"
        >
          <FaChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

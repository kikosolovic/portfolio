// // Initialization for ES Users
"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function ImageSlider2() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, []);
  return (
    <div className="embla" ref={emblaRef}>
      {" "}
      <div className="embla__container">
        {" "}
        <div className="embla__slide">Slide 1</div>{" "}
        <div className="embla__slide">Slide 2</div>{" "}
        <div className="embla__slide">Slide 3</div>{" "}
      </div>{" "}
    </div>
  );
}

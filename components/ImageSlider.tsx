"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";

type ImageGalleryProps = {
  images: string[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [galleryOpened, setGalleryOpened] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const diffstyle: string[] = [
    "group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80",
    "group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80",
  ];
  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
    setGalleryOpened(true);
  };

  const handleClose = () => {
    setGalleryOpened(false);
    setTimeout(() => setActiveImageIndex(null), 300);
  };

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev === null ? 0 : prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev === null ? 0 : prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryOpened, activeImageIndex]);

  var a = -1;
  return (
    <section className=" py-6d sm:py-8 lg:py-12select-none">
      <div className="max-w-screen-2xl px-4 mx-auto duration-1000 delay-300 opacity-100">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {images.map((image, index) => {
            a = a >= 3 ? 0 : a + 1;
            const EXP = a % 3 === 0 ? 0 : 1;
            return (
              <a key={index} className={diffstyle[EXP]}>
                <Image
                  src={image}
                  width={10000}
                  height={10000}
                  onClick={() => handleImageClick(index)}
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  VR
                </span>
              </a>
            );
          })}
        </ul>
      </div>

      {galleryOpened && (
        <div
          className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 select-none cursor-zoom-out"
          onClick={handleClose}
        >
          <div className="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-0 flex items-center justify-center text-white translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>

            {activeImageIndex !== null && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-8">
                <div className="relative max-w-5xl w-full  bg-white rounded-lg shadow-xl absolute top-3 right-3  focus:outline-none">
                  <Image
                    src={images[activeImageIndex]}
                    alt="gallery image"
                    width={1200}
                    height={800}
                    className="object-contain w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
              </div>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="transition-transform duration-300 absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

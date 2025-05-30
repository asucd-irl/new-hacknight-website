"use client";

import "./carousel.css";
import { carouselImages } from "../data/carousel";
import Image from "next/image";

export default function ImageCarousel() {
  return (
    <div className="overflow-x-hidden" data-astro-cid-carousel>
      <div className="flex w-fit gap-16 carousel">
        {carouselImages.map((item) => (
          <div
            key={`original-${item.id}`}
            className="relative w-[calc(90vw-2rem)] max-w-128 h-[48rem] lg:max-w-128 lg:w-128 lg:h-[48rem] -rotate-3"
          >
            <Image
              src={item.image}
              alt={`Carousel image ${item.id}`}
              fill
              className="object-contain"
            />
          </div>
        ))}

        {carouselImages.map((item) => (
          <div
            key={`duplicate-${item.id}`}
            className="relative w-[calc(90vw-2rem)] max-w-128 h-[40rem] lg:max-w-128 lg:w-128 lg:h-[40rem] -rotate-3"
          >
            <Image
              src={item.image}
              alt={`Carousel image ${item.id}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Extra flex element for layout */}
      <div className="flex justify-end p-4 md:px-8 lg:px-12"></div>
    </div>
  );
}

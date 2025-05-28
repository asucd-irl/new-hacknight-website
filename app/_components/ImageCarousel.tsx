"use client";

import "./carousel.css";

const IMAGE_PATH = "/images/rec.png";

// placeholder images for now
const CAROUSEL_ITEMS = [
  { id: 1, image: IMAGE_PATH },
  { id: 2, image: IMAGE_PATH },
  { id: 3, image: IMAGE_PATH },
  { id: 4, image: IMAGE_PATH },
  { id: 5, image: IMAGE_PATH },
  { id: 6, image: IMAGE_PATH },
];

export default function ImageCarousel() {
  return (
    <div className="overflow-x-hidden" data-astro-cid-carousel>
      {/* Carousel container with automatic scrolling */}
      <div className="flex w-fit gap-6 p-4 md:p-8 lg:px-12 carousel">
        {/* Original cards */}
        {CAROUSEL_ITEMS.map((item) => (
          <div
            key={`original-${item.id}`}
            className="w-[calc(90vw-2rem)] max-w-72 h-72 lg:max-w-96 lg:w-96 lg:h-96 bg-cover bg-center rounded-xl relative overflow-hidden"
            style={{ backgroundImage: `url('${item.image}')` }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black/75"></div>
            <div className="absolute bottom-5 left-5 right-5 p-5 rounded-xl border border-white/25 backdrop-blur-sm"></div>
          </div>
        ))}

        {/* Duplicated cards for seamless loop */}
        {CAROUSEL_ITEMS.map((item) => (
          <div
            key={`duplicate-${item.id}`}
            className="w-[calc(90vw-2rem)] max-w-72 h-72 lg:max-w-96 lg:w-96 lg:h-96 bg-cover bg-center rounded-xl relative overflow-hidden"
            style={{ backgroundImage: `url('${item.image}')` }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black/75"></div>
            <div className="absolute bottom-5 left-5 right-5 p-5 rounded-xl border border-white/25 backdrop-blur-sm"></div>
          </div>
        ))}
      </div>

      {/* Extra flex element for layout */}
      <div className="flex justify-end p-4 md:px-8 lg:px-12"></div>
    </div>
  );
}

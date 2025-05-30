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
      <div className="flex w-fit gap-16 p-4 md:p-12 lg:px-20 carousel">
        {CAROUSEL_ITEMS.map((item) => (
          <div
            key={`original-${item.id}`}
            className="flex flex-col items-center justify-start -rotate-3 shadow-2xl border-2 border-[#BBBBBB] bg-white w-[calc(90vw-2rem)] max-w-128 h-128 lg:max-w-128 lg:w-128 lg:h-128 relative overflow-hidden"
          >
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ width: "100%", height: "100%" }}
            >
              <div
                className="object-contain w-full h-full mt-3"
                style={{
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "95%",
                  height: "85%",
                  borderRadius: "inherit",
                }}
              ></div>
            </div>
          </div>
        ))}

        {CAROUSEL_ITEMS.map((item) => (
          <div
            key={`duplicate-${item.id}`}
            className="flex flex-col items-center justify-start -rotate-3 shadow-2xl border-2 border-[#BBBBBB] bg-white w-[calc(90vw-2rem)] max-w-128 h-128 lg:max-w-128 lg:w-128 lg:h-128 relative overflow-hidden"
          >
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ width: "100%", height: "100%" }}
            >
              <div
                className="object-contain w-full h-full mt-3"
                style={{
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "95%",
                  height: "85%",
                  borderRadius: "inherit",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Extra flex element for layout */}
      <div className="flex justify-end p-4 md:px-8 lg:px-12"></div>
    </div>
  );
}

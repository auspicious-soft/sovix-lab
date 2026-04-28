"use client";
import { useState, useRef, useEffect } from "react";

const slides = [
  {
    title: "Automated Inspection",
    type: "video",
    src: "/images/slider-video.mp4",
  },
  {
    title: "AI Quality Check",
    type: "image",
    src: "https://cdn.prod.website-files.com/663707040e249f46e537c481/66411c4712183937fed5b8f5_Stocksy_txpb100e025ELw300_Large_3957810.webp",
  },
  {
    title: "Smart Monitoring",
    type: "video",
    src: "/images/slider-video.mp4",
  },
];

export default function CardStackSlider() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const next = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === active) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    });
  }, [active]);

  return (
    <div className="pb-8">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-3 text-white">
        <h3 className="text-[#FFFFFF] text-base  md:text-[20px] font-jetbrainsmono uppercase tracking-[1px]">
          {slides[active].title}
        </h3>
        <div className="flex justify-between items-center gap-3 md:gap-5">
          <button
            onClick={() =>
              setActive((prev) => (prev - 1 + slides.length) % slides.length)
            }
            
          >
           <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 4.5L6.75 9L11.25 13.5" stroke="white" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

          </button>

          <span className="text-xs flex justify-between items-center gap-3 md:gap-5 font-semibold">
            {active + 1} <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.854012 1.69396C0.182012 1.69396 1.17421e-05 1.56796 1.17421e-05 0.839955C1.17421e-05 0.111955 0.182012 -4.50462e-05 0.854012 -4.50462e-05C1.51201 -4.50462e-05 1.70801 0.111955 1.70801 0.839955C1.70801 1.56796 1.51201 1.69396 0.854012 1.69396Z" fill="white"/>
</svg>
 {slides.length}
          </span>
          <button
            onClick={() => setActive((prev) => (prev + 1) % slides.length)}
            
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
  <path d="M0.524902 9.5249L5.0249 5.0249L0.524902 0.524902" stroke="white" stroke-width="1.05" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          </button>
        </div>
      </div>

      {/* CARD STACK */}
      <div className="relative w-full aspect-[16/7] ">
        {slides.map((slide, index) => {
          const position = (index - active + slides.length) % slides.length;

          return (
            <div
              key={index}
              onClick={next}
              className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
              style={{
                zIndex: slides.length - position,
                transform: `
                    translateY(${position * 20}px)
                    scale(${1 - position * 0.02})
                  `,
                opacity: position > 2 ? 0 : 1,
              }}
            >
              {/* MEDIA */}
              {slide.type === "video" ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={slide.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={slide.src}
                  className="w-full h-full object-cover"
                  alt=""
                />
              )}

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

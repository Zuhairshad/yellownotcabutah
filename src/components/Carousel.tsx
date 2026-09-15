"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

function ChevronIcon({ direction, className }: { direction: "left" | "right"; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Carousel({
  images,
  intervalMs = 4000,
}: {
  images: CarouselImage[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!hasMultiple || paused) return;
    const id = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearTimeout(id);
  }, [index, hasMultiple, paused, images.length, intervalMs]);

  const goTo = (i: number) => setIndex((i + images.length) % images.length);

  return (
    <div>
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-md"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {images.map((image, i) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className={`object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}

        {hasMultiple && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => goTo(index - 1)}
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-gold/90 text-navy opacity-70 shadow-md transition-opacity duration-200 hover:bg-gold hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronIcon direction="left" className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => goTo(index + 1)}
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-gold/90 text-navy opacity-70 shadow-md transition-opacity duration-200 hover:bg-gold hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronIcon direction="right" className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="mt-4 flex justify-center gap-2">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show image ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? "bg-gold-deep" : "bg-black/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

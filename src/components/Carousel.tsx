"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

export default function Carousel({
  images,
  intervalMs = 4000,
}: {
  images: CarouselImage[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-md">
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
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
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

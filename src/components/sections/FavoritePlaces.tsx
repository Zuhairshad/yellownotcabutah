import DarkPattern from "@/components/DarkPattern";
import Carousel from "@/components/Carousel";

export default function FavoritePlaces() {
  return (
    <DarkPattern className="py-20">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-bold text-gold sm:text-3xl">
          Some of Yellow Cab&apos;s favorite places and events
        </h2>
        <p className="mt-4 text-white/70">
          Salt Lake is an interesting little city with lots of fascinating
          history. We also have great hotel accommodations, places to eat,
          and plenty of night life. Here&apos;s a few of our favorites.
        </p>

        <div className="mx-auto mt-10 max-w-3xl">
          <Carousel
            images={[
              { src: "/images/place-halloween.jpg", alt: "Halloween themed Yellow Cab artwork" },
              { src: "/images/place-crystal-inn.jpg", alt: "Crystal Inn hotel" },
              { src: "/images/place-red-iguana.jpg", alt: "The Red Iguana restaurant" },
            ]}
          />
        </div>
      </div>
    </DarkPattern>
  );
}

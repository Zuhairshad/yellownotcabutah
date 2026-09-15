import DarkPattern from "@/components/DarkPattern";
import Carousel from "@/components/Carousel";

export default function TownCar() {
  return (
    <DarkPattern id="blackcar" className="py-20">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl font-bold text-gold sm:text-3xl">
          Town Car Service at Taxi Rates
        </h2>
        <p className="mt-4 text-white/70">
          In 2018 Yellow Cab Drivers&apos; Association finally brought back a
          simple concept to the local taxi industry. What if you could
          supply new high-end model vehicles and offer Town Car service, but
          do it at affordable taxi rates? If you&apos;re a customer who
          prefers green transportation, we have you covered too.
        </p>

        <div className="mx-auto mt-10 max-w-3xl">
          <Carousel
            images={[
              { src: "/images/blackcar-1.jpg", alt: "2023 Nissan Rogue town car" },
              { src: "/images/blackcar-2.jpg", alt: "Yellow Cab black SUV at the airport" },
              { src: "/images/blackcar-3.jpg", alt: "Yellow Cab town cars staged at the airport" },
            ]}
          />
        </div>
      </div>
    </DarkPattern>
  );
}

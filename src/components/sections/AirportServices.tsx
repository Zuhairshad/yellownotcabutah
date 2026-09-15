import Image from "next/image";
import Carousel from "@/components/Carousel";
import PullQuote from "@/components/PullQuote";

export default function AirportServices() {
  return (
    <section id="airport" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="text-2xl font-bold text-gold-deep sm:text-3xl">
            Yellow Cab Airport Taxi Services:
          </h2>
          <p className="mt-4 text-charcoal/80">
            Yellow Cab Utah is serving the Salt Lake International Airport.
            Curbside 9A is the only place to get transparent rates 24/7. Be
            cautious about other &ldquo;taxi service&rdquo; providers, and
            make sure they have a meter instead of a guess on price.
          </p>

          <div className="mt-8">
            <PullQuote>
              Taxi and Black Car Luxury Services at the airport just got a
              whole lot better!
            </PullQuote>
            <p className="mt-4 text-charcoal/60">
              When leaving the airport and stepping out to the curb, turn
              right and walk down to our booth and staging areas at 9A. You
              can catch a taxi or black car service and go in style. Taxis
              and Black Cars are always the same rates for you!
            </p>
          </div>
        </div>

        <div>
          <Carousel
            images={[
              { src: "/images/airport-taxi-1.jpg", alt: "Yellow Cab at Salt Lake airport curb" },
              { src: "/images/airport-taxi-2.jpg", alt: "Yellow Cab staging at 9A" },
            ]}
          />
          <Image
            src="/images/proud-member.jpg"
            alt="Salt Lake proud member"
            width={120}
            height={90}
            className="mt-6"
          />
        </div>
      </div>
    </section>
  );
}

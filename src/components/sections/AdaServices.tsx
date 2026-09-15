import Image from "next/image";
import PullQuote from "@/components/PullQuote";

export default function AdaServices() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gold-deep sm:text-3xl">
            Airport ADA Services
          </h2>

          <div className="mt-6">
            <PullQuote>Downstairs at 9A</PullQuote>
            <p className="mt-4 text-charcoal/60">
              ADA taxi services without the price headache! If an ADA isn&apos;t
              staged check in with our staff at the booth to get one pulled
              up in minutes. ADA services rated at $2.50 flag drop and
              $2.50/mile. $15.00 load/unload fee also applies.
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-md">
          <Image
            src="/images/ada-airport.jpg"
            alt="Yellow Cab ADA accessible van at the airport"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

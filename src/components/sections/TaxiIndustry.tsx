import Image from "next/image";

export default function TaxiIndustry() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-2xl font-bold text-gold sm:text-3xl">
            Fighting for the Taxi industry.
          </h2>
          <p className="mt-3 text-white/60">Deseret News Article September 4th, 2022:</p>

          <blockquote className="relative mt-6 border-l-4 border-gold pl-6">
            <span className="absolute -left-1 top-0 -translate-x-1/2 font-serif text-5xl leading-none text-gold">
              &ldquo;
            </span>
            <p className="text-xl italic text-gold">
              We can compete with Uber and Lyft!
            </p>
            <a href="#!" className="mt-2 inline-block text-sm text-white/50 hover:text-white">
              Read more!
            </a>
          </blockquote>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-lg">
          <Image
            src="/images/taxi-industry.jpg"
            alt="Yellow Cab drivers in front of the Yellow Cab building"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

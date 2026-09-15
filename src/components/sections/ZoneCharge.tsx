import Image from "next/image";

export default function ZoneCharge() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold text-gold-deep sm:text-3xl">
          What in the heck is a $25.00 minimum zone charge?
        </h2>
        <p className="mt-4 text-charcoal/80">
          The Salt Lake International Airport zone has 2 prices to consider.
          The drivers will always start their meters when they pick you up.
          If the meter runs over $25.00 you just pay the metered rate. If
          it&apos;s a shorter trip just pay the driver the $25.00 minimum for
          the zone. Easy peasy.
        </p>

        <div className="mt-10 overflow-hidden rounded-sm border border-black/10 shadow-md">
          <div className="flex items-center gap-2 bg-[#1b1b1b] px-4 py-3 text-white">
            <span className="text-sm font-semibold">Airport A9 Zone Pricing</span>
          </div>
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/zonemap.jpg"
              alt="Airport A9 zone pricing map"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

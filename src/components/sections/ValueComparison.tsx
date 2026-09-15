export default function ValueComparison() {
  return (
    <section id="in-the-news" className="scroll-mt-24 border-t border-black/5 bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold text-gold-deep sm:text-3xl">
          Best Value? Taxi&apos;s Take On Uber and Lyft.
        </h2>
        <h3 className="mt-2 text-xl font-bold text-charcoal">
          Never a Surge, and Cheaper by the Mile.
        </h3>
        <p className="mt-4 text-charcoal/80">
          People are coming back to traditional taxi services as they
          discover the true value in consistency and transparency. It&apos;s
          not just about knowing a price vs having to shop for a better
          value and taking the time and energy to know you&apos;re getting
          the better deal. With vetted drivers requiring a serious
          background check and their vehicles complying with stringent
          inspection and repair regulations, the true value in using Yellow
          Cabs for transportation is far superior.
        </p>

        <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-sm border border-gold/30 bg-gradient-to-br from-charcoal to-navy shadow-lg">
          <div className="absolute inset-x-0 top-0 flex items-center gap-2 bg-gradient-to-b from-black/60 to-transparent px-4 py-3 text-white">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">
              CBS
            </span>
            <span className="text-sm font-semibold">
              Which Are More Affordable -- Ride-Shares Or Yellow Cabs?
            </span>
          </div>
          <button
            type="button"
            aria-label="Play video"
            className="group absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-16 w-24 items-center justify-center rounded-lg bg-red-600 shadow-lg ring-2 ring-gold/0 transition-all duration-200 group-hover:scale-105 group-hover:ring-gold/70">
              <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
            </span>
          </button>
        </div>

        <p className="mt-10 text-2xl font-bold text-gold-deep">
          Winner!! - Yellow Cab pricing is 35% to 82% cheaper than Uber and
          Lyft.
        </p>
      </div>
    </section>
  );
}

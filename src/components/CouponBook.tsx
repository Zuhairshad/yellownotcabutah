export default function CouponBook() {
  return (
    <div className="relative mx-auto h-48 w-60 sm:h-56 sm:w-72">
      <div className="absolute inset-0 rotate-6 rounded-sm bg-navy shadow-xl" />

      <div className="absolute inset-0 -rotate-3 overflow-hidden rounded-sm border-2 border-dashed border-gold/70 bg-gradient-to-br from-navy-light to-navy shadow-xl">
        <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-light" />
        <span className="absolute left-1/2 bottom-0 h-4 w-4 -translate-x-1/2 translate-y-1/2 rounded-full bg-navy-light" />

        <div className="flex h-full flex-col items-center justify-center px-5 text-center text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/80">
            $20.00 Coupon Book
          </p>
          <p className="mt-2 font-heading text-xl font-bold tracking-wide sm:text-2xl">
            Yellow Cab Scrip
          </p>
          <span className="mt-3 h-px w-16 bg-gold/50" />
          <p className="mt-3 text-[11px] tracking-widest text-white/70">
            SALT LAKE CITY
          </p>
          <p className="text-[11px] tracking-widest text-white/70">
            521-2100 OR 521-1862
          </p>
        </div>
      </div>

      <div className="absolute -right-3 -top-3 flex h-14 w-14 rotate-12 items-center justify-center rounded-full border-2 border-navy bg-gold text-center shadow-lg">
        <span className="font-heading text-xs font-extrabold leading-tight text-navy">
          15%
          <br />
          OFF
        </span>
      </div>
    </div>
  );
}

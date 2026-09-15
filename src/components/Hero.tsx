export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/images/hero-poster.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-md sm:text-6xl">
          Yellow Cab Utah
        </h1>
        <p className="mt-3 text-lg text-white/90 sm:text-xl">
          Home of the Great Ride!
        </p>

        <a
          href="tel:801-521-2100"
          className="mt-8 rounded-full bg-gold px-10 py-4 text-xl font-bold text-charcoal shadow-lg transition-transform hover:scale-105"
        >
          801-521-2100
        </a>

        <a
          href="#!"
          aria-label="Ride Portal"
          className="mt-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold text-lg font-semibold text-gold"
        >
          P
        </a>
      </div>
    </section>
  );
}

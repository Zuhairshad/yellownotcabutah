import DarkPattern from "@/components/DarkPattern";
import {
  AndroidIcon,
  AppleIcon,
  GearIcon,
  MailIcon,
  PhoneIcon,
  PlaneIcon,
} from "@/components/icons";

const ways = [
  {
    icon: AndroidIcon,
    title: "For Android",
    body: (
      <>
        The smart choice in rider apps. Global in scope - and used in 60
        major US cities, <span className="text-gold">CURB</span> has many
        great features surpassing the competition - without the fear of
        unproven drivers and those ridiculous surge rates.
      </>
    ),
  },
  {
    icon: AppleIcon,
    title: "For iPhone",
    body: (
      <>
        The smart choice in rider apps. Global in scope - and used in 95
        major US cities, <span className="text-gold">CURB</span> has many
        great features surpassing the competition - without the fear of
        unproven drivers and those ridiculous surge rates.
      </>
    ),
  },
  {
    icon: GearIcon,
    title: "Portal Bookings",
    body: (
      <>
        Harnesses the awesome power of{" "}
        <span className="text-gold">The Portal</span>. No apps, no
        profiles, no phone. You control your transportation. The perfect
        business solution for large scale transportation logistics.
      </>
    ),
  },
  {
    icon: MailIcon,
    title: "Reservations online",
    body: (
      <>
        We have you covered there too. On line reservation booking is what
        we do best. After completing our{" "}
        <span className="text-gold">reservation form</span> you will
        receive a convenient email receipt for you to double check your
        information.
      </>
    ),
  },
  {
    icon: PlaneIcon,
    title: "Airport Taxi Services",
    body: "Meet us at our convenient 9A booth and staging area for the fastest way off the airport. If you've made a reservation, we're holding it for you there!",
  },
  {
    icon: PhoneIcon,
    title: "The Old Fashioned Way",
    body: (
      <>
        We have Customer Service Coordinators standing by 24/7. You can{" "}
        <span className="text-gold">call us</span> anytime and relax,
        knowing our high tech operations center will get you where you
        need to go efficiently and safely. Call anytime.
      </>
    ),
  },
];

export default function AllWaysToRide() {
  return (
    <DarkPattern id="products" className="py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gold sm:text-3xl">
            All the ways Yellow moves you...
          </h2>
          <p className="mt-3 text-white/70">
            No matter when how or why you&apos;re going - Yellow Cab Utah
            has you covered.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {ways.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                <Icon className="h-8 w-8" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-gold">{title}</h3>
                <p className="mt-1 text-sm text-white/70">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DarkPattern>
  );
}

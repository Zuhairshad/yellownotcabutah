import CouponBook from "@/components/CouponBook";
import {
  BuildingIcon,
  CakeIcon,
  GraduationCapIcon,
  LinkIcon,
  MailIcon,
  TaxiIcon,
} from "@/components/icons";

const perks = [
  { icon: MailIcon, label: "Discounts for your best customers!" },
  { icon: CakeIcon, label: "Parties or Events" },
  { icon: BuildingIcon, label: "Medical Transport" },
  { icon: GraduationCapIcon, label: "College Student Rides" },
];

export default function DiscountCoupons() {
  return (
    <section
      id="coupons"
      className="scroll-mt-24 bg-navy-light bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_60%)] py-20 text-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <CouponBook />

        <div>
          <h2 className="text-2xl font-bold text-gold sm:text-3xl">
            Looking for a great deal?
          </h2>
          <p className="mt-4 text-white/70">
            These discount coupon books can get you a 15% discount on
            regular metered rates. Buy{" "}
            <a href="#!" className="font-semibold text-gold hover:underline">
              online
            </a>{" "}
            and save!
          </p>

          <div className="mt-8 flex items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
              <TaxiIcon className="h-7 w-7" />
            </span>

            <div>
              <h3 className="text-lg font-bold text-gold">
                Save on transportation for:
              </h3>
              <ul className="mt-3 space-y-3">
                {perks.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-gold" />
                    <span className="text-white/85">{label}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3">
                  <LinkIcon className="h-5 w-5 shrink-0 text-gold" />
                  <a
                    href="https://www.alignable.com/"
                    className="rounded bg-white px-3 py-1 text-sm font-semibold text-charcoal hover:opacity-90"
                  >
                    Alignable
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

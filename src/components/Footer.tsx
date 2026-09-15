import Image from "next/image";
import { FacebookIcon, GooglePlusIcon, YelpIcon } from "@/components/social-icons";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <Image
          src="/images/footer-logo.jpg"
          alt="Yellow Cab 801.521.2100, 1-5 passengers same price"
          width={480}
          height={320}
          className="mx-auto w-full max-w-sm rounded-sm"
        />

        <p className="mt-8 text-white/80">
          435 S 600 W,
          <br />
          Salt Lake City, UT 84101
        </p>

        <ul className="mt-4 space-y-1 text-white/80">
          <li>Email: contact@yellowcabutah.com</li>
          <li>Dispatch: 801-521-2100</li>
          <li>Headquarters: 801-521-1856</li>
          <li>Fax: 801-521-1857</li>
        </ul>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://www.facebook.com/YellowCabMe/"
            aria-label="Facebook"
            className="flex h-12 w-12 items-center justify-center rounded bg-gold text-charcoal hover:opacity-90"
          >
            <FacebookIcon className="h-6 w-6" />
          </a>
          <a
            href="https://www.yelp.com/biz/yellow-cab-salt-lake-city"
            aria-label="Yelp"
            className="flex h-12 w-12 items-center justify-center rounded bg-gold text-charcoal hover:opacity-90"
          >
            <YelpIcon className="h-6 w-6" />
          </a>
          <a
            href="https://plus.google.com/u/0/112508693970224164283"
            aria-label="Google Plus"
            className="flex h-12 w-12 items-center justify-center rounded bg-gold text-charcoal hover:opacity-90"
          >
            <GooglePlusIcon className="h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/20 py-6 text-center text-sm text-white/60">
        © 2025. Yellow Cab Utah &amp; Hallooou. All rights reserved.
      </div>
    </footer>
  );
}

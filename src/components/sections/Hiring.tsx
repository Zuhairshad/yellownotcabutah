export default function Hiring() {
  return (
    <section id="opportunities" className="scroll-mt-24 border-t border-black/5 bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-gold-deep sm:text-3xl">
            We Need Professional Independent Contractor Drivers!
          </h2>
          <h3 className="mt-4 text-lg font-bold text-charcoal">
            Did you know taxi drivers can easily make over $100K annually?
          </h3>
          <p className="mt-3 text-charcoal/80">
            If you&apos;re a seasoned professional driver, or just a taxi
            driver at heart, come give us a try. Our independent drivers all
            earn a high wage for their work compared with Uber and Lyft. If
            you&apos;re tired of sharing so much of your income with a
            merchant services company like Uber and Lyft, our system is
            designed for driver success, and we help every step of the way.
          </p>
          <a
            href="#"
            className="mt-4 inline-block font-semibold text-gold-link hover:underline"
          >
            Driver Application
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gold-deep sm:text-3xl">
            We Need Professional Customer Service Reps!
          </h2>
          <h3 className="mt-4 text-lg font-bold text-charcoal">
            Come join our airport operations group, and be part of our
            transportation team.
          </h3>
          <p className="mt-3 text-charcoal/80">
            We are a proud and diverse Equal Opportunity Employer. We never
            discriminate based on age, race, ethnicity, national origin,
            religion, gender, sexual orientation, disability, medical
            history, or life mistakes. Email us at{" "}
            <a href="mailto:info@yellowcabutah.com" className="text-gold-link hover:underline">
              info@yellowcabutah.com
            </a>{" "}
            and include your resume.
          </p>
          <div className="mt-4 flex flex-col gap-1">
            <a href="#" className="font-semibold text-gold-link hover:underline">
              Equal Opportunity Policy
            </a>
            <a href="#" className="font-semibold text-gold-link hover:underline">
              Title VI and ADA Policy
            </a>
            <a href="#" className="font-semibold text-gold-link hover:underline">
              Discrimination Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

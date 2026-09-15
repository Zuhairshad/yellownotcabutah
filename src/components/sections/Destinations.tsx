const groups = [
  {
    title: "Downtown Hotels and Conventions",
    blurb:
      "To or From the airport, up to 5 passengers per vehicle: City Flat Rates apply and posted at our booth.",
    items: [
      { name: "Crystal Inn", detail: "Flat Rate $27.00" },
      { name: "Salt Palace", detail: "Flat Rate $27.00" },
      { name: "Little America", detail: "Flat Rate $27.00" },
      { name: "University Marriott", detail: "Flat Rate $35.00" },
    ],
  },
  {
    title: "SkiUtah Destinations",
    blurb:
      "To or From the airport, up to 5 passengers per vehicle. We run the meter for your convenience.",
    items: [
      { name: "Park City", detail: "Averages $115.00" },
      { name: "Deer Valley", detail: "Averages $130.00" },
      { name: "Solitude Brighton", detail: "Averages $100.00" },
      { name: "Alta Snowbird", detail: "Averages $100.00" },
    ],
  },
  {
    title: "Utah Destinations",
    blurb:
      "To or From the airport, up to 5 passengers per vehicle. We run the meter for your convenience.",
    items: [
      { name: "Lagoon", detail: "Averages $60.00" },
      { name: "Hogle Zoo", detail: "Averages $40.00" },
      { name: "Olympic Oval in Kearns", detail: "Averages $50.00" },
    ],
  },
];

export default function Destinations() {
  return (
    <section className="border-t border-black/5 bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-bold text-gold-deep">{group.title}</h3>
            <p className="mt-2 text-sm text-charcoal/70">{group.blurb}</p>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-charcoal/80">
              {group.items.map((item) => (
                <li key={item.name}>
                  <span className="font-bold text-charcoal">{item.name}:</span>{" "}
                  {item.detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

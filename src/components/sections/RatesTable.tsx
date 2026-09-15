const columns = [
  {
    label: "City",
    flag: "$2.50",
    mile: "$2.30",
    extra: "Airport: Gates",
  },
  {
    label: "Airport",
    flag: "$5.00",
    mile: "$2.70",
    extra: "Airport: Gates",
  },
  {
    label: "ADA",
    flag: "$2.50",
    mile: "$2.50",
    extra: "Assist: $15.00",
  },
  {
    label: "Moving",
    flag: "$2.50",
    mile: "$2.30",
    extra: "Moving: $10.00",
  },
  {
    label: "+Bike",
    flag: "$2.50",
    mile: "$2.30",
    extra: "Bikes:1-3 $5-$15.00",
  },
];

export default function RatesTable() {
  return (
    <section id="rates" className="scroll-mt-24 border-t border-black/5 bg-offwhite py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold text-gold-deep sm:text-3xl">
          Yellow Cab Meter Rates
        </h2>

        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="pr-6 pb-3 font-bold text-charcoal">Rates</th>
                {columns.map((col) => (
                  <th key={col.label} className="pr-6 pb-3 font-bold text-charcoal">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-charcoal/80">
              <tr>
                <td className="pr-6 py-1 font-semibold">Flag</td>
                {columns.map((col) => (
                  <td key={col.label} className="pr-6 py-1">
                    {col.flag}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="pr-6 py-1 font-semibold">/Mile</td>
                {columns.map((col) => (
                  <td key={col.label} className="pr-6 py-1">
                    {col.mile}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="pr-6 pt-3 font-semibold align-top">Extras</td>
                {columns.map((col) => (
                  <td key={col.label} className="pr-6 pt-3 align-top">
                    {col.extra}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AirportServices from "@/components/sections/AirportServices";
import AdaServices from "@/components/sections/AdaServices";
import RatesTable from "@/components/sections/RatesTable";
import ZoneCharge from "@/components/sections/ZoneCharge";
import Destinations from "@/components/sections/Destinations";
import Hiring from "@/components/sections/Hiring";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <AirportServices />
      <AdaServices />
      <RatesTable />
      <ZoneCharge />
      <Destinations />
      <Hiring />
    </main>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AirportServices from "@/components/sections/AirportServices";
import AdaServices from "@/components/sections/AdaServices";
import RatesTable from "@/components/sections/RatesTable";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <AirportServices />
      <AdaServices />
      <RatesTable />
    </main>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AirportServices from "@/components/sections/AirportServices";

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      <Hero />
      <AirportServices />
    </main>
  );
}

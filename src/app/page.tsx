import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AirportServices from "@/components/sections/AirportServices";
import AdaServices from "@/components/sections/AdaServices";
import RatesTable from "@/components/sections/RatesTable";
import ZoneCharge from "@/components/sections/ZoneCharge";
import Destinations from "@/components/sections/Destinations";
import Hiring from "@/components/sections/Hiring";
import ValueComparison from "@/components/sections/ValueComparison";
import TaxiIndustry from "@/components/sections/TaxiIndustry";
import DiscountCoupons from "@/components/sections/DiscountCoupons";
import TownCar from "@/components/sections/TownCar";
import AllWaysToRide from "@/components/sections/AllWaysToRide";
import FavoritePlaces from "@/components/sections/FavoritePlaces";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Header />
        <Hero />
        <AirportServices />
        <AdaServices />
        <RatesTable />
        <ZoneCharge />
        <Destinations />
        <Hiring />
        <ValueComparison />
        <TaxiIndustry />
        <DiscountCoupons />
        <TownCar />
        <AllWaysToRide />
        <FavoritePlaces />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

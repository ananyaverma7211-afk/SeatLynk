import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchSection from "../components/SearchSection";
import HowItWorks from "../components/HowItWorks";
import FeaturedTickets from "../components/FeaturedTickets";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchSection />
      <HowItWorks />
      <FeaturedTickets />
    </>
  );
}

export default Home;
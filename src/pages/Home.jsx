import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchSection from "../components/SearchSection";
import HowItWorks from "../components/HowItWorks";
import FeaturedTickets from "../components/FeaturedTickets";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchSection />
      <HowItWorks />
      <FeaturedTickets />
      <Footer />
    </>
  );
}

export default Home;
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Dashboard from "../components/Dashboard";
import HowItWorks from "../components/HowItWorks";
import FeaturedTickets from "../components/FeaturedTickets";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Dashboard />
      <HowItWorks />
      <FeaturedTickets />
      <Footer />
    </>
  );
}

export default Home;
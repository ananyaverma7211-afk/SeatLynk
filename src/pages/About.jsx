import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-page">
        <h1>About SeatLynk 🚆</h1>

        <p>
          SeatLynk is a railway ticket resale platform where users can securely
          list unused train tickets and find tickets from other passengers.
        </p>

        <h2>Features</h2>

        <ul>
          <li>✅ Sell Railway Tickets</li>
          <li>✅ Buy Available Tickets</li>
          <li>✅ Search Tickets</li>
          <li>✅ Delete Tickets</li>
          <li>✅ View Ticket Details</li>
        </ul>

        <h2>Technology Used</h2>

        <ul>
          <li>React JS</li>
          <li>React Router</li>
          <li>CSS</li>
          <li>Local Storage</li>
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default About;
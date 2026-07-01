import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Don't Cancel Your Ticket.</h1>
        <h1>Sell It on SeatLynk.</h1>

        <p>
          Connect with verified travelers and recover your ticket cost
          instead of losing money on cancellation.
        </p>

        <div className="hero-buttons">
  <Link to="/sell">
    <button className="sell-btn">Sell Ticket</button>
  </Link>

  <Link to="/buy">
    <button className="buy-btn">Buy Ticket</button>
  </Link>
</div>
      </div>
    </section>
  );
}

export default Hero;
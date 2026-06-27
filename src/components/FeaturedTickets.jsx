function FeaturedTickets() {
  return (
    <section className="featured-section">
      <h2>Featured Tickets</h2>

      <div className="ticket-container">

        <div className="ticket-card">
          <h3>Delhi → Lucknow</h3>
          <p>Date: 10 July 2026</p>
          <p>Class: 3AC</p>
          <p>Price: ₹850</p>
          <button>View Details</button>
        </div>

        <div className="ticket-card">
          <h3>Mumbai → Goa</h3>
          <p>Date: 12 July 2026</p>
          <p>Class: Sleeper</p>
          <p>Price: ₹650</p>
          <button>View Details</button>
        </div>

        <div className="ticket-card">
          <h3>Jaipur → Delhi</h3>
          <p>Date: 15 July 2026</p>
          <p>Class: 2AC</p>
          <p>Price: ₹1100</p>
          <button>View Details</button>
        </div>

      </div>
    </section>
  );
}

export default FeaturedTickets;
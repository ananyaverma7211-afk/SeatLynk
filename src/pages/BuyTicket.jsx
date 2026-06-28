import Navbar from "../components/Navbar";

function BuyTicket() {
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
  return (
    <>
      <Navbar />

      <section className="buy-page">
        <h1>Available Tickets</h1>

        <div className="ticket-grid">
          {tickets.map((ticket) => (
            <div className="buy-card" key={ticket.pnr}>
              <span className="badge">{ticket.status}</span>

              <h2>{ticket.trainName}</h2>

<h3>
  {ticket.from} ➜ {ticket.to}
</h3>

<p><strong>Date:</strong> {ticket.date}</p>
<p><strong>Class:</strong> {ticket.travelClass}</p>

<p><strong>Passenger:</strong> {ticket.passengerName}</p>

<h2>₹{ticket.sellingPrice}</h2>

              <button>Buy Ticket</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default BuyTicket;
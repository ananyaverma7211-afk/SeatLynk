import Navbar from "../components/Navbar";

function BuyTicket() {
  const tickets = [
    {
      id: 1,
      train: "Rajdhani Express",
      from: "Delhi",
      to: "Lucknow",
      date: "10 July 2026",
      class: "3AC",
      price: "₹850",
      status: "Confirmed",
    },
    {
      id: 2,
      train: "Shatabdi Express",
      from: "Delhi",
      to: "Chandigarh",
      date: "12 July 2026",
      class: "CC",
      price: "₹650",
      status: "Confirmed",
    },
    {
      id: 3,
      train: "Duronto Express",
      from: "Mumbai",
      to: "Pune",
      date: "14 July 2026",
      class: "2AC",
      price: "₹950",
      status: "RAC",
    },
    {
      id: 4,
      train: "Vande Bharat",
      from: "Delhi",
      to: "Varanasi",
      date: "18 July 2026",
      class: "EC",
      price: "₹1400",
      status: "Confirmed",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="buy-page">
        <h1>Available Tickets</h1>

        <div className="ticket-grid">
          {tickets.map((ticket) => (
            <div className="buy-card" key={ticket.id}>
              <span className="badge">{ticket.status}</span>

              <h2>{ticket.train}</h2>

              <h3>
                {ticket.from} ➜ {ticket.to}
              </h3>

              <p><strong>Date:</strong> {ticket.date}</p>
              <p><strong>Class:</strong> {ticket.class}</p>

              <h2>{ticket.price}</h2>

              <button>Buy Ticket</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default BuyTicket;
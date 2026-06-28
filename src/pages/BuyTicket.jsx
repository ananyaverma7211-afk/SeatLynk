import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function BuyTicket() {
   const [tickets, setTickets] = useState([]);

useEffect(() => {
  const savedTickets =
    JSON.parse(localStorage.getItem("tickets")) || [];

  setTickets(savedTickets);
}, []);
    const [search, setSearch] = useState("");
    const handleDelete = (pnr) => {
  const updatedTickets = tickets.filter(
    (ticket) => ticket.pnr !== pnr
  );

  setTickets(updatedTickets);

  localStorage.setItem(
    "tickets",
    JSON.stringify(updatedTickets)
  );

  alert("🗑 Ticket Deleted Successfully!");
};

  return (
    <>
      <Navbar />

      <section className="buy-page">
        <h1>Available Tickets</h1>
        <input
  type="text"
  placeholder="🔍 Search by Train, From or To"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="search-box"
/>

        <div className="ticket-grid">
          {tickets
  .filter((ticket) =>
    ticket.trainName.toLowerCase().includes(search.toLowerCase()) ||
    ticket.from.toLowerCase().includes(search.toLowerCase()) ||
    ticket.to.toLowerCase().includes(search.toLowerCase())
  )
  .map((ticket) => (
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
              <button
  className="delete-btn"
  onClick={() => handleDelete(ticket.pnr)}
>
  🗑 Delete Ticket
</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default BuyTicket;
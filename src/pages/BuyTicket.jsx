import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function BuyTicket() {
   
   const [tickets, setTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState(null);

useEffect(() => {
  const savedTickets =
    JSON.parse(localStorage.getItem("tickets")) || [];
    console.log("Saved Tickets:", savedTickets);

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
            {tickets.length === 0 && (
 <h2 className="no-ticket">
  No Tickets Available 🚆
</h2>
)}
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
 
<button
  className="details-btn"
  onClick={() => setSelectedTicket(ticket)}
>
  View Details
</button>
              <button
  onClick={() =>
    alert(
      `Booking request sent!\n\nContact Seller:\n📞 ${ticket.phone}\n📧 ${ticket.email}`
    )
  }
>
  Buy Ticket
  </button>

              <button
  className="delete-btn"
  onClick={() => handleDelete(ticket.pnr)}
>
  🗑 Delete Ticket
</button>
            </div>
          ))}
        </div>
        {selectedTicket && (
  <div className="modal-overlay">
    <div className="modal">

      <h2>🚆 Ticket Details</h2>

      <p><strong>Passenger:</strong> {selectedTicket.passengerName}</p>
      <p><strong>PNR:</strong> {selectedTicket.pnr}</p>
      <p><strong>Train No:</strong> {selectedTicket.trainNumber}</p>
      <p><strong>Train:</strong> {selectedTicket.trainName}</p>
      <p><strong>From:</strong> {selectedTicket.from}</p>
      <p><strong>To:</strong> {selectedTicket.to}</p>
      <p><strong>Date:</strong> {selectedTicket.date}</p>
      <p><strong>Class:</strong> {selectedTicket.travelClass}</p>
      <p><strong>Seat:</strong> {selectedTicket.seatNumber}</p>
      <p><strong>Status:</strong> {selectedTicket.status}</p>
      <p><strong>Phone:</strong> {selectedTicket.phone}</p>
      <p><strong>Email:</strong> {selectedTicket.email}</p>
      <p><strong>Original Price:</strong> ₹{selectedTicket.originalPrice}</p>
      <p><strong>Selling Price:</strong> ₹{selectedTicket.sellingPrice}</p>
      <p><strong>Reason:</strong> {selectedTicket.reason}</p>

      <button
        className="close-btn"
        onClick={() => setSelectedTicket(null)}
      >
        Close
      </button>

    </div>
  </div>
)}
      </section>
      <Footer />
    </>
  );
}

export default BuyTicket;
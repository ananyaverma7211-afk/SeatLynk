import { useState } from "react";
import Navbar from "../components/Navbar";

function SellTicket() {

  const [formData, setFormData] = useState({
    passengerName: "",
    pnr: "",
    trainNumber: "",
    trainName: "",
    from: "",
    to: "",
    date: "",
    travelClass: "",
    seatNumber: "",
    originalPrice: "",
    sellingPrice: "",
    phone: "",
    email: "",
    reason: "",
    status: "",
  });
    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Empty field validation
    for (const key in formData) {
      if (formData[key] === "") {
        alert("Please fill all fields.");
        return;
      }
    }

    // Selling price validation
    if (Number(formData.sellingPrice) > Number(formData.originalPrice)) {
      alert("Selling price cannot be greater than original ticket price.");
      return;
    }

    // Get old tickets
    const oldTickets =
      JSON.parse(localStorage.getItem("tickets")) || [];

    // Save new ticket
    oldTickets.push(formData);

    localStorage.setItem("tickets", JSON.stringify(oldTickets));

    alert("🎉 Ticket Listed Successfully!");

    // Reset form
    setFormData({
      passengerName: "",
      pnr: "",
      trainNumber: "",
      trainName: "",
      from: "",
      to: "",
      date: "",
      travelClass: "",
      seatNumber: "",
      originalPrice: "",
      sellingPrice: "",
      phone: "",
      email: "",
      reason: "",
      status: "",
    });
  };
    return (
    <>
      <Navbar />

      <section className="sell-page">
        <div className="form-card">

          <h1>🚆 Sell Your Ticket</h1>

          <p>
            List your railway ticket securely and recover your travel cost.
          </p>

          <form className="sell-form" onSubmit={handleSubmit}>
          <div className="input-group">
  <label>Passenger Name</label>
  <input
    type="text"
    name="passengerName"
    value={formData.passengerName}
    onChange={handleChange}
    placeholder="Enter passenger name"
  />
</div>

<div className="row">
  <div className="input-group">
    <label>PNR Number</label>
    <input
      type="text"
      name="pnr"
      value={formData.pnr}
      onChange={handleChange}
      placeholder="10-digit PNR"
    />
  </div>

  <div className="input-group">
    <label>Train Number</label>
    <input
      type="text"
      name="trainNumber"
      value={formData.trainNumber}
      onChange={handleChange}
      placeholder="Ex: 12345"
    />
  </div>
</div>

<div className="input-group">
  <label>Train Name</label>
  <input
    type="text"
    name="trainName"
    value={formData.trainName}
    onChange={handleChange}
    placeholder="Rajdhani Express"
  />
</div>

<div className="row">
  <div className="input-group">
    <label>From</label>
    <input
      type="text"
      name="from"
      value={formData.from}
      onChange={handleChange}
      placeholder="Delhi"
    />
  </div>

  <div className="input-group">
    <label>To</label>
    <input
      type="text"
      name="to"
      value={formData.to}
      onChange={handleChange}
      placeholder="Lucknow"
    />
  </div>
</div>

<div className="row">
  <div className="input-group">
    <label>Journey Date</label>
    <input
      type="date"
      name="date"
      value={formData.date}
      onChange={handleChange}
    />
  </div>

  <div className="input-group">
    <label>Class</label>

    <select
      name="travelClass"
      value={formData.travelClass}
      onChange={handleChange}
    >
      <option value="">Select Class</option>
      <option value="SL">SL</option>
      <option value="3AC">3AC</option>
      <option value="2AC">2AC</option>
      <option value="1AC">1AC</option>
    </select>
  </div>
</div>
<div className="row">
  <div className="input-group">
    <label>Seat Number</label>
    <input
      type="text"
      name="seatNumber"
      value={formData.seatNumber}
      onChange={handleChange}
      placeholder="B2 - 34"
    />
  </div>

  <div className="input-group">
    <label>Original Ticket Price (₹)</label>
    <input
      type="number"
      name="originalPrice"
      value={formData.originalPrice}
      onChange={handleChange}
      placeholder="850"
    />
  </div>
</div>

<div className="input-group">
  <label>Selling Price (₹)</label>
  <input
    type="number"
    name="sellingPrice"
    value={formData.sellingPrice}
    onChange={handleChange}
    placeholder="Enter selling price"
  />
</div>

<div className="row">
  <div className="input-group">
    <label>Phone Number</label>
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="9876543210"
    />
  </div>

  <div className="input-group">
    <label>Email</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="example@gmail.com"
    />
  </div>
</div>

<div className="input-group">
  <label>Reason for Selling</label>

  <textarea
    rows="4"
    name="reason"
    value={formData.reason}
    onChange={handleChange}
    placeholder="Why are you selling this ticket?"
  ></textarea>
</div>

<div className="input-group">
  <label>Ticket Status</label>

  <div className="status-options">

    <label>
      <input
        type="radio"
        name="status"
        value="Confirmed"
        checked={formData.status === "Confirmed"}
        onChange={handleChange}
      />
      Confirmed
    </label>

    <label>
      <input
        type="radio"
        name="status"
        value="RAC"
        checked={formData.status === "RAC"}
        onChange={handleChange}
      />
      RAC
    </label>

    <label>
      <input
        type="radio"
        name="status"
        value="Waiting"
        checked={formData.status === "Waiting"}
        onChange={handleChange}
      />
      Waiting
    </label>

  </div>
</div>

<button type="submit" className="submit-btn">
  🚆 List My Ticket
</button>
          </form>

        </div>
      </section>
    
    </>
    )
}

export default SellTicket;

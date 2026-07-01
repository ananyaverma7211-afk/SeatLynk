import { useEffect, useState } from "react";

function Dashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("tickets")) || [];

    setTickets(saved);
  }, []);

  const confirmed = tickets.filter(
    (t) => t.status === "Confirmed"
  ).length;

  const rac = tickets.filter(
    (t) => t.status === "RAC"
  ).length;

  const waiting = tickets.filter(
    (t) => t.status === "Waiting"
  ).length;

  return (
    <section className="dashboard">
      <h2>📊 SeatLynk Statistics</h2>

      <div className="dashboard-grid">

        <div className="stat-card">
          <h3>🚆 Total Tickets</h3>
          <h1>{tickets.length}</h1>
        </div>

        <div className="stat-card">
          <h3>✅ Confirmed</h3>
          <h1>{confirmed}</h1>
        </div>

        <div className="stat-card">
          <h3>🟡 RAC</h3>
          <h1>{rac}</h1>
        </div>

        <div className="stat-card">
          <h3>🔴 Waiting</h3>
          <h1>{waiting}</h1>
        </div>

      </div>
    </section>
  );
}

export default Dashboard;
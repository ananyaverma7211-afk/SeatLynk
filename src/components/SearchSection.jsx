function SearchSection() {
  return (
    <section className="search-section">
      <h2>Find Your Train Ticket</h2>

      <div className="search-box">

        <input
          type="text"
          placeholder="From"
        />

        <input
          type="text"
          placeholder="To"
        />

        <input
          type="date"
        />

        <button>Search Tickets</button>

      </div>
    </section>
  );
}

export default SearchSection;
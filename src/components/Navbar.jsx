function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🚆 RailSwap</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Buy Ticket</li>
        <li>Sell Ticket</li>
        <li>About</li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
}

export default Navbar;
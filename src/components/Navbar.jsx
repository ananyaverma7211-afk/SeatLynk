import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🚆 RailSwap</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/buy">Buy Ticket</Link></li>
        <li><Link to="/sell">Sell Ticket</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <div className="nav-buttons">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

        <Link to="/register">
          <button className="register-btn">Register</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
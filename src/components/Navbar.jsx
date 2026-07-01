import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Navbar() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    alert("Logged Out Successfully!");
    navigate("/login");
  };

  return (
    <nav className="navbar">
              <h2 className="logo">🚆 SeatLynk</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/buy">Buy Ticket</Link>
        </li>

        <li>
          <Link to="/sell">Sell Ticket</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
            <div className="nav-buttons">

        {user ? (
          <>
            <span className="welcome-user">
              👋 {user.fullName}
            </span>

            <button
              className="register-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="login-btn">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="register-btn">
                Register
              </button>
            </Link>
          </>
        )}

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>
          </nav>
  );
}

export default Navbar;

    
   
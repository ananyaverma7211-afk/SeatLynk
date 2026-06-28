import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email === formData.email &&
        u.password === formData.password
    );

    if (!user) {
      alert("Invalid Email or Password!");
      return;
    }

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );

    alert(`Welcome ${user.fullName}!`);

    navigate("/");
  };

  return (
    <>
      <Navbar />

      <section className="register-page">
        <div className="register-card">

          <h1>Login 🚆</h1>

          <p>Login to your RailSwap account.</p>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
            </div>

            <button type="submit" className="submit-btn">
              Login
            </button>

            <p className="login-link">
              Don't have an account?{" "}
              <Link to="/register">Register</Link>
            </p>

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;
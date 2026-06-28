import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.fullName ||
    !formData.email ||
    !formData.phone ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    alert("Please fill all fields.");
    return;
  }

  if (formData.phone.length !== 10) {
    alert("Enter a valid phone number.");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  if (!formData.agree) {
    alert("Please accept Terms & Conditions.");
    return;
  }

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  users.push({
    fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    password: formData.password,
  });

  localStorage.setItem("users", JSON.stringify(users));

  alert("✅ Registration Successful!");

  navigate("/login");
};
    return (
    <>
      <Navbar />

      <section className="register-page">
        <div className="register-card">

          <h1>Create Your Account 🚆</h1>

          <p>
            Register to buy and sell railway tickets securely.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />
            </div>

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
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />
            </div>

            <label className="checkbox">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              I agree to the Terms & Conditions
            </label>

            <button type="submit" className="submit-btn">
              Register
            </button>

            <p className="login-link">
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </p>

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Register;
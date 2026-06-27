import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SellTicket from "./pages/SellTicket";
import BuyTicket from "./pages/BuyTicket";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sell" element={<SellTicket />} />
      <Route path="/buy" element={<BuyTicket />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<h2>Menu Page (Coming Soon)</h2>} />
        <Route path="/offers" element={<h2>Offers Page (Coming Soon)</h2>} />
        <Route path="/restaurants" element={<h2>Restaurants Page (Coming Soon)</h2>} />
        <Route path="/cart" element={<h2>Cart Page (Coming Soon)</h2>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

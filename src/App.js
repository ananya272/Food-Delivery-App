// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import TopRestaurants from "./pages/TopRestaurants";
import Offer from "./pages/Offer"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/offers" element={<Offer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/top-restaurants" element={<TopRestaurants />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

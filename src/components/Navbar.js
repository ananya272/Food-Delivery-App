import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";  

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">FoodieApp</Link> 
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search for food or restaurants..." />
        <button className="search-btn">🔍</button>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/top-restaurants">Top Restaurants ⏷</Link></li>
        <li><Link to="/cart">Cart 🛒</Link></li>
      </ul>

      {/* Login/Signup */}
      <div className="auth-buttons">
        <Link to="/login"><button className="login-btn">Login</button></Link>
        <Link to="/signup"><button className="signup-btn">Signup</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;

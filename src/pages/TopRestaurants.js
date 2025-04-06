// src/pages/TopRestaurants.js
import React from "react";
import "../styles/TopRestaurants.css";

const restaurants = [
  { name: "Burger House", rating: 4.5 },
  { name: "Pizza Palace", rating: 4.2 },
  { name: "Taco Town", rating: 4.0 },
  { name: "Sushi Central", rating: 4.8 },
  { name: "Desi Dhaba", rating: 4.6 },
  { name: "Biryani Bowl", rating: 4.3 },
  { name: "The Pasta Spot", rating: 4.1 },
  { name: "Chai & More", rating: 4.4 },
];

const TopRestaurants = () => {
  return (
    <div className="top-restaurants-page">
      <h2>Top Rated Restaurants ⭐</h2>
      <div className="restaurant-list">
        {restaurants.map((resto, index) => (
          <div className="restaurant-card" key={index}>
            <h3>{resto.name}</h3>
            <p>Rating: ⭐ {resto.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRestaurants;

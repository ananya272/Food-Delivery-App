import React from "react";
import "../styles/HomePage.css"; // ✅ Correct path for CSS

const foodItems = [
  { id: 1, name: "Cheese Pizza", restaurant: "Domino's", image: "🍕" },
  { id: 2, name: "Burger", restaurant: "McDonald's", image: "🍔" },
  { id: 3, name: "Pasta", restaurant: "Italiano", image: "🍝" },
  { id: 4, name: "Sushi", restaurant: "Sakura", image: "🍣" },
  { id: 5, name: "Biryani", restaurant: "Biryani House", image: "🍛" },
  { id: 6, name: "Ice Cream", restaurant: "Kwality Walls", image: "🍨" },
  { id: 7, name: "French Fries", restaurant: "KFC", image: "🍟" },
  { id: 8, name: "Tacos", restaurant: "Mexicana", image: "🌮" },
  { id: 9, name: "Momos", restaurant: "Wow Momos", image: "🥟" },
  { id: 10, name: "Noodles", restaurant: "Chinese Express", image: "🍜" },
];

const Home = () => {
  return (
    <div className="home-container">
      <h2>Top Food Picks 🍽️</h2>
      <div className="food-grid">
        {foodItems.map((item) => (
          <div key={item.id} className="food-card">
            <span className="food-emoji">{item.image}</span>
            <h3>{item.name}</h3>
            <p>{item.restaurant}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

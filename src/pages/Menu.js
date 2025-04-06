import React, { useState } from "react";
import "../styles/Menu.css";
import { useCart } from "../context/CartContext";

const restaurants = [
  { name: "Burger House", items: ["Cheese Burger", "Veggie Burger", "Chicken Whopper"] },
  { name: "Pizza Palace", items: ["Margherita", "Farmhouse", "Peppy Paneer"] },
  { name: "Taco Town", items: ["Crunchy Tacos", "Nacho Grande", "Burrito"] },
  { name: "Sushi Central", items: ["Salmon Roll", "Veg Maki", "Tempura Roll"] },
  { name: "Desi Dhaba", items: ["Paneer Butter Masala", "Dal Tadka", "Butter Naan"] },
  { name: "Biryani Bowl", items: ["Hyderabadi Biryani", "Veg Dum Biryani", "Egg Biryani"] },
  { name: "The Pasta Spot", items: ["White Sauce Pasta", "Arrabbiata", "Lasagna"] },
  { name: "Chai & More", items: ["Masala Chai", "Vada Pav", "Kanda Bhajiya"] },
  { name: "South Tadka", items: ["Masala Dosa", "Idli Sambhar", "Uttapam"] },
  { name: "Momos Mania", items: ["Steamed Momos", "Fried Momos", "Tandoori Momos"] },
  { name: "Wrap World", items: ["Paneer Wrap", "Chicken Roll", "Aloo Frankie"] },
  { name: "Street Chinese", items: ["Chowmein", "Manchurian", "Spring Rolls"] },
  { name: "The Cake Jar", items: ["Choco Lava", "Blueberry Cheesecake", "Red Velvet Jar"] },
  { name: "IceCream Hub", items: ["Choco Chips", "Mango Sundae", "Strawberry Swirl"] },
  { name: "Healthy Bowl", items: ["Quinoa Salad", "Fruit Bowl", "Yogurt Mix"] },
  { name: "Punjabi Rasoi", items: ["Chole Bhature", "Rajma Rice", "Lassi"] },
  { name: "Kathi Junction", items: ["Kathi Roll", "Paneer Tikka Roll", "Mutton Seekh"] },
  { name: "Rajasthani Thali", items: ["Daal Baati", "Gatte ki Sabzi", "Churma"] },
  { name: "Andhra Spice", items: ["Gongura Chicken", "Andhra Biryani", "Pesarattu"] },
  { name: "Gujarati Zaika", items: ["Dhokla", "Khandvi", "Thepla"] },
  { name: "Chinese Wok", items: ["Hakka Noodles", "Schezwan Rice", "Chili Paneer"] },
  { name: "Dessert Deli", items: ["Brownie", "Ice Cream Combo", "Churros"] },
  { name: "Grill Nation", items: ["Grilled Sandwich", "BBQ Chicken", "Paneer Grill"] },
  { name: "Falafel Factory", items: ["Falafel Pita", "Hummus Bowl", "Shawarma Wrap"] },
  { name: "Sizzling Sizzlers", items: ["Paneer Sizzler", "Veg Sizzler", "Chicken Steak"] }
];

const Menu = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cart = useCart(); // 👈 Check if useCart is defined
  const addToCart = cart?.addToCart || (() => {}); // Fallback if undefined

  return (
    <div className="menu-page">
      <h2>Explore Restaurants</h2>
      <div className="restaurant-grid">
        {restaurants.map((resto, index) => (
          <div
            key={index}
            className="restaurant-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3>{resto.name}</h3>

            {hoveredIndex === index && (
              <div className="inline-popup">
                <h4>{resto.name} Menu</h4>
                <ul>
                  {resto.items.map((item, i) => (
                    <li key={i}>
                      {item}
                      <button
                        className="add-btn"
                        onClick={() => addToCart(resto.name, item)}
                      >
                        + Add
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

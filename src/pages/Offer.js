import React from "react";
import "../styles/Offer.css";

const offers = [
  {
    restaurant: "Burger House",
    description: "Buy 1 Get 1 Free on all burgers!",
    code: "BURGERBOGO"
  },
  {
    restaurant: "Pizza Palace",
    description: "Flat 50% off on all pizzas!",
    code: "PIZZA50"
  },
  {
    restaurant: "Desi Dhaba",
    description: "Free Lassi on orders above ₹299",
    code: "DHABADEAL"
  },
  {
    restaurant: "Biryani Bowl",
    description: "20% off on orders above ₹499",
    code: "BIRYANI20"
  },
  {
    restaurant: "Sushi Central",
    description: "Free Miso Soup with every sushi platter",
    code: "SUSHILOVE"
  },
  {
    restaurant: "Chai & More",
    description: "Flat ₹50 off on orders above ₹199",
    code: "CHAILOVE"
  },
  {
    restaurant: "South Tadka",
    description: "10% off on your first South Indian meal",
    code: "SOUTHTREAT"
  },
  {
    restaurant: "Momos Mania",
    description: "Buy 2 plates, Get 1 Free!",
    code: "MOMOSMANIA"
  },
  {
    restaurant: "IceCream Hub",
    description: "Free toppings on any sundae",
    code: "SWEETTOP"
  },
  {
    restaurant: "The Pasta Spot",
    description: "₹75 off on pasta orders above ₹350",
    code: "PASTA75"
  }
];

const Offer = () => {
  return (
    <div className="offer-page">
      <h2>Special Offers & Promo Codes</h2>
      <div className="offer-grid">
        {offers.map((offer, idx) => (
          <div className="offer-card" key={idx}>
            <h3>{offer.restaurant}</h3>
            <p>{offer.description}</p>
            <div className="promo-code">Use Code: <strong>{offer.code}</strong></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;

import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import Order from "./models/Order.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Signup Route
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    const token = jwt.sign({ email, name }, JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login Route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ email: user.email, name: user.name }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Order Placement Route
app.post("/api/order", async (req, res) => {
  const { name, phone, address, paymentMethod, cardDetails, upiId, offerCode } = req.body;
  if (!name || !phone || !address || !paymentMethod) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (paymentMethod === "card") {
    if (!cardDetails || !cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv) {
      return res.status(400).json({ message: "Card details required" });
    }
  }
  if (paymentMethod === "upi") {
    if (!upiId) {
      return res.status(400).json({ message: "UPI ID required" });
    }
  }

  // Dummy price and discount logic
  let total = 200; // base price
  let discount = 0;
  if (offerCode === "FOODIE30") {
    discount = 60; // 30% of 200
    total = total - discount;
  }

  try {
    const order = new Order({
      name,
      phone,
      address,
      paymentMethod,
      cardDetails: paymentMethod === "card" ? cardDetails : undefined,
      upiId: paymentMethod === "upi" ? upiId : undefined,
      offerCode,
      discount
    });
    await order.save();
    res.status(201).json({ message: "Order placed successfully", total, discount });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

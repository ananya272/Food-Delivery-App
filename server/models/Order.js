import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  paymentMethod: { type: String, enum: ["card", "upi", "cod"], required: true },
  cardDetails: {
    cardNumber: String,
    expiry: String,
    cvv: String
  },
  upiId: String,
  offerCode: String,
  discount: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", OrderSchema);

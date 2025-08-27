import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g. Bike, Auto, Pickup, Truck
  capacity: { type: Number, required: true }, // in KG
  pricePerKm: { type: Number, required: true },
  available: { type: Boolean, default: true },
  driverName: { type: String, required: true },
  driverPhone: { type: String, required: true },
});

export default mongoose.model("Vehicle", vehicleSchema);

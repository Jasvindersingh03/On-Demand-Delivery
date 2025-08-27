import express from "express";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();

// ✅ Vehicle suggestions API (multiple options return karega)
router.post("/", async (req, res) => {
  try {
    const { weight, distance } = req.body;

    if (!weight || !distance) {
      return res.status(400).json({ error: "Weight and distance are required" });
    }

    // Find all vehicles that can carry the weight
    const vehicles = await Vehicle.find({
      available: true,
      capacity: { $gte: weight },
    });

    if (vehicles.length === 0) {
      return res.status(404).json({ error: "No vehicles available for this weight" });
    }

    // Calculate price for each vehicle
    const suggestions = vehicles.map((v) => ({
      vehicleId: v._id,
      type: v.type,
      capacity: v.capacity,
      pricePerKm: v.pricePerKm,
      driverName: v.driverName,
      driverPhone: v.driverPhone,
      estimatedPrice: v.pricePerKm * distance,
    }));

    // Sort by price (cheapest first)
    suggestions.sort((a, b) => a.estimatedPrice - b.estimatedPrice);

    res.json(suggestions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

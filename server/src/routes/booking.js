import express from "express";
import Booking from "../models/Booking.js";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { user, pickupLocation, dropLocation, distance, weight } = req.body;

    // 1. Suitable vehicles jinki capacity >= weight
    const suitableVehicles = await Vehicle.find({ capacity: { $gte: weight }, available: true });

    if (suitableVehicles.length === 0) {
      return res.status(400).json({ message: "No suitable vehicle found for this weight" });
    }

    // 2. Sabse sasti cost per km wali choose karo
    let bestVehicle = null;
    let minCost = Infinity;

    suitableVehicles.forEach(v => {
      const cost = distance * v.pricePerKm;
      if (cost < minCost) {
        minCost = cost;
        bestVehicle = v;
      }
    });

    // 3. Booking create karo
    const booking = new Booking({
      user,
      vehicle: bestVehicle._id,
      pickupLocation,
      dropLocation,
      distance,
      weight,
      totalPrice: minCost,
      status: "pending"
    });

    await booking.save();
    res.status(201).json(booking);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

import express from "express";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();

// Add new vehicle
router.post("/", async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all available vehicles
router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ available: true });
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

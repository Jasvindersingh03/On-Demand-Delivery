import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRoutes from "./src/routes/auth.js";
import vehicleRoutes from "./src/routes/vehicle.js";
import bookingRoutes from "./src/routes/booking.js";
import suggestionRoutes from "./src/routes/suggestion.js";

dotenv.config();

// require('dotenv/config');
// const express = require('express');
// const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Simple Route
app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});


app.get("/api/test", (req, res) => {
  res.json({ message: "API working fine ✅" });
});


app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/suggestions", suggestionRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log("❌ Error connecting MongoDB:", err));

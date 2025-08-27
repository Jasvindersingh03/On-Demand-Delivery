// export default function BookVehicle() {
//   return <h1 className="p-6 text-xl">Book a Vehicle Page</h1>;
// }

import React, { useState } from "react";

function BookVehicle() {
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    distance: "",
    weight: "",
    vehicleType: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Book a Vehicle</h2>
      <form className="col-md-6 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Pickup Location</label>
          <input type="text" name="pickup" className="form-control" value={formData.pickup} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Drop Location</label>
          <input type="text" name="drop" className="form-control" value={formData.drop} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Distance (km)</label>
          <input type="number" name="distance" className="form-control" value={formData.distance} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Weight (kg)</label>
          <input type="number" name="weight" className="form-control" value={formData.weight} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Vehicle Type</label>
          <select name="vehicleType" className="form-select" value={formData.vehicleType} onChange={handleChange} required>
            <option value="">Select Vehicle</option>
            <option value="mini-truck">Mini Truck</option>
            <option value="pickup">Pickup Van</option>
            <option value="tempo">Tempo</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Book Now</button>
      </form>
    </div>
  );
}

export default BookVehicle;

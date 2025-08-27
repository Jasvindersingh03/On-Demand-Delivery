// export default function Tracking() {
//   return <h1 className="p-6 text-xl">Tracking Page</h1>;
// }

import React, { useState } from "react";

function Tracking() {
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Track ID:", trackingId);
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2 className="text-center mb-4">Track Your Delivery 📍</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Tracking ID</label>
          <input type="text" className="form-control" value={trackingId} onChange={(e) => setTrackingId(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-info w-100">Track</button>
      </form>
    </div>
  );
}

export default Tracking;


// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">🚚 DeliveryApp</h1>
//       <div className="space-x-4">
//         <Link to="/" className="hover:underline">Home</Link>
//         <Link to="/book" className="hover:underline">Book Vehicle</Link>
//         <Link to="/tracking" className="hover:underline">Tracking</Link>
//         <Link to="/login" className="hover:underline">Login</Link>
//         <Link to="/signup" className="hover:underline">Signup</Link>
//       </div>
//     </nav>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">🚗 On-Demand Delivery</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book">Book Vehicle</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tracking">Tracking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;




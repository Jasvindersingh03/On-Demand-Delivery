// export default function Home() {
//   return (
//     <div className="p-6 text-center">
//       <h1 className="text-3xl font-bold text-blue-600">Welcome to On-Demand Delivery</h1>
//       <p className="mt-4 text-gray-600">Book a vehicle easily for your product delivery 🚚</p>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h1 className="mb-4">Welcome to On-Demand Delivery 🚀</h1>
      <p>Book vehicles for delivery, track them in real-time, and get AI-powered vehicle suggestions.</p>
      <Link to="/book" className="btn btn-primary m-2">Book a Vehicle</Link>
      <Link to="/tracking" className="btn btn-success m-2">Track Delivery</Link>
    </div>
  );
}

export default Home;


// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Home = () => {
//   return (
//     <div className="pt-20">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
//       >
//         <h1 className="text-5xl font-extrabold mb-4">
//           On Demand Delivery 🚚
//         </h1>
//         <p className="text-lg font-medium max-w-2xl mx-auto">
//           Shift your goods from one place to another with the best vehicles suggested based on weight & distance.
//         </p>
//         <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
//           Get Started
//         </button>
//       </motion.div>

//       {/* Features */}
//       <div className="grid md:grid-cols-3 gap-8 px-10 py-16 text-center">
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="p-6 bg-white rounded-2xl shadow-lg"
//         >
//           <h2 className="text-xl font-bold mb-2">📦 Easy Booking</h2>
//           <p className="text-gray-600">Book your delivery in just a few clicks.</p>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="p-6 bg-white rounded-2xl shadow-lg"
//         >
//           <h2 className="text-xl font-bold mb-2">🚚 Smart Suggestions</h2>
//           <p className="text-gray-600">We suggest the best vehicle for your goods.</p>
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="p-6 bg-white rounded-2xl shadow-lg"
//         >
//           <h2 className="text-xl font-bold mb-2">💳 Secure Payment</h2>
//           <p className="text-gray-600">Safe and reliable payment methods.</p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Home;

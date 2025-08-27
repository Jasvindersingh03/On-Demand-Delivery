import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© {new Date().getFullYear()} OnDemand Delivery. All rights reserved.</p>
        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="/" className="hover:text-yellow-300">Home</a>
          <a href="/vehicles" className="hover:text-yellow-300">Vehicles</a>
          <a href="/booking" className="hover:text-yellow-300">Booking</a>
          <a href="/suggestion" className="hover:text-yellow-300">Suggestion</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

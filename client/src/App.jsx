import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BookVehicle from "./pages/BookVehicle";
import Tracking from "./pages/Tracking";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bookvehicle" element={<BookVehicle />} />
          <Route path="/tracking" element={<Tracking />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Footer from "./pages/Footer";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home /> 
//       <Footer />
//     </div>
//   );
// }

// export default App;

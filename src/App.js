import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Page/Home/Home";
import Servics from "./components/Page/Servics/Servics";
import About from "./components/Page/About/About";
import OurTeam from "./components/Page/OurTeam/OurTeam";
import ContactUs from "./components/Page/ContactUs/ContactUs";
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<div>Navbar Page</div>} />
        <Route path="/home" element={<Home />} />
        <Route path="/Servics" element={<Servics />} />
        <Route path="/About" element={<About />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Page/Home/Home";
import Servics from "./components/Page/Servics/Servics";
import About from "./components/Page/About/About";
import Team from "./components/Page/Team/Team";
import Product from './components/Product/Product'
import Footer from "../src/components/Footer/Footer"
import Contactus from "./components/Page/Contactus/Contactus"
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
        <Route path="/Team" element={<Team />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contactus" element={<Contactus />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;

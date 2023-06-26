import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home/home";
import Weather from "./components/Weather/weather";
import Navbar from "./components/Navbar/navbar";
import video2 from "./assets/video2.mp4";
import Contact from "./components/Contact/contact";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <video src={video2} autoPlay loop muted></video>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

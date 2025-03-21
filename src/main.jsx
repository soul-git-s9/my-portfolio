import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";  // React Router import
import App from "./App";
import About from "./About";  
import Portfolio from "./Portfolio";
import './index.css'


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </BrowserRouter>
);

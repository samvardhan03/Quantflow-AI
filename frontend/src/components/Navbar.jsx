import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav>
    <h1>AI Financial Models</h1>
    <ul>
      <li><a href="#waterfall">Waterfall Model</a></li>
      <li><a href="#lbo">LBO Model</a></li>
      <li><a href="#montecarlo">Monte Carlo</a></li>
    </ul>
  </nav>
);

export default Navbar;

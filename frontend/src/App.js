import React from "react";
import Navbar from "./components/Navbar";
import WaterfallModel from "./components/WaterfallModel";
import LBOModel from "./components/LBOModel";
import MonteCarlo from "./components/MonteCarlo";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <WaterfallModel />
      <LBOModel />
      <MonteCarlo />
    </div>
  );
}

export default App;

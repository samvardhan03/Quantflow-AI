import React from "react";
import WaterfallModel from "./components/WaterfallModel";
import LBOModel from "./components/LBOModel";
import ScenarioAnalysis from "./components/ScenarioAnalysis";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white text-center py-6">
        <h1 className="text-4xl font-bold">QuantFlowAI</h1>
        <p className="text-lg mt-2">AI-Driven Financial Modeling & Analysis</p>
      </header>

      <main className="max-w-5xl mx-auto p-8 space-y-12">
        <WaterfallModel />
        <LBOModel />
        <ScenarioAnalysis />
      </main>

      <footer className="text-center py-4 bg-gray-800 text-white">
        <p>© 2025 QuantFlowAI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

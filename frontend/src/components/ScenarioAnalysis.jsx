import React, { useState } from "react";

function ScenarioAnalysis() {
  const [inputData, setInputData] = useState({
    scenarios: [
      {
        name: "Base Case",
        base_cash_flow: "",
        growth_mean: "",
        growth_std: "",
      },
    ],
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newScenarios = [...inputData.scenarios];
    newScenarios[index][name] = value;
    setInputData({ ...inputData, scenarios: newScenarios });
  };

  const handleSubmit = async () => {
    const response = await fetch("http://127.0.0.1:5000/scenarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputData),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-700">Scenario Analysis</h2>
      <div className="mt-6 space-y-4">
        {inputData.scenarios.map((scenario, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              value={scenario.name}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Scenario Name"
            />
            <input
              type="number"
              name="base_cash_flow"
              value={scenario.base_cash_flow}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Base Cash Flow (e.g., 100000)"
            />
            <input
              type="number"
              name="growth_mean"
              value={scenario.growth_mean}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Growth Mean (e.g., 0.05)"
            />
            <input
              type="number"
              name="growth_std"
              value={scenario.growth_std}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Growth Std (e.g., 0.02)"
            />
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-600 text-white rounded"
        >
          Run Scenario Analysis
        </button>
        {result && (
          <div className="mt-6">
            <h3 className="text-xl">Scenario Results</h3>
            <pre className="bg-gray-100 p-4 rounded mt-4">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default ScenarioAnalysis;

import React, { useState } from "react";

function LBOModel() {
  const [inputData, setInputData] = useState({
    acquisition_price: "",
    debt_equity_ratio: "",
    cash_flows: "",
    exit_multiple: "",
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async () => {
    const parsedData = {
      ...inputData,
      cash_flows: inputData.cash_flows.split(",").map(Number),
    };

    const response = await fetch("http://127.0.0.1:5000/lbo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsedData),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-700">LBO Model</h2>
      <div className="mt-6 space-y-4">
        {/* Input Fields */}
        <input
          type="number"
          name="acquisition_price"
          value={inputData.acquisition_price}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Acquisition Price (e.g., 5000000)"
        />
        <input
          type="number"
          name="debt_equity_ratio"
          value={inputData.debt_equity_ratio}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Debt-Equity Ratio (e.g., 0.7)"
        />
        <input
          type="text"
          name="cash_flows"
          value={inputData.cash_flows}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Projected Cash Flows (comma-separated, e.g., 100000,150000)"
        />
        <input
          type="number"
          name="exit_multiple"
          value={inputData.exit_multiple}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Exit Multiple (e.g., 3.0)"
        />
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-600 text-white rounded"
        >
          Calculate LBO
        </button>
        {result && (
          <div className="mt-6">
            <h3 className="text-xl">LBO Results</h3>
            <pre className="bg-gray-100 p-4 rounded mt-4">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default LBOModel;

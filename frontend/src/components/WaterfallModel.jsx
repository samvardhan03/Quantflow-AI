import React, { useState } from "react";

function WaterfallModel() {
  const [inputData, setInputData] = useState({
    fund_size: "",
    hurdle_rate: "",
    cash_flows: "",
    lp_split: "",
    gp_split: "",
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
      profit_split: { LP: Number(inputData.lp_split), GP: Number(inputData.gp_split) },
    };

    const response = await fetch("http://127.0.0.1:5000/waterfall", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsedData),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-700">Waterfall Distribution</h2>
      <div className="mt-6 space-y-4">
        {/* Input Fields */}
        <input
          type="number"
          name="fund_size"
          value={inputData.fund_size}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Fund Size (e.g., 1000000)"
        />
        <input
          type="number"
          name="hurdle_rate"
          value={inputData.hurdle_rate}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Hurdle Rate (e.g., 0.08)"
        />
        <input
          type="text"
          name="cash_flows"
          value={inputData.cash_flows}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Cash Flows (comma-separated, e.g., 200000,300000,500000)"
        />
        <input
          type="number"
          name="lp_split"
          value={inputData.lp_split}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="LP Split (%) (e.g., 80)"
        />
        <input
          type="number"
          name="gp_split"
          value={inputData.gp_split}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="GP Split (%) (e.g., 20)"
        />
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-600 text-white rounded"
        >
          Calculate Waterfall
        </button>
        {result && (
          <div className="mt-6">
            <h3 className="text-xl">Waterfall Results</h3>
            <pre className="bg-gray-100 p-4 rounded mt-4">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default WaterfallModel;

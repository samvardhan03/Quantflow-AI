import React, { useState } from "react";

const LBOModel = () => {
  const [initialDebt, setInitialDebt] = useState("");
  const [initialEquity, setInitialEquity] = useState("");
  const [cashFlows, setCashFlows] = useState("");
  const [results, setResults] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/lbo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        initial_debt: parseFloat(initialDebt),
        initial_equity: parseFloat(initialEquity),
        cash_flows: cashFlows.split(",").map(Number),
      }),
    });
    const data = await response.json();
    setResults(data);
  };

  return (
    <div id="lbo">
      <h2>LBO Model</h2>
      <form onSubmit={handleSubmit}>
        <label>Initial Debt:</label>
        <input
          type="number"
          value={initialDebt}
          onChange={(e) => setInitialDebt(e.target.value)}
          required
        />
        <label>Initial Equity:</label>
        <input
          type="number"
          value={initialEquity}
          onChange={(e) => setInitialEquity(e.target.value)}
          required
        />
        <label>Cash Flows (comma-separated):</label>
        <input
          type="text"
          value={cashFlows}
          onChange={(e) => setCashFlows(e.target.value)}
          required
        />
        <button type="submit">Calculate</button>
      </form>
      {results && (
        <div>
          <h3>Results</h3>
          <p>Equity Values: {results.equity_values.join(", ")}</p>
          <p>Final Debt: {results.final_debt}</p>
          <p>Final Equity: {results.final_equity}</p>
        </div>
      )}
    </div>
  );
};

export default LBOModel;

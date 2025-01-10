import React, { useState } from "react";

const WaterfallModel = () => {
  const [capitalCalls, setCapitalCalls] = useState("");
  const [returns, setReturns] = useState("");
  const [carriedInterest, setCarriedInterest] = useState(0.2);
  const [results, setResults] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/waterfall", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        capital_calls: capitalCalls.split(",").map(Number),
        returns: returns.split(",").map(Number),
        carried_interest: parseFloat(carriedInterest),
      }),
    });
    const data = await response.json();
    setResults(data);
  };

  return (
    <div id="waterfall">
      <h2>Private Equity Waterfall Model</h2>
      <form onSubmit={handleSubmit}>
        <label>Capital Calls (comma-separated):</label>
        <input
          type="text"
          value={capitalCalls}
          onChange={(e) => setCapitalCalls(e.target.value)}
          required
        />
        <label>Returns (comma-separated):</label>
        <input
          type="text"
          value={returns}
          onChange={(e) => setReturns(e.target.value)}
          required
        />
        <label>Carried Interest (decimal):</label>
        <input
          type="number"
          step="0.01"
          value={carriedInterest}
          onChange={(e) => setCarriedInterest(e.target.value)}
          required
        />
        <button type="submit">Calculate</button>
      </form>
      {results && (
        <div>
          <h3>Results</h3>
          <p>LP Distribution: {results.lp_distribution.join(", ")}</p>
          <p>GP Distribution: {results.gp_distribution.join(", ")}</p>
          <p>Total Distribution: {results.total_distribution.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default WaterfallModel;

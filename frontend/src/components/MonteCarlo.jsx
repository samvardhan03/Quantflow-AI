import React, { useState } from "react";

const MonteCarlo = () => {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [meanReturn, setMeanReturn] = useState("");
  const [stdDev, setStdDev] = useState("");
  const [numPeriods, setNumPeriods] = useState("");
  const [numSimulations, setNumSimulations] = useState("");
  const [results, setResults] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/monte_carlo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        initial_investment: parseFloat(initialInvestment),
        mean_return: parseFloat(meanReturn),
        std_dev: parseFloat(stdDev),
        num_periods: parseInt(numPeriods),
        num_simulations: parseInt(numSimulations),
      }),
    });
    const data = await response.json();
    setResults(data);
  };

  return (
    <div id="montecarlo">
      <h2>Monte Carlo Simulations</h2>
      <form onSubmit={handleSubmit}>
        <label>Initial Investment:</label>
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
          required
        />
        <label>Mean Return:</label>
        <input
          type="number"
          step="0.01"
          value={meanReturn}
          onChange={(e) => setMeanReturn(e.target.value)}
          required
        />
        <label>Standard Deviation:</label>
        <input
          type="number"
          step="0.01"
          value={stdDev}
          onChange={(e) => setStdDev(e.target.value)}
          required
        />
        <label>Number of Periods:</label>
        <input
          type="number"
          value={numPeriods}
          onChange={(e) => setNumPeriods(e.target.value)}
          required
        />
        <label>Number of Simulations:</label>
        <input
          type="number"
          value={numSimulations}
          onChange={(e) => setNumSimulations(e.target.value)}
          required
        />
        <button type="submit">Run Simulation</button>
      </form>
      {results && (
        <div>
          <h3>Results</h3>
          <p>Average Return: {results.average_return}</p>
          <p>Standard Deviation: {results.std_dev_return}</p>
        </div>
      )}
    </div>
  );
};

export default MonteCarlo;

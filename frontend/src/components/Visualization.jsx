import React from "react";
import { Line } from "react-chartjs-2";

function Visualization({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.label,
        data: data.values,
        borderColor: "rgb(59, 130, 246)", // Tailwind blue-500
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700">{data.title}</h2>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default Visualization;

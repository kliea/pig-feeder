import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "../assets/ChartComponent.css";

function ChartComponent() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Kilos Dispensed",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedData = JSON.parse(localStorage.getItem("chartData")) || [];
        const savedLabels = JSON.parse(localStorage.getItem("chartLabels")) || [];
        setChartData({
          labels: savedLabels,
          datasets: [
            {
              label: "Kilos Dispensed",
              data: savedData,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
          ],
        });
      } catch (error) {
        console.error("Could not access localStorage:", error);
      }
    }
  }, []);
  

  const addData = (value) => {
    const date = new Date().toLocaleString();
    const updatedLabels = [...chartData.labels, date];
    const updatedData = [...chartData.datasets[0].data, value];

    setChartData({
      labels: updatedLabels,
      datasets: [
        {
          label: "Kilos Dispensed",
          data: updatedData,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    });

    localStorage.setItem("chartData", JSON.stringify(updatedData));
    localStorage.setItem("chartLabels", JSON.stringify(updatedLabels));
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Kilos Dispensed Over Time</h2>
      <div className="chart">
        <Bar data={chartData} />
      </div>
      <div className="button-container">
        <button className="chart-button" onClick={() => addData(1)}>
          Simulate Add 1kl
        </button>
      </div>
    </div>
  );
}

export default ChartComponent;

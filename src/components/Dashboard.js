import React, { useState } from "react";
import ServoControl from "./ServoControl";
import ChartComponent from "./ChartComponent";
import "../assets/Dashboard.css";

function Dashboard({ onLogout }) {
  const [totalKilos, setTotalKilos] = useState(0);

  const handleFeed = async (kilos) => {
    const angle = kilos === 1 ? 160 : kilos === 2 ? 170 : 180;
    const response = await fetch(`http://<ESP_IP>/rotate?angle=${angle}`);
    if (response.ok) {
      alert(`Successfully fed ${kilos}kl!`);
      setTotalKilos((prev) => prev + kilos);
    } else {
      alert("Error: Could not feed!");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">BaHOGi Dashboard</h1>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="servo-control">
          <ServoControl onFeed={handleFeed} />
        </div>

        <div className="total-kilos">
          <h2>Total Kilos: {totalKilos} kl</h2>
        </div>

        <div className="chart-container">
          <ChartComponent />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

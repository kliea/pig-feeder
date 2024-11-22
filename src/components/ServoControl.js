import React from "react";
import "../assets/ServoControl.css";

function ServoControl({ onFeed }) {
  return (
    <div className="servo-control-container">
      <h2 className="servo-control-title">Feed Controls</h2>
      <div className="servo-buttons">
        <button className="servo-button" onClick={() => onFeed(1)}>
          Feed 1kl
        </button>
        <button className="servo-button" onClick={() => onFeed(2)}>
          Feed 2kl
        </button>
        <button className="servo-button" onClick={() => onFeed(3)}>
          Feed 3kl
        </button>
      </div>
    </div>
  );
}

export default ServoControl;

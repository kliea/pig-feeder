import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state for better user feedback

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      // Simulate a login delay
      setIsLoggedIn(true);
      setLoading(false);
    }, 1000); // Adjust the delay as needed
  };

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      setIsLoggedIn(false);
      setLoading(false);
    }, 500); // Adjust the delay for logout
  };

  return (
    <div className="App">
      <div className="app-container">
        {loading ? (
          <div className="loading">Loading...</div> // Simple loading state display
        ) : !isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Dashboard onLogout={handleLogout} />
        )}
      </div>
    </div>
  );
}

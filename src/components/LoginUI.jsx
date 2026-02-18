import React, { useState } from "react";
import "../styles/LoginUI.css";

function LoginUI({ onLogin }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.trim() === "") {
      setError("Please enter your name");
      return;
    }
    
    if (name.trim().length < 2) {
      setError("Name must be at least 2 characters");
      return;
    }
    
    onLogin(name.trim());
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome</h1>
        <p className="login-subtitle">Enter your name to continue</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="login-input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError("");
              }}
              autoFocus
            />
          </div>
          
          {error && <p className="error-message">{error}</p>}
          
          <button type="submit" className="login-button">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginUI;

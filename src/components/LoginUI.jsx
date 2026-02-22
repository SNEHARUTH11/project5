import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
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

  const handleGoogleLogin = () => {
    // Redirect to backend Google OAuth route
    window.location.href = "http://localhost:5000/auth/google";
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

          <div className="divider">OR</div>

          <button
            type="button"
            className="google-button"
            onClick={handleGoogleLogin}
            client_id="108975997072-v6o11b6a0215qjku1l6c741mq3ss8ji4.apps.googleusercontent.com"
          >
            <FcGoogle size={20} style={{ marginRight: "8px" }} />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginUI;
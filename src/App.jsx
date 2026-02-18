import React, { useState } from "react";
import LoginUI from "./components/LoginUI";
import TiptapEditor from "./components/TiptapEditor";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogin = (name) => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginUI onLogin={handleLogin} />;
  }

  return (
    <>
      <div>
        <h1 className="text-center">Welcome, {userName}!</h1>
        <h2 className="text-center" style={{ fontSize: "18px", color: "#666", marginBottom: "30px" }}>
          Custom Tiptap Extension
        </h2>
        <TiptapEditor />
      </div>
    </>
  );
}

export default App;

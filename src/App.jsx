import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import EditorPage from "./pages/EditorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/editor" element={<EditorPage />} />
    </Routes>
  );
}

export default App;
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

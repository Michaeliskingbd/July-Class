import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import About from "./pages/About";
import Counter from "./pages/Counter";
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/productpage" element={<ProductPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

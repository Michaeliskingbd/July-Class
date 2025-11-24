import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import About from "./pages/About";
import Counter from "./pages/Counter";
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";
import SingleProductPage from "./pages/SingleProductPage";
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";
import Upload from "./pages/Upload";

function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/productsPage" element={<ProductPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthProvider>
    </UserProvider>
  );
}

export default App;
//mor_2314 username
//83r5^_ password

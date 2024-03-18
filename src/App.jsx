import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Headphones from "./pages/Headphones/Headphones";
import MainLayout from "./pages/Layout/MainLayout";
import Register from "./pages/Register/Register";
import { useEffect, useState } from "react";
import Shopping from "./pages/Shopping/Shopping.jsx";
import Earphones from "./pages/Earphones/Earphones";
import InfoCard from "./pages/InfoCard/InfoCard";
import Spekars from "./pages/Spekars/Spekars";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (!token && window.location.pathname !== "/register") {
      // Check if user is not on the register page
      navigate("/login");
    }
  }, [token, navigate]);

  function ProtectedRoute({ children, isAuthentication }) {
    if (!isAuthentication) {
      navigate("/login");
      return null;
    }
    return children;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRoute isAuthentication={token ? true : false}>
            <MainLayout>
              <Home />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/headphones"
        element={
          <ProtectedRoute isAuthentication={token ? true : false}>
            <MainLayout>
              <Headphones />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/shopping"
        element={
          <ProtectedRoute isAuthentication={token ? true : false}>
            <MainLayout>
              <Shopping />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/earphones"
        element={
          <ProtectedRoute isAuthentication={token ? true : false}>
            <MainLayout>
              <Earphones />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/infoCard"
        element={
          <ProtectedRoute isAuthentication={token ? true : false}>
            <MainLayout>
              <InfoCard />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/spekars"
        element={
          <ProtectedRoute isAuthentication={token ? true : false}>
            <MainLayout>
              <Spekars />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

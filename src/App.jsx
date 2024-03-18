import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const isLogin = useSelector((state) => state.login.value);
  const [user, setUser] = useState(
    () => !!JSON.parse(localStorage.getItem("user"))
  );
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      !storedUser &&
      location.pathname !== "/login" &&
      location.pathname !== "/register"
    ) {
      navigate("/login");
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    if (isLogin) {
      setUser(true);
      localStorage.setItem("user", JSON.stringify(true));
    }
  }, [isLogin]);

  const ProtectedRoute = ({
    children,
    redirectTo = "/login",
    isAuthentication,
  }) => {
    const navigate = useNavigate();

    useEffect(() => {
      if (!isAuthentication && !user) {
        navigate(redirectTo);
      }
    }, [isAuthentication, user, navigate, redirectTo]);

    return isAuthentication ? children : null;
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRoute isAuthentication={user} redirectTo="/login">
            <MainLayout>
              <Home />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/headphones"
        element={
          <ProtectedRoute isAuthentication={user} redirectTo="/login">
            <MainLayout>
              <Headphones />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/shopping"
        element={
          <ProtectedRoute isAuthentication={user} redirectTo="/login">
            <MainLayout>
              <Shopping />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/earphones"
        element={
          <ProtectedRoute isAuthentication={user} redirectTo="/login">
            <MainLayout>
              <Earphones />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/infoCard"
        element={
          <ProtectedRoute isAuthentication={user} redirectTo="/login">
            <MainLayout>
              <InfoCard />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/spekars"
        element={
          <ProtectedRoute isAuthentication={user} redirectTo="/login">
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

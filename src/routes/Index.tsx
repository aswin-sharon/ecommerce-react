// src/routes/index.tsx
import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
// import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => (
  <Routes>
    {/* <Route path="/" element={<Home />} /> */}
    <Route
      path="/login"
      element={
        <PublicRoutes>
          <Login />
        </PublicRoutes>
      }
    />
    <Route
      path="/dashboard"
      element={
        <PrivateRoutes>
          <Dashboard />
        </PrivateRoutes>
      }
    />
  </Routes>
);

export default AppRoutes;

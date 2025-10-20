// src/routes/PublicRoutes.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoutes = ({ children } : any) => {
  const { user } = useAuth();

  // If logged in, redirect to dashboard (or any private page)
  if (user) return <Navigate to="/dashboard" />;

  return children;
};

export default PublicRoutes;

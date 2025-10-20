// src/routes/PrivateRoutes.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoutes = ({ children } : any) => {
  const { user } = useAuth();

  // If not logged in, redirect to login page
  if (!user) return <Navigate to="/login" />;

  return children;
};

export default PrivateRoutes;

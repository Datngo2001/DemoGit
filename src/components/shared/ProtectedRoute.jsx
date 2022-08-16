import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ condition, redirectPath = "/login", children }) {
  if (!condition) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}

export default ProtectedRoute;

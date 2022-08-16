import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import NavigationBar from "./components/NavigationBar";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import Todo from "./components/Todo";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
function App() {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  const nonNavPaths = ["/login", "/register"];
  const showNav = !nonNavPaths.includes(location.pathname);

  return (
    <div>
      {showNav && <NavigationBar />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute condition={user}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

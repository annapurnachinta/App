import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./auth/authContext";
import Login from "./auth/login";
import Signup from "./auth/signup";
import Home from "./home/content";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
    </Routes>
  );
};

export default App;

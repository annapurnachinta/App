import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async ({ username, password }) => {
    // Simulate login logic
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
    } else {
      throw new Error("Invalid credentials");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

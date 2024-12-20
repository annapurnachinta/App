import React, { useContext, useState } from "react";
import { AuthContext } from "./authContext"; // Ensure the path is correct
import { useNavigate } from "react-router-dom"; // For navigation
import "./login.css";

const Login = () => {
  const { login } = useContext(AuthContext); // Access login function from context
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(""); // Error message state
  const navigate = useNavigate(); // For navigation to signup page

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // Handle login submission
  const handleLogin = async () => {
    if (!credentials.username || !credentials.password) {
      setError("Please enter both username and password.");
      return;
    }

    try {
      await login(credentials); // Call login function with credentials
      setError(""); // Clear any existing errors
    } catch (err) {
      setError("Invalid username or password.");
    }
  };

  // Navigate to signup page
  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="container">
      <div className="login">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        {error && <div className="error">{error}</div>} {/* Display error */}
        <div className="buttons">
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

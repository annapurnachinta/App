import React, { useState } from "react";
import axios from 'axios';
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [error, setMessage] = useState("");

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit =async (e) => {
    e.preventDefault();

// new code 

try {
  const response = await axios.post('http://localhost:5000/signup', formData);
  setMessage(response.data.message);
  setFormData({ username: '', email: '', password: '' });
} catch (error) {  
  setMessage(error.response?.data?.message || 'Something went wrong');
}

// end code
    // const { name, username, password } = formData;

    // if (!name || !username || !password) {
    //   setError("All fields are required.");
    //   return;
    // }

    // setError("");
    // console.log("Signup Data:", formData);
    // // Call your sign-up API or logic here
    // alert("Signup Successful!");
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
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
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="buttons">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

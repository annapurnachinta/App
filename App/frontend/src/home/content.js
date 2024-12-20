import React, { useContext } from "react";
import { AuthContext } from "./../auth/authContext";

const Home = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="home">
      <h1>Welcome to the Homepage</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;

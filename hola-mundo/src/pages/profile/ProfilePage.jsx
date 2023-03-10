import React from "react";
import { useNavigate } from "react-router-dom";

const Profilepage = ({ user }) => {
  const history = useNavigate();
  const navigateTo = (path) => {
    history(path);
  };

  const goBack = () => {
    history(-1);
  };

  return (
    <div>
      <h1>Your Profile</h1>
      <button onClick={() => navigateTo("/tasks")}>Tasks</button>
      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default Profilepage;

import React from "react";
import { useNavigate, useLocation } from "react-router";

const Aboutpage = () => {
  const location = useLocation();
  const history = useNavigate();

  console.log("We are in Route:", location.pathname); // '/about | /faqs'

  const navigate = (path) => {
    history(path);
  };

  const goBack = () => {
    history(-1);
  };

  const goForward = () => {
    history(1);
  };

  return (
    <div>
      <h1>About | FAQs</h1>
      <div>
        <button onClick={() => navigate("/")}>Go To Home</button>
        <button onClick={goBack}>Go Back</button>
        <button onClick={goForward}>Go Forward</button>
      </div>
    </div>
  );
};

export default Aboutpage;

import React from "react";
import "./mainscreen.css";
import { useNavigate } from "react-router-dom";

function MainScreen() {
  let navigate = useNavigate();

  const registerRouteHandler = () => {
    let registerPath = `register`;
    navigate(registerPath);
  };

  const loginRouteHandler = () => {
    let loginPath = `login`;
    navigate(loginPath);
  };

  return (
    <div>
      <div className="header">
        <div>
          <button onClick={registerRouteHandler}>Register</button>
          <button onClick={loginRouteHandler}>Login</button>
        </div>
      </div>
      <div className="footer">
        <div className="footerContent">
          Personalised Doctor Appointment Booking System
          <p>@CopyRights 2024</p>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;

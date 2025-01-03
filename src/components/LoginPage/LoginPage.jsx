import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginPage.css";
import cross_icon from "../../assets/cross_icon.png";

function LoginPage() {
  const [currState, setCurrState] = useState("Login");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClose = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={handleClose} // Call handleClose on click
            src={cross_icon}
            alt="Close"
            className="close-icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && <input type="text" placeholder="Your name" required />}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button className="submit-button">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the <a href="#">terms of use</a> & <a href="#">privacy policy</a>.
          </p>
        </div>
        <div className="login-click-button">
          {currState === "Login" ? (
            <p>
              Create a new account?{" "}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCurrState("Sign Up");
                }}
                className="toggle-link"
              >
                Click here
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCurrState("Login");
                }}
                className="toggle-link"
              >
                Login here
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginPage;






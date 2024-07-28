import React, { useState } from "react";
import "./SingUp.css";

const SignUP = () => {
  const [contact, setContact] = useState({
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });
  const [isSignUp, setIsSignUp] = useState(false);

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });

    const toggleForm = () => {
      setIsSignUp((prev) => !prev);
    };

    return (
      <div className={`containerlogin ${isSignUp ? "right-panel-active" : ""}`}>
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="email"
              name="username"
              placeholder="Email"
              value={contact.username}
              onChange={handleinput}
              required
            />
            <input
              type="text"
              name="phone_number"
              placeholder="Phone Number"
              value={contact.phone_number}
              onChange={handleinput}
              autoComplete="off"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={contact.password}
              onChange={handleinput}
              required
            />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              value={contact.confirm_password}
              onChange={handleinput}
              required
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <span>or use your email and password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your email or password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>
                Enter your personal details to use all of the site's features
              </p>
              <button className="ghost" onClick={toggleForm}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, User!</h1>
              <p>
                Register with your personal details to use all of the site's
                features
              </p>
              <button className="ghost" onClick={toggleForm}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default SignUP;

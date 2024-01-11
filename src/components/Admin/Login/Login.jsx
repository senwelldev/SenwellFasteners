import React, { useState } from "react";
import "./Login.css";
import Dashboard from "../Dashboard/Dashboard";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const auth = getAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleVisiblePassword = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setToggle(true);
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      {toggle ? (
        <Dashboard/>
      ) : (
        <div className="login-container">
          <div className="form-container">
            <h1 className="text-h1">Login Form</h1>
            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
                className="input-field"
              />
              <br />
              <label htmlFor="password">Password</label>
              <input
                type={isVisible ? "text" : "password"}
                value={formData.password}
                name="password"
                onChange={handleChange}
                className="input-field"
              />
              <span className="visible-button" onClick={handleVisiblePassword}>
                {isVisible ? (
                  <MdOutlineVisibility />
                ) : (
                  <MdOutlineVisibilityOff />
                )}
              </span>
              <br />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

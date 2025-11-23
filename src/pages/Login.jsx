// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trimStart(), 
    });
  };

  const validateFields = () => {
    const newErrors = {};

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|in|org|net|co|io|edu)$/;

    const usernameRegex = /^[A-Za-z][A-Za-z0-9_]/; 

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]|:;"'<>,.?/]).{8,20}$/;

    if (/\s/.test(formData.email)) {
      newErrors.email = "Email must not contain spaces.";
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email (example@gmail.com, .in, .net etc).";
    }

    if (activeTab === "signup") {
      if (!usernameRegex.test(formData.username)) {
        newErrors.username =
          "Username must be 5–20 characters, start with a letter, and contain only letters, numbers, and underscores.";
      }
    }

    if (/\s/.test(formData.password)) {
      newErrors.password = "Password cannot contain spaces.";
    }

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be 8–20 chars long with uppercase, lowercase, number, and special character.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    if (activeTab === "signup") {
      // Store user data in localStorage for signup
      const userData = {
        username: formData.username,
        email: formData.email,
        isLoggedIn: true
      };
      localStorage.setItem('user', JSON.stringify(userData));
      alert("Signup successful!");
    } else {
      // For login, create user data from email
      const userData = {
        username: formData.email.split('@')[0], // Use email prefix as username
        email: formData.email,
        isLoggedIn: true
      };
      localStorage.setItem('user', JSON.stringify(userData));
      alert("Login successful!");
    }

    // Clear form
    setFormData({ username: "", email: "", password: "" });
    
    // Force a page reload to update navbar with user data
    window.location.href = "/";
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="logo">TOURFINITY</h1>

        <div className="forms-section">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`tab ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => setActiveTab("signup")}
            >
              Signup
            </button>
          </div>

          {/* LOGIN FORM */}
          <form
            className={`form ${activeTab === "login" ? "active" : ""}`}
            onSubmit={handleSubmit}
          >
            <h2>Login with your email and password</h2>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <p className="error-msg">{errors.email}</p>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {errors.password && <p className="error-msg">{errors.password}</p>}

            <button type="submit">Login</button>

            <p className="switch-text">
              Don't have an account?
              <a href="#" onClick={() => setActiveTab("signup")}>
                Signup
              </a>
            </p>
          </form>

          {/* SIGNUP FORM */}
          <form
            className={`form ${activeTab === "signup" ? "active" : ''}`}
            onSubmit={handleSubmit}
          >
            <h2>Create your account</h2>

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            {errors.username && <p className="error-msg">{errors.username}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <p className="error-msg">{errors.email}</p>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {errors.password && <p className="error-msg">{errors.password}</p>}

            <button type="submit">Signup</button>

            <p className="switch-text">
              Already have an account?
              <a href="#" onClick={() => setActiveTab("login")}>
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
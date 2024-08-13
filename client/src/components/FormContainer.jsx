import React from "react";
import { useState } from "react";
import axios from "axios";
import SocialIcons from "./SocialIcons";
import { useNavigate } from "react-router-dom";

function FormContainer({ type }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type == "sign-up") {
      try {
        const res = await axios.post("/api/auth/register", {
          name,
          email,
          password,
        });
        console.log("User registered : ", res.data);
        navigate("/home");
        // Add token to local storage
        localStorage.setItem("token", res.data.token);
      } catch (e) {
        console.error("Error FormContainer.jsx : " + e);
      }
    } else if (type == "sign-in") {
      try {
        const res = await axios.post("/api/auth/login", {
          email,
          password,
        });
        console.log("User logged in : ", res.data);
        navigate("/home");
        // Add token to local storage
        localStorage.setItem("token", res.data.token);
      } catch (e) {
        console.error("Error FormContainer.jsx : " + e);
      }
    }
  };
  return (
    <div className={`form-container ${type}`}>
      <form onSubmit={handleSubmit} method="POST">
        <h1>{type === "sign-up" ? "Create Account" : "Sign In"}</h1>
        {type === "sign-up" && (
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        {type === "sign-in" && <a href="#">Forget your password?</a>}
        <button type="submit">
          {type === "sign-up" ? "Sign Up" : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default FormContainer;

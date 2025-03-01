import React, { useState } from "react";
import './form.css';
const LoginForm = ({ onSubmit, credentials }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("This is required");
      return;
    }

    if (
      credentials &&
      formData.email === credentials.email &&
      formData.password === credentials.password
    ) {
      onSubmit(credentials);
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div style={{ padding: "10px" }}>
      <h1 style={{ color: "white" }}>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          value={formData.email}
          onChange={handleChange}
          
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={formData.password}
          onChange={handleChange}
       
        />
        <button
          type="submit"
          
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

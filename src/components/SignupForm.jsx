import React, { useState } from "react";
import './form.css';
const SignupForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    dob: "",
    file: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill all the details");
      return;
    }
    onSubmit(formData);
  };
  return (
    <div style={{ padding: "10px"}}>
      <h1 style={{ color: "white" }}>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name..."
          value={formData.name}
          onChange={handleChange}
          
        />
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
        <input
          type="number"
          name="phone_number"
          placeholder="Enter your phone_number..."
          value={formData.phone_number}
          onChange={handleChange}
        
        />
        <input
          type="date"
          name="dob"
          placeholder="Enter your dob..."
          value={formData.dob}
          onChange={handleChange}
         
        />
        <input
          type="file"
          name="file"
          placeholder="Enter your file..."
          value={formData.file}
          onChange={handleChange}
         
        />
        <button
          type="submit"
          
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

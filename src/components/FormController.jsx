import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import './form.css';
const FormController = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [userCredentials, setUserCredentials] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    if (isLogin) {
      setUserData(data);
    } else {
      setUserCredentials({ email: data.email, password: data.password });
      setIsLogin(true);
    }
  };

  return (
    <div
      
    >
      <h1>registration form</h1>
      {userData ? (
        <h2>Welcome {userData.email}</h2>
      ) : isLogin ? (
        <LoginForm onSubmit={handleFormSubmit} credentials={userCredentials} />
      ) : (
        <SignupForm onSubmit={handleFormSubmit} />
      )}

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Dont have an account? Sing-up"
          : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default FormController;

import React, { Component } from "react";
import "../styles/SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const SignUp = () => {
  const [activeForm, setActiveForm] = useState("form_login_state");
  const showLoginForm = () => {
    setActiveForm("form_login_state");
  };

  const showSignupForm = () => {
    setActiveForm("form_signup_state");
  };

  return (
    <div id="loginSignUp-root-container">
      <div id="loginSignUp-container">
        <div id="header-options-container">
          <Link onClick={showLoginForm}>
            <h1>LOGIN</h1>
          </Link>
          <Link onClick={showSignupForm}>
            <h1>SIGN UP</h1>
          </Link>
        </div>

        {activeForm === "form_login_state" && <LoginForm />}

        {activeForm === "form_signup_state" && <SignUpForm />}
      </div>
    </div>
  );
};

export default SignUp;

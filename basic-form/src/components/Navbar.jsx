import React, { Component, useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Cart from "./sub-components/Cart";
import UsernameLogo from "../Assets/UsernameLogo.png";

const Navbar = () => {
  const [sessionUsername, setSessionUsername] = useState(null);
  const [loginState, setLoginState] = useState("logged_out");
  useEffect(() => {
    setSessionUsername(sessionStorage.getItem("userName"));
    setLoginState(sessionStorage.getItem("login_state"));
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem("login_state", "logged_out");
    setLoginState("logged_in");
  };

  const handleLogout = () => {
    sessionStorage.setItem("login_state", "logged_out");
    sessionStorage.removeItem("Username Details");
    setLoginState("logged_out");

    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("CartItems");
    setSessionUsername(null);
  };

  return (
    <div>
      <nav id="top-nav">
        <div id="nav-logo-container">
          <Link to="/landingpage">
            <h1>GAME FREAK</h1>
          </Link>
        </div>

        <div id="nav-search-container">
          <input type="text" id="search_video_game" placeholder="Search for a video game" />
          <button>Search</button>
        </div>

        <div id="nav-options-container">
          <ul>
            <li id="usernameList">
            
              {sessionUsername != null ? (
                <Link to="/" id="usernameLink">
                  <img src={UsernameLogo} />
                  <span id="fit_content">{sessionUsername}</span>
                </Link>
              ) : null}
            </li>
            <li>
              {loginState === "logged_in" && sessionUsername != null ? (
                <Link to="/SignUp" onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                <Link to="/SignUp" onClick={handleLogin}>
                  Login / Sign Up
                </Link>
              )}
            </li>

            <li>
              <Cart />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

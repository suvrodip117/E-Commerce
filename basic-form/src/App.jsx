import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/*----IMPORTING COMPONENTS-----*/
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import GameDetails from "./components/GameDetails";
import LandingPage from "./components/LandingPage";
import CartDetails from "./components/sub-components/CartDetails";
import CheckoutSuccess from "./components/sub-components/CheckoutSuccess";
import Invoice from "./components/sub-components/Invoice";

const App = () => {
  return (
    <div className="master-container">
      <BrowserRouter>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<Navigate to="/landingpage" replace />} />
          <Route path="/landingpage" Component={LandingPage} />
          <Route path="/home" Component={HomePage} />
          <Route path="/SignUp" Component={SignUp} />
          <Route path="/:slug" Component={GameDetails} />
          <Route path="/cartdetails" Component={CartDetails} />
          <Route path="/checkout-success" Component={CheckoutSuccess} />
          <Route path="/invoice" Component={Invoice} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

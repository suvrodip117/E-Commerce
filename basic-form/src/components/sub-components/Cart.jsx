import React, { useEffect, useState } from "react";
import "../../styles/subcomponent-style/Cart.css";
import { Link } from "react-router-dom";
import useGetRequestsFromDB from "../../helpers/useGetRequestsFromDB";

const Cart = () => {
  const { data, error } = useGetRequestsFromDB(
    "http://localhost:5000/api/v1/paymentDetails"
  );

  const [loginState, setLoginState] = useState("logged_out");
  useEffect(() => {
    setLoginState(sessionStorage.getItem("login_state"));
  });
  return (
    <div className="cart-cont">
      <Link to="/cartdetails">
        Cart({loginState === "logged_in" ? data.numberofitemsincart : 0})
      </Link>
    </div>
  );
};

export default Cart;

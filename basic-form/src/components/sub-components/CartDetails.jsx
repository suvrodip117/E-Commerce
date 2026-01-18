import React from "react";
import "../../styles/CartDetails.css";
import CartDataTable from "../../helpers/CartDataTable";
import axios from "axios";

const CartDetails = () => {
  
  const makeProductPayment = async () => {
    console.log(JSON.parse(sessionStorage.getItem("CartItems")));
    sessionStorage.setItem("PaymentFlag", "false");
    const cartItems = JSON.parse(sessionStorage.getItem("CartItems"));
    const username = sessionStorage.getItem("userName");

    const response = await axios
      .post("http://localhost:5000/api/v1/create-checkout-session", {
        cartItems,
        username,
      })
      .catch((err) => {
        if (err && err.response) {
          console.log("Error: ", err);
        }
      });

    if (response && response.data.url) {
      window.location.href = response.data.url;
    }
  };

  return (
    <div className="cart-dtls-root-cont">
      <div className="cart-dtls-cont">
        <CartDataTable />
        <div className="proceed-to-payment-cont">
          <button
            className="btn-proceed-to-payment submitBtn"
            onClick={makeProductPayment}
          >
            Proceed To Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;

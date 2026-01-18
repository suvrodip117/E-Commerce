import React, { useState, useEffect } from "react";
import "../../styles/subcomponent-style/ProceedtoBuy.css";
import { useParams } from "react-router-dom";
import findGameBySlug from "../../helpers/getGamePropsBySlug";
import { useFormik } from "formik";
import axios from "axios";

const ProceedtoBuy = (props) => {
  const username = sessionStorage.getItem("userName");
  const { slug } = useParams();
  const gameinfo = findGameBySlug(slug, props.id);

  const [selectedValue, setSelectedValue] = useState("1");
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    formik1.handleChange(e);
  };

  const [cartSuccess, setCartSuccess] = useState(null);
  const saveProductDetailsForPayment = async (values) => {
    const response = await axios
      .post("http://localhost:5000/api/v1/paymentDetails", values)
      .catch((err) => {
        if (err && err.response) console.log("Error: ", err);
      });

    if (response && response.data) {
      setCartSuccess(response.data.message);
      setTimeout(function () {
        window.location.reload();
      }, 500);
    }
  };

  const [buttonType, setButtonType] = useState(null);
  const onSubmit = (values) => {
    saveProductDetailsForPayment(values);
  };

  const formik1 = useFormik({
    initialValues: {
      signup_username: username,
      deliveryAddress: "",
      slug: slug,
      prod_quant: "",
      product_price: gameinfo.price,
    },
    onSubmit,
  });

  return (
    <div className="proceed-to-buy-cont" id={props.id}>
      <p style={{ display: "none" }}>{username}</p>
      <form id="proceedtobuy_form" onSubmit={formik1.handleSubmit}>
        <div className="delivery-add-cont buy-ele">
          <label for="deliveryAddress" id="label_deli_addr">
            Delivery Address:
          </label>
          <textarea
            type="text"
            id="deliveryAddress"
            placeholder="Enter Delivery Address"
            value={formik1.values.deliveryAddress}
            onChange={formik1.handleChange}
          />
        </div>
        <p>
          Price: ₹
          <span
            className="bold-text"
            id="product_price"
            name="product_price"
            value={gameinfo.price * selectedValue}
          >
            {gameinfo.price * selectedValue}
          </span>
        </p>
        <div className="quant-cont buy-ele">
          <label for="prod_quant" id="label_quant">
            Quantity:
          </label>
          <select
            id="prod_quant"
            name="prod_quant"
            onChange={handleChange}
            value={formik1.values.prod_quant}
          >
            {[...Array(20).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <button
          className="submitBtn btn-add-to-cart"
          onClick={() => setButtonType("add-to-cart")}
        >
          Add to Cart
        </button>
      </form>
    </div>
  );
};

export default ProceedtoBuy;

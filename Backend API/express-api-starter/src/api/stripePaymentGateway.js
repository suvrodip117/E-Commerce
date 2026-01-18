const express = require("express");
const stripe = require("stripe")(
  "sk_test_51PueToCxkhFW9GM83fDpG5XtUzNOUAJ4fEl5l8YsJo2wgo67sW3lRnH2Lb64xrD8n1vuROcLOTb6Rs4nAoXV00fH00kp8kHKAF"
);

const {
  models: { GamePaymentDetails },
} = require("../models");

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: item.slug,
        },
        unit_amount: item.product_price * 100,
      },
      quantity: item.prod_quant,
    };
  });
  console.log(line_items);
  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "GB", "IN"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "inr",
          },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
    ],
    line_items,
    mode: "payment",
    success_url: "http://localhost:3000/checkout-success",
    cancel_url: "http://localhost:3000/cartdetails",
  });

  res.send({ url: session.url });
});

module.exports = router;

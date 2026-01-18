const express = require("express");
const {
  models: { GamePaymentDetails },
} = require("../models");

const router = express.Router();

/* --------------P O S T REQUESTS--------------- */
router.post("/paymentDetails", async (req, res) => {
  const {
    signup_username,
    deliveryAddress,
    slug,
    payment_method,
    prod_quant,
    product_price,
  } = req.body;

  console.log(req.body);
  const itemAlreadyExists = await GamePaymentDetails.findOne({
    where: { signup_username, slug },
  }).catch((err) => {
    console.log("Error: ", err);
  });
  if (itemAlreadyExists)
    return res.json({ message: "Game is already added to Cart" });

  const newGameToBeBought = await GamePaymentDetails.create({
    signup_username,
    deliveryAddress,
    slug,
    payment_method,
    prod_quant,
    product_price,
  });

  const savedGame = await newGameToBeBought.save().catch((err) => {
    console.log("Error: ", err);
    res.json({ error: "Cannot add to cart at the moment" });
  });

  if (savedGame) res.json({ message: "Your item has been added to the Cart." });
  else res.json({ error: "Cannot add to cart at the moment" });
});

/* --------------G E T REQUESTS--------------- */
router.get("/paymentDetails", async (req, res) => {
  const { username } = req.query;
  console.log(req.query);
  if (!username) {
    return res.json({ error: "Username not sent properly" });
  }

  const records = await GamePaymentDetails.findAll({
    where: { signup_username: username },
  }).catch((error) => {
    res.json({ error: "Error fetching quantity count" });
  });

  if (records.length === 0) {
    return res.json({ message: "No records found for the given username" });
  }

  const numberofitemsincart = records.reduce(
    (sum, record) => sum + parseFloat(record.prod_quant),
    0
  );

  res.json({
    records,
    numberofitemsincart,
  });
});

/* --------------D E L E T E REQUESTS--------------- */
router.delete("/paymentDetails", async (req, res) => {
  try {
    const { slug, username } = req.body;
    //console.log(slug, username);
    // Ensure both parameters are provided
    if (!slug || !username) {
      return res
        .status(400)
        .json({ message: "Slug and username are required" });
    }

    // Find the product by slug and username
    const result = await GamePaymentDetails.destroy({
      where: {
        slug: slug,
        signup_username: username,
      },
    });

    if (result === 0) {
      return res
        .status(404)
        .json({ message: "Product not found or not authorized to delete" });
    }

    res.status(200).json({ message: "Success! Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;

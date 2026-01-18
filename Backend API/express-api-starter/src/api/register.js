const express = require("express");
const {
  models: { User },
} = require("../models");

const router = express.Router();
router.post("/register", async (req, res) => {
  const {
    signup_fname,
    signup_lname,
    signup_username,
    signup_email,
    signup_password,
    signup_phn,
  } = req.body;

  const userAlreadyExists = await User.findOne({
    where: { signup_email, signup_username },
  }).catch((err) => {
    console.log("Error: ", err);
  });
  if (userAlreadyExists)
    return res.json({ message: "User Email already exists" });

  const newUser = await User.create({
    signup_fname,
    signup_lname,
    signup_username,
    signup_email,
    signup_password,
    signup_phn,
  });
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.json({ error: "Cannot register user at the moment" });
  });

  if (savedUser) res.json({ message: "Thanks for registering!" });
  else res.json({ error: "Cannot register user at the moment" });
});

module.exports = router;

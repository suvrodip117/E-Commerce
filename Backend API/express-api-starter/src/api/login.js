const express = require("express");
const {
  models: { User },
} = require("../models");
const { where } = require("sequelize");

const router = express.Router();

/*----------P O S T Requests------------ */
router.post("/login", async (req, res) => {
  const { login_username, login_password } = req.body;
  const userWithUsername = await User.findOne({
    where: {
      signup_username: login_username,
    },
  });
  if (!userWithUsername) {
    return res.json({ error: "Username is not registered" });
  }
  if (userWithUsername.signup_password != login_password)
    return res.json({ error: "Password is incorrect" });
  res.json({ message: "Login Successful!" });
});

/*-----------G E T Requests--------------- */
router.get("/login", async (req, res) => {
  const { username } = req.query;
  console.log(req.query);
  if (!username) {
    return res.json({ error: "Username not sent properly" });
  }

  const records = await User.findAll({
    where: { signup_username: username },
  }).catch((error) => {
    res.json({ error: "Error fetching quantity count" });
  });

  if (records.length === 0) {
    return res.json({ message: "No records found for the given username" });
  }
  res.json({
    records,
  });
});

module.exports = router;

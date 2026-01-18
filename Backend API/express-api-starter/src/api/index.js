const express = require('express');
const registerUserAPI = require("./register");
const loginUserAPI = require('./login');
const PaymentAPI = require('./payment');
const StripePaymentGateway = require('./stripePaymentGateway');

const router = express.Router();

router.use(registerUserAPI);
router.use(loginUserAPI);
router.use(PaymentAPI);
router.use(StripePaymentGateway);

module.exports = router;

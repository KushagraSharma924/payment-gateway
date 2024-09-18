const express = require('express');
const Userrouter = require("../routes/User");
const acountrouter = require('./Acount')

const router = express.Router();

router.use("/user", Userrouter)
router.use("/account",acountrouter)
module.exports = router;


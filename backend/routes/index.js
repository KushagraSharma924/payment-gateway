const express = require('express');
const Userrouter = require("../routes/User");
const acountrouter = require('./Acount')
const {authMiddleware} = require('../middleware')
const router = express.Router();

router.use("/user", authMiddleware,Userrouter)
router.use("/account",authMiddleware,acountrouter)
module.exports = router;


// backend/api/index.js
const express = require('express');
const Userrouter = import("../routes/User");

const router = express.Router();

router.use("/user",Userrouter)
module.exports = router;
//api/v1
//for transaction
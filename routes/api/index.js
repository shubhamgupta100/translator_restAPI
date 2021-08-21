const express = require("express");
const router = express.Router();
const homeController = require("../../controller/homeController");

console.log("Router Loaded");

router.post("/translate", homeController.home);

module.exports = router;

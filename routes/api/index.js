const express = require("express");
const router = express.Router();
const homeController = require("../../controller/homeController");

router.post("/translate", homeController.home);

module.exports = router;

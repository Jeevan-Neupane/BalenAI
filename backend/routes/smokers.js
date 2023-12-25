const express = require("express");
const {addSmokers} = require("../controllers/smokersController");
const smokers = express.Router();

// get smokers
smokers.get("/add", addSmokers);

module.exports = smokers;

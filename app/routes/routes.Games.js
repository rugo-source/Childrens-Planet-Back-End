const express = require("express");
const router = express.Router();
const {
	findAll,
} = require("./../controllers/controllers.Games.js");


router.get("/games", findAll);


module.exports = router;

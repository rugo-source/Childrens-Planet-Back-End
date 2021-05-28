const express = require("express");
const router = express.Router();
const {
	findAll,
	create,
} = require("./../controllers/controllers.Games.js");


router.get("/games", findAll);
router.post("/g", create);


module.exports = router;

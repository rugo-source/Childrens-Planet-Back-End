const express = require("express");
const router = express.Router();
const {
	create,
	findOne,
	update
} = require("./../controllers/controllers.User.js");

router.post("/registro", create);
router.post("/login", findOne);
router.put("/update/", update);
router.get("/delete/", destroy);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
	create,
	findOne,
	update,
	eraser,
} = require("./../controllers/controllers.User.js");

router.post("/registro", create);
router.post("/login", findOne);
router.put("/update/", update);
router.post("/delete", eraser);

module.exports = router;

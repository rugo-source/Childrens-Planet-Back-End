const express = require("express");
const router = express.Router();
const {
	create,
	findOne,
	update,
	findAll,
	eraser,
} = require("./../controllers/controllers.User.js");

router.post("/registro", create);
router.post("/login", findOne);
router.put("/update", update);
router.get("/users/:email", findAll);
router.post("/delete", eraser);

module.exports = router;

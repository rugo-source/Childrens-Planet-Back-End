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
router.put("/:email/update", update);
router.get("/users/:role", findAll);
router.post("/delete/:email", eraser);

module.exports = router;

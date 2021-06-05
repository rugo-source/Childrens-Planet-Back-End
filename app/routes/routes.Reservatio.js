const express = require("express");
const router = express.Router();
const {
	create,
	findAllbyUser,
} = require("./../controllers/controllers.Reservation.js");

router.post("/reservation", create);
router.post("/reservations/:user", findAllbyUser);

module.exports = router;

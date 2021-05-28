const express = require("express"); 
const router = express.Router();
const {
	create
} = require("./../controllers/controllers.Reservation.js");


router.post("/reservation", create);


module.exports = router;

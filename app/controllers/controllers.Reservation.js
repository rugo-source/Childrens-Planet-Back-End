const db = require("./../models");
 const User = db.Reservation;
const { encrypt, validate } = require("./controllers.encrypt");

exports.create = async (req, res) => {
  const reservation = {
    email: req.body.email,
    horario: req.body.horario,
    day: req.body.day,
    game: req.body.game,
    peopleCapacity:req.body.peopleCapacity,
  };
  const reservationData = await Reservation.create(reservation)
  if (reservationData.ok === true){
    console.log(Hola);
    res.send(reservationData);
  }else{
    res.status(500).send({
        message:
          userData.message|| " Some erros ocurred while creating reservation",
      });
  }
};



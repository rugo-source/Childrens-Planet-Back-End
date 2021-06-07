const db = require("./../models");
const Reservation = db.Reservation;
const Game = db.Game;

exports.create = async (req, res) => {
  const games = req.body.game;
  try {
    const reservation = {
      userEmail: req.body.email,
      horario: req.body.horario,
      day: req.body.day,
      peopleCapacity: req.body.peopleCapacity,
    };
    const reservationData = await Reservation.create(reservation);

    for (let game of games) {
      const gamesReservatio = await Game.update(
        { user: req.body.email, reservationId:reservationData.id},
        { where: { names: game } }
      );
    }
    res.status(200).json({ message: "Registration was successfully" });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.findAllbyUser = async (req, res) => {
  const user = req.params.user;
  try {
    const reservation = await Reservation.findAll({
      where: { userEmail: user },
    });
    if (reservation) {
      const table = await Game.findAll({ where: { user } });
      res.status(200).json({ reservation, table });
    } else {
      res.status(404).json({ message: "have not reservation" });
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

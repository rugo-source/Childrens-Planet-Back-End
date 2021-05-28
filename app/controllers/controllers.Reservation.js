const db = require("./../models");
const Reservation = db.Reservation;
const Game = db.game;

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
      try {
        const gamesReservatio = await Game.update(
          { username: req.body.email },
          { where: { names: game } }
        );
      } catch (err) {
        break;
      }
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

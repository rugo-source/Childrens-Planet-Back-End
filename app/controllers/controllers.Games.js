const db = require("./../models");
const Game = db.Game;
const { sequelize,Op } = require("sequelize");

exports.findAll = async (req, res) => {
  Game.findAll({ where: { amount: { [Op.or]: { [Op.gt]: 0 } } ,user: { [Op.is]: null,} }, order:[  ['id', 'ASC'],], })
    .then((games) => {
      res.send(games);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.create = async (req, res) => {
  try {
    const game = {
      names: req.body.names,
      category: req.body.category,
      amount: req.body.amount,
      nameId: req.body.nameId,
    };
    const gameDate = await Game.create(game);
    res.status(200).send(gameDate);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

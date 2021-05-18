const db = require("./../models");
const Game = db.Game;
const {Op}=require("sequelize");

exports.findAll = async (req, res) => {
    const amount = req.query.amount;
   
    Game.findAll({ where: { amount: {[Op.or]: {[Op.lt]: 1}}}})
      .then((game) => {
        res.send(game);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };
    

const db = require("./../models");
const Exit = db.Exit;
const { encrypt, validate } = require("./controllers.encrypt");

exports.create = async (req, res) => {
  try {
    const exit = {
      name: req.body.name,
      date: req.body.date,
    };
    const exitData = await Exit.create(user);
    res.status(200).send(entryData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

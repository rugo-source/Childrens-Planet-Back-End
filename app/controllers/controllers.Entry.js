const db = require("./../models");
const Entry = db.Entry;
const { encrypt, validate } = require("./controllers.encrypt");

exports.create = async (req, res) => {
  try {
    const entry = {
      name: req.body.name,
      date: req.body.date,
    };
    const entryData = await Entry.create(user);
    res.status(200).send(entryData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

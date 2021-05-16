const db = require("./../models");
const Users = db.Users;
const { encrypt, validate } = require("./controllers.encrypt");
//create
exports.create = async (req, res) => {
  try {
    const password = await encrypt(req.body.password);
    const user = {
      name: req.body.name,
      domicilio: req.body.domicilio,
      email: req.body.email,
      age: req.body.age,
      password,
      role: req.body.role,
    };
    const usersData = await Users.create(user);
    res.status(200).send(usersData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//login
exports.findOne = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let validatePassword;

  const user = await Users.findOne({
    where: { email },
  });
  !user
    ? res.status(404).json({ error: "User does not exist" })
    : ((validatePassword = await validate(password, user.password)),
      !validatePassword
        ? res.status(400).json({ error: "invalid password" })
        : res.send(user));
};

//update
exports.update = async (req, res) => {
  try {
    const email = req.body.email;

    const user = await User.update(req.body, { where: { email } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//find all
exports.findAll = async (req, res) => {
  const email = req.query.email;

  Users.findAll({ where: email })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//destroy
exports.delete = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.destroy(req.body, { where: { email } });
    res.status(200).json({ message: "users was delete" });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

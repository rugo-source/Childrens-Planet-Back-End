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
      role: "USER",
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
    const email = req.params.email;

    const user = await Users.update(req.body, { where: { email } });

    if (user == 0) {
      res.status(505).json({ message: "Cannot update" });
    } else {
      res.status(200).json({ message: `User was successfully update ${user}` });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//find all
exports.findAll = async (req, res) => {
  const role = req.params.role;
  if (role === "ADMI") {
    Users.findAll({ where: { role: "ADMI" } })
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  } else if (role === "USER") {
    Users.findAll({ where: { role: "USER" } })
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }else{
    res.status(403).send({message:"Forbidden route"})
  }
};

//destroy
exports.eraser = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await Users.destroy({ where: { email } });
    res.status(200).json({ message: "users was delete" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

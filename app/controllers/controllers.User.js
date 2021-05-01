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
exports.update=async (req, res)=>{
const  Users.update = 

};

//destroy
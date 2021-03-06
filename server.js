const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const user = require("./app/routes/routes.User.js");
const games = require("./app/routes/routes.Games.js");
const reservation = require("./app/routes/routes.Reservatio.js");

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

//  db.sequelize.sync({ force: true }).then(() => {
//  console.log("Drop and rebuild DB");
//  });
db.sequelize.sync();

app.use("/users", user);
app.use("/games", games);
app.use("/resev", reservation);

app.get("/", (req, res) => {
  res.json({ message: "hola pinche putita" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`PORT ${PORT}`);
});

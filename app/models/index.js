const {
	DB,
	USER,
	PASSWORD,
	HOST,
	dialect,
	pool,
} = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
	host: HOST,
	dialect,
	operatorsAliases: false,
	pool,
	define: {
		timestamps: false,
	},
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require("./user")(sequelize, Sequelize);
db.Game = require("./game")(sequelize, Sequelize);
db.Reservation = require("./reservation")(sequelize, Sequelize);

db.Users.hasMany(db.Reservation, { as: "Reservation" });
db.Reservation.belongsTo(db.Users, {
	foreingKey: "emailid",
	as : "email"
})


module.exports = db;

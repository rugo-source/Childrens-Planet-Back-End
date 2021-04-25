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
		timestamp: false,
	},
});
 const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require("./user")(sequelize, Sequelize);
db.Users = require("./game")(sequelize, Sequelize);
module.exports = db;

module.exports = (sequelize, Sequelize) => {
	const Users = sequelize.define("users", {
		name: {
			type: Sequelize.STRING,
		},
		domicilio: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
		},
		age: {
			type: Sequelize.INTEGER,
		},
		password: {
			type: Sequelize.STRING,
		},
		role: {
			type: Sequelize.STRING,
		},
	});
	return Users;
};

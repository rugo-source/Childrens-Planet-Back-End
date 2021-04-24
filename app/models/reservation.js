module.exports = (sequelize, Sequelize) => {
	const Reservation = sequelize.define("reservation", {
		name: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
		},
		horario: {
			type: Sequelize.INTEGER,
		},
		games: {
			type: Sequelize.STRING,
		},
		date: {
			type: Sequelize.STRING,
		},
	});
	return Reservation;
};

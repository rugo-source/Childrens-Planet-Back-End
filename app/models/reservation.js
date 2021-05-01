module.exports = (sequelize, Sequelize) => {
	const Reservation = sequelize.define("reservation", {
		horario: {
			type: Sequelize.INTEGER,
		},
		day: {
			type: Sequelize.STRING,
		},
   		 peopleCapacity:{
			type: Sequelize.INTEGER,
		},
	});
	return Reservation;
};

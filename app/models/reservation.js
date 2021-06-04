module.exports = (sequelize, Sequelize) => {
	const Reservation = sequelize.define("reservation", {
		horario: {
			type: Sequelize.STRING,
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

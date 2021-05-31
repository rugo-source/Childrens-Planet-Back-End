module.exports = (sequelize, Sequelize) => {
	const Game = sequelize.define("game", {
		names: {
			type: Sequelize.STRING,
		},
		category: {
			type: Sequelize.INTEGER,
		},
		amount: {
			type: Sequelize.INTEGER,
		},
		amountU: {
			type: Sequelize.INTEGER,
		},
		user: {
			type: Sequelize.STRING,
		},
	});
	return Game;
};

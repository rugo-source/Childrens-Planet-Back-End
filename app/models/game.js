module.exports = (sequelize, Sequelize) => {
	const Game = sequelize.define("game", {
		category: {
			type: Sequelize.INTEGER,
		},
		amount: {
			type: Sequelize.INTEGER,
		},
	});
	return Game;
};

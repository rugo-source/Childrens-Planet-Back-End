module.exports = (sequelize, Sequelize) => {
	const Game = sequelize.define("game", {
		category: {
			type: Sequelize.INTEGER,
		},
		name: {
			type: Sequelize.STRING,
		},
		amount: {
			type: Sequelize.INTEGER,
		},
	});
	return Game;
};

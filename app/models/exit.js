module.exports = (sequelize, Sequelize) => {
	const Exit = sequelize.define("exit", {
        name: {
            type: Sequelize.STRING,
        },
		date: {
			type: Sequelize.INTEGER,
		},
	});
	return Exit;
};

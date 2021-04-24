module.exports = (sequelize, Sequelize) => {
	const Entry = sequelize.define("entry", {
        name: {
            type: Sequelize.STRING,
        },
		date: {
			type: Sequelize.INTEGER,
		},
	});
	return Entry;
};

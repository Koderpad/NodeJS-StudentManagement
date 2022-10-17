const { Sequelize } = require('sequelize');
const { HOST, DB, USER, PASSWORD, DIALECT } = require('../configs/db.config');
const { createStudentModel } = require('../model/student.model');
const sequelize = new Sequelize(DB, USER, PASSWORD, {
	host: HOST,
	dialect: DIALECT,
});

const Student = createStudentModel(sequelize);

module.exports = {
	sequelize,
	Student,
};

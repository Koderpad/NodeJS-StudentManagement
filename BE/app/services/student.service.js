const { sequelize, Student } = require('../model/index');

const getList = async () => {
	const list = await Student.findAll();
	return list ? list : false;
};

const getDetail = async (id) => {
	const student = await Student.findOne({ where: { id: id } });
	return student ? student : false;
};

const addStudent = async (student) => {
	const newStudent = await Student.create(student);
	return newStudent;
};

const update = async (id, fullName, age, numberClass) => {
	const student = await Student.update(
		{
			fullName: fullName,
			age: age,
			numberClass: numberClass,
		},
		{
			where: {
				id: id,
			},
		}
	);
	return student;
};

const deleteStudent = async (id) => {
	if (await getDetail(id)) {
		const DeleteStudent = await Student.destroy({ where: { id: id } });
		return DeleteStudent;
	}
	return false;
};

module.exports = {
	getList,
	getDetail,
	addStudent,
	update,
	deleteStudent,
};

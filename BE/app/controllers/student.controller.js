const {
	getList,
	getDetail,
	addStudent,
	update,
	deleteStudent,
} = require('../services/student.service');

const getStudentList = async (req, res) => {
	const studentList = await getList();
	if (studentList) {
		res.status(200).send(studentList);
	} else {
		res.status(404).send('not found');
	}
};

const getStudentDetailByID = async (req, res) => {
	let { id } = req.params;
	id = parseInt(id);
	const student = await getDetail(id);
	if (student) {
		res.status(200).send(student);
	} else {
		res.status(404).send('not found');
	}
};

const createStudent = async (req, res) => {
	let student = req.body;
	const Student = await addStudent(student);
	if (Student) {
		res.status(201).send(Student);
	} else {
		res.status(404).send('not found');
	}
};

const updateStudentByID = async (req, res) => {
	let { id } = req.params;
	id = parseInt(id);
	const { fullName, age, numberClass } = req.body;
	const newStudent = await update(id, fullName, age, numberClass);
	if (newStudent) {
		res.status(200).send(await getDetail(id));
	} else {
		res.status(404).send('error');
	}
};

const deleteStudentByID = async (req, res) => {
	let { id } = req.params;
	id = parseInt(id);
	const students = await deleteStudent(id);
	if (students) {
		res.status(200).send('success deleteStudent!');
	} else {
		res.status(404).send('error');
	}
};

module.exports = {
	getStudentList,
	getStudentDetailByID,
	createStudent,
	updateStudentByID,
	deleteStudentByID,
};

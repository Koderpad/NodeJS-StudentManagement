const express = require('express');
const studentRouter = express.Router();
const {
	getStudentDetailByID,
	getStudentList,
	createStudent,
	updateStudentByID,
	deleteStudentByID,
} = require('../controllers/student.controller');
const { logFeature } = require('../middlewares/logger/log-feature');
const {
	checkEmpty,
	checkNumClass,
} = require('../middlewares/validations/student.validation');
studentRouter.use(express.json());

// http: //localhost:3000
// get all
studentRouter.get('/', logFeature, getStudentList);

// http: //localhost:3000/
//get details of
studentRouter.get('/:id', getStudentDetailByID);

// add student
studentRouter.post('/', checkEmpty, checkNumClass, createStudent);

//update student
studentRouter.put('/:id', updateStudentByID);

//delete student
studentRouter.delete('/:id', deleteStudentByID);

module.exports = studentRouter;


var express = require('express')
var router = express.Router();

var Course = require('../models/course')
var CourseController = require('../controllers/courseController');


// Access API URL: http://localhost:3000/employees
router.get('/', CourseController.listCourses);

// Access API Url: http://localhost:3000/employees/show/6031e63dc479801ac48d71de
router.get('/show/:id', CourseController.getCourseById);

// Access API Url: http://localhost:3000/employees/create
router.get('/create', CourseController.createCourse);

// Access API Url: http://localhost:3000/employees/save
router.post('/save', CourseController.saveCourse);

// Access API Url: http://localhost:3000/employees/delete/6031e63dc479801ac48d71de
router.delete('/delete/:id', CourseController.deleteCourse);

// Access API Url: http://localhost:3000/employees/update/6031e991e31f5455fc0db1cd
router.put('/update/:id', CourseController.updateCourse);

module.exports = router;
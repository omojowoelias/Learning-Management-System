
var mongoose = require('mongoose');
var Course = require('../models/course');

var courseController = {};

courseController.listCourses = function (req, res) {
    Course.find((err, courses) => {
        if (err) throw err;
        res.render('../views/courses/index', { empData: courses });
    });
}

courseController.getCourseById = function (req, res) {
    Course.findById(req.params.id, (err, course) => {
        if (err) throw err;
        // res.send(course);
        res.render('../views/courses/show', { emp: course });
    });
}

courseController.createCourse = function (req, res) {
    res.render('../views/courses/create.ejs');
}

courseController.saveCourse = function (req, res) {
    Course.create(req.body, (err) => {
        if (err) throw err;
        res.send('Course Saved Successfully to DB!!');
    });
}

courseController.deleteCourse = function (req, res) {
    Course.findByIdAndRemove(req.params.id, (err) => {
        if (err) throw err;
        res.send('Course Deleted Successfully from DB!!');
    })
}

courseController.updateCourse = function (req, res) {
    Course.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) throw err;
        res.send('Course Updated Successfully to DB!!')
    })
}

module.exports = courseController;
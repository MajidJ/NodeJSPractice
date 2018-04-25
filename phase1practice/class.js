

const Student = require('./student.js');

function Class(numStudents, profName, roomNum) {
    this.students = [];
    this.numStudents = numStudents;
    this.profName = profName;
    this.roomNum = roomNum;
    this.addStudent = function(name, favSubject, GPA) {
        this.students.push(new Student(name, favSubject, GPA));
    }
    this.printAllStudents = function() {
        console.log('Here are all the students in class of room ' + this.roomNum + ": " + this.students);
    }
}

module.exports = Class;
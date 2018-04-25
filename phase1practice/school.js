
const Class = require('./class.js');
const inquirer = require('inquirer');
let classSize = 0;
let studentName;
let favClass;
let count = 0;

inquirer.prompt([
    {
        type: 'input',
        message: 'How many students are in the class?',
        name: 'classSize'
    },
    {
        type: 'input',
        message: 'How many students are in the class?',
        name: 'classSize'
    },

]).then(answers => {
    classSize = answers.classSize;
    const newClass = new Class(classSize,'George',301);
    askStudentInfo();
}).catch(function(err) {
    console.log(err);
});



let askStudentInfo = function() {
    if (count < classSize) {
        inquirer.prompt([
            {
                type: 'input',
                message: `What is the name of student #${count+1}?`,
                name: 'studentName'
            },
            {
                type: 'input',
                message: `What is student #${count+1}'s favorite class?`,
                name: 'favClass'
            },
            {
                type: 'input',
                message: `What is student #${count+1}'s GPA?`,
                name: 'GPA'
            }
        ]).then(answers => {
            newClass.addStudent(answers.studentName, answers.favClass, answers.GPA);
            count++;
            askStudentInfo();
        }).catch(function(err) {
            console.log(err);
        });
    } else {
        console.log("All questions asked for this class");
        console.log(newClass.printAllStudents());
        console.log(newClass);

    }
};

// newClass.addStudent('Tim', 'Science', 4.0);
// newClass.addStudent('Zach', 'English', 3.8);
// newClass.addStudent('Jane', 'Alegbra', 4.0);

// console.log(newClass);
// console.log(newClass.printAllStudents())

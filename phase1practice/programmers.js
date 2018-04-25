// const inquirer = require ('inquirer');
// let newPerson;
// const newPeople = [];
// let numberOfPeople = 0;

// function Programers(name,jobTitle, age, programLang) {
//     this.name = name;
//     this.jobTitle = jobTitle;
//     this.age = age;
//     this.programLang = programLang;
//     this.printInfo = function() {
//         console.log(`Name: ${this.name} \nJob Title: ${this.jobTitle} \nAge: ${this.age} \nProgramming Language: ${this.programLang}`)
//     }
// };


// // let James = new Programers('James', 'Developer', 24, 'Java');

// function askQuestion() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             message: 'What is your name?',
//             name: 'inputName'
//         },
//         {
//             type: 'input',
//             message: 'What is your job title?',
//             name: 'inputJob'
//         },
//         {
//             type: 'input',
//             message: 'What is your age?',
//             name: 'inputAge'
//         },
//         {
//             type: 'input',
//             message: 'What is your preferred programming language?',
//             name: 'inputLang'
//         }
//     ]).then(answers => {
//         numberOfPeople++;
//         console.log('Input for person number ' + numberOfPeople+1);
//         if (numberOfPeople < 2) {
//             askQuestion();
//             newPerson = new Programers(answers.inputName, answers.inputJob, parseInt(answers.inputAge), answers.inputLang);
//             newPeople.push(newPerson);
//         }  else {
//             for (let i = 0; i < 2; i++) {
//                 newPeople[i].printInfo();
//             }
//         }
//     }).catch(function(error) {
//         console.log(error);
//     });
// }

// askQuestion();


// let counter = 0; 

// function recursion() {
//     console.log('This is the count', counter);
//     counter++;
//     if (counter < 5) {
//         recursion();
//     }
// }

// recursion();


// dependency for inquirer npm package
var inquirer = require("inquirer");
let theTeam = [];

const Programmer = require('./programmer-constructor');
const numOfInputs = 2;


// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position +
  "\nAge: " + this.age + "\nLanguages: " + this.language);
};

// variable we will use to count how many times our questions have been asked
var count = 0;

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < numOfInputs) {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "name",
        message: "What is your name?"
      }, {
        name: "position",
        message: "What is your current position?"
      }, {
        name: "age",
        message: "How old are you?"
      }, {
        name: "language",
        message: "What is your favorite programming language?"
      }
    ]).then(function(answers) {
      // initializes the variable newguy to be a programmer object which will take
      // in all of the user's answers to the questions above
      var newGuy = new Programmer(
        answers.name,
        answers.position,
        answers.age,
        answers.language);
      // printInfo method is run to show that the newguy object was successfully created and filled
    //   newGuy.printInfo();
        theTeam.push(newGuy.name);
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    }).catch(err => {
      console.log("We're sorry we are experienceing a problem.")
    })
    // else statement which prints "all questions asked" to the console
    // when the code has been run five times
  }
  else {
    console.log("All questions asked");
    console.log('Here is the dev team: ' + theTeam.join(', ').toString());
  }
};

// call askquestion to run our code
askQuestion();
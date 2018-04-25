// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================


const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'usernames'
    }, 
    {
        type: 'password',
        message: 'Give a password.',
        name: 'password'
    },
    {
        type: 'list',
        message: 'Eat! Which one do you choose?',
        choices: ['garbage', 'ice cream', 'mystery box'],
        name: 'foodChoice'
    },
    {
        type: 'checkbox',
        message: 'Are you garbage?',
        choices: ['yes', 'no', 'kinda'],
        name: 'garbageStatus'
    },
    {
        type: 'confirm',
        message: 'Are you sure?',
        name: 'confirm'
    }   
]).then(answers => {
    console.log(answers);
}).catch(function(error) {
    console.log(error);
});
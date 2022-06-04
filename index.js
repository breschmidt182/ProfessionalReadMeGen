// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: ' What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you run the program?',
    },
    {
        type: "list",
        choices: ["Apache", "MIT", "ISC", "GNU GPL v3", "other"],
        name: "license",
        message: "What license will be used?",

    },
    {
        type: 'input',
        name: 'distribute',
        message: 'How do I distribute?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do I test this?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'contact',
        message: 'What is your email?',
    }
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
      fs.writeFile(fileName, generateMarkdown(data), err =>
        err ? console.log(err) : console.log('Success!')
      );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log(data);
        writeToFile('READMESample.md', data)
      });
    
}

// Function call to initialize app
init();

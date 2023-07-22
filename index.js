// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs')


// TODO: Create an array of questions for user input
function questions() { 

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'What is your description of your project?',
                name: 'description',
            },
            {
                type: 'input',
                message: 'What are the installation instructions for your application?',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'How should a user use your application?',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'What are your guidelines for contribution to your project?',
                name: 'contributions',
            },
            {
                type: 'input',
                message: 'What instructions do you have for testing?',
                name: 'testing',
            },
            {
                type: 'list',
                message: 'What license do you have for your project?',
                name: 'license',
                choices: ['MIT', 'Apache_2.0', 'MPL_2.0', 'ISC']
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'username',
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
            },
        ])
        .then((response) =>
        writeToFile(generateMarkdown(response))
        )
    };
    
    // TODO: Create a function to write README file
    function writeToFile(data) {
        fs.appendFile('README.md', `${data}\n`, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
}

// TODO: Create a function to initialize app
// Function call to initialize app
questions()


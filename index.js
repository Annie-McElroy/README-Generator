// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
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
        name: 'installation instructions',
    },
    {
        type: 'input',
        message: 'How should a user use your application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are your guidelines for contribution to your project?',
        name: 'constributions',
    },
    {
        type: 'input',
        message: 'What instructions do you have for testing?',
        name: 'testing instructions',
    },
    {
        type: 'list',
        message: 'What license do you have for your project?',
        name: 'license',
        choices: ['MIT', 'GNU', 'Apache', 'Mozilla']
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
];

// TODO: Create a function to write README file
function writeToFile(data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const inquirer = require('inquirer');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title.',
        },
    ]);
};
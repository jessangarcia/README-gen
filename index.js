const {writeFile} = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
const generateMarkdown = require('./src/readme-template.js');


const prompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title.',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter a title.');
                    return false;
                }
            }
        },
    ]);
};

const promptQues = readMeData => {
    //if no project array, create one
    if (!readMeData.projects){
        readMeData.projects = [];
    }

    console.log(`
    ================
    Add README info
    ================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'description',
            message: 'Add description of your README. (Required)',
            validate: descriptionInput => {
                if (descriptionInput){
                    return true;
                } else {
                    console.log('Please enter a description');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Add instructions to install your project for others. (Required)',
            validate: installInput => {
                if (installInput){
                    return true;
                } else {
                    console.log('Please add instructions for installations');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. (Required)',
            validate: usageInput => {
                if (usageInput){
                    return true;
                } else {
                    console.log('Please provide instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles.',
            validate: contributionInput => {
                if (contributionInput){
                    return true;
                } else {
                    console.log('Add Credits');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'Choose a license.',
            choices: ['MIT License', 'GNU General Public License (GPL) 2.0', 'Apache License 2.0', 'GNU General Public License (GPL) 3.0'],
        }, 
        {
            type: 'input',
            name: 'features',
            message: 'If you have a lot of features, include them here:',
            validate: contributionInput => {
                if (contributionInput){
                    return true;
                } else {
                    console.log('Add Features');
                    return false;
                }
            }
        
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Add your contribution guidelines. (Required)',
            validate: contributionInput => {
                if (contributionInput){
                    return true;
                } else {
                    console.log('Add contributions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests for your application.',
            validate: contributionInput => {
                if (contributionInput){
                    return true;
                } else {
                    console.log('Add Tests');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: githubInput => {
                if (githubInput){
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Add a good email for people to reach out.',
            validate: emailInput => {
                if (emailInput){
                    return true;
                } else {
                    console.log('Add email');
                    return false;
                }
            }
        },
        
    ]).then(readData => {
        readMeData.projects.push(readData);
        if (readData.confirmAddProjects) {
            return promptQues(readMeData);
        } else {
            return readMeData;
        }
    })
}

//ties everything together 
prompt().then(promptQues).then(readMeData => {
    return generateMarkdown(readMeData);
})
.then(readmeMD => {
    return writeFile(readmeMD)
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
})
.catch(err => {
    console.log(err);
})
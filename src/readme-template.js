
const generateReadMe = readArr => {
    return `
${readArr.map(
    ({
        description,
        installation,
        usage,
        credits,
        license,
        features,
        contribution,
        tests,
        github,
        email,
    }) => 
{
    //had some help from Dylan on how to get the shield
    return `
![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg) Check out the badges hosted by [shields.io](https://shields.io/).
  
## Description
${description}
            
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Questions](#questions)
            
## Installation 
*Steps required to install project and how to get the development environment running:*
${installation}
    
## Usage
${usage}
  
## Credit
${credits}
    
## License
* This project is using the ${license} license.
  
## Features
${features}
    
## Contributing
${contribution}
  
## Test
${tests}
    
## Questions
* GitHub: ${github}
* Email: <a href="mailto:${email}">${email}</a> 
`
}
)}`
};

module.exports = templateData => {
    const {projects, ...header} = templateData;
    console.log('Template Data');
    console.log(templateData);

    return `
# ${header.title}
${generateReadMe(projects)}
`;
};
//creates the optional sections 
const generateCredit = credText => {
    if (!credText) {
      return '';
    }
  
    return `
    ## Credit
    ${credits}
    `;
}
  
const generateFeats = featText => {
    if (!featText) {
      return '';
    }
  
    return `
    ## Features
    ${features}
    `;
}
  
const generateTest = testText => {
    if (!testText) {
      return '';
    }
  
    return `
    ## Test
    ${tests}
    `;
}
  
module.exports = readArr => {
    return `
    # ${title} 
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
  
    ${generateCredit}
    
    ## License
    > This project is using the ${license} license.
  
    ${generateFeats}
    
    ## Contributing
    ${contribution}
  
    ${generateTest}
    
    ## Questions
    * ${github}
    * ${email}
    `
}
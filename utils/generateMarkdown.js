// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 let badge = ''
 switch (license) {
   case 'Apache':
     badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
     break;
   
   case 'MIT':
     badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
     break;

   case 'ISC':
     badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
     break;

    case 'GNU GPL v3':
     badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
     break;
 
   default:
     break;
 }
  return badge
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  # Description
   ${data.description}
  # Installation
   ${data.installation}
  # Usage
   ${data.usage}
  # Distribute
   ${data.distribute}
  # Test
   ${data.test}
  # License
   ${renderLicenseSection(data.license)}

   `;
}

module.exports = generateMarkdown;

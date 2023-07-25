// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Create an array of questions for user input

function init() {
  inquirer
  .prompt([{
    type: 'input',
    name: 'title',
    message: 'WHAT IS THE TITLE',
  },
  {
    type: 'input',
    name: 'description',
    message: 'WHAT DOES THIS DO?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'HOW TO INSTALL?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'HOW DO THEY USE?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'ENTER LICENSE NAME(s).',
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'ENTER CONTRIBUTOR(s).',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'ENTER TEST(s)',
  }])
  
// Generate the README content by combining the user's answers
  .then((answers) => {    
    const readmeContent = `# ${answers.title}\n\n` +
      `## Description\n\n${answers.description}\n\n` +
      `## Table of Contents\n\n` +
      `- [Installation](#installation)\n` +
      `- [Usage](#usage)\n` +
      `- [License](#license)\n` +
      `- [Contributing](#contributing)\n` +
      `- [Tests](#tests)\n` +
      `## Installation\n\n` +
      `${answers.installation}\n\n` +
      `## Usage\n\n` +
      `${answers.usage}\n\n` +
      `## License\n\n` +
      `${answers.license}\n\n` +
      `## Contributing\n\n` +
      `${answers.contributors}\n\n` +
      `## Tests\n\n` +
      `${answers.tests}\n\n` +
      `## Questions\n\n` +
      `For any questions or inquiries, please contact me via:\n\n` +
      `GitHub: [mandaark17](https://github.com/mandaark17)\n\n` +
      `Email: mandaark17@yahoo.com\n`;

// Write the generated README content to a file
    fs.writeFile('README.md', readmeContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing README file:', err);
        return;
      }
      console.log('README.md generated successfully!');
    });
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
}

init();

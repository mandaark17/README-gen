// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Create an array of questions for user input

function init() {
  inquirer
  .prompt([{
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
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
      `- [Questions](#questions)\n\n` +
      `## Installation\n\n` +
      `<!-- Add installation instructions -->\n\n` +
      `## Usage\n\n` +
      `<!-- Add usage information -->\n\n` +
      `## License\n\n` +
      `<!-- Add license badge and notice -->\n\n` +
      `## Contributing\n\n` +
      `<!-- Add contributing guidelines -->\n\n` +
      `## Tests\n\n` +
      `<!-- Add test instructions -->\n\n` +
      `## Questions\n\n` +
      `For any questions or inquiries, please contact me via:\n\n` +
      `GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})\n\n` +
      `Email: ${answers.email}\n`;

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

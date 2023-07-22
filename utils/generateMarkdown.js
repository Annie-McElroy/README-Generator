// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description\n\n${data.description}\n
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)\n
  ## Installation\n\n${data.installation}\n
  ## Usage\n\n${data.usage}\n
  ## License\n\nThis project is licensed under ${data.license}\n
  ## Badges\n\n[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})\n
  ## How to Contribute\n\n${data.contributions}\n
  ## Tests\n\n${data.testing}\n
  ## Questions\n
  If you have any questions, feel free to reach me at [GitHub](https://github.com/${data.username}) or via email at (${data.email}).
`;
}

module.exports = generateMarkdown;

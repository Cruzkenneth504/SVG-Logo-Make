const  { Circle, Triangle, Square } = require('./shapes')
const inquirer = require('inquire');
const fs = require('fs');

// inquirer.prompt([
//   {
//     type: 'input',
//     name: 'text',
//     message: 'Enter up to three characters for the logo text:'
//   },
//   {
//     type: 'input',
//     name: 'textColor',
//     message: 'Enter a color keyword or hexadecimal number for the text color:'
//   },
//   {
//     type: 'list',
//     name: 'shape',
//     message: 'Choose a shape for the logo:',
//     choices: ['circle', 'triangle', 'square']
//   },
//   {
//     type: 'input',
//     name: 'shapeColor',
//     message: 'Enter a color keyword or hexadecimal number for the shape color:'
//   }
// ]).then((answers) => {
//   let shape;

//   switch (answers.shape) {
//     case 'circle':
//       shape = new Circle();
//       break;
//     case 'triangle':
//       shape = new Triangle();
//       break;
//     case 'square':
//       shape = new Square();
//       break;
//   }

//   shape.shapeColor(answers.shapeColor);
//   shape.addText(answers.text);
//   shape.addTextColor(answers.textColor);

//   const svg = shape.render();
//   fs.writeFileSync('logo.svg', svg);
//   console.log('Generated logo.svg');
// }).catch((error) => {
//   console.error(error);
// });
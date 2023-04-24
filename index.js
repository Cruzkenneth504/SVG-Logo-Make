const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes');

inquirer.prompt([
  {
    name: 'text',
    message: 'Enter up to three characters:'
  },
  {
    name: 'textColor',
    message: 'Enter the text color (color keyword or hexadecimal number):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    name: 'shapeColor',
    message: 'Enter the shape color (color keyword or hexadecimal number):'
  }
]).then(answers => {
  let shape;
  switch (answers.shape) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
  }
  shape.shapeColor(answers.shapeColor);
  shape.addText(answers.text);
  shape.addTextColor(answers.textColor);

  const svg = shape.render();
  fs.writeFile('logo.svg', svg, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
});

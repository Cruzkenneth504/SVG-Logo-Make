const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('should render a circle with correct color, text, and text color', () => {
    const circle = new Circle();
    circle.shapeColor('red');
    circle.addText('Hello, world!');
    circle.addTextColor('white');
    expect(circle.render()).toBe('<svg width="300px" height="200px"><circle cx="150" cy="100" r="80" fill="red" stroke="black" stroke-width="3" /><text x="150" y="100" font-size="50" text-anchor="middle" fill="white" alignment-baseline="central">Hello, world!</text></svg>');
  });
});

describe('Triangle', () => {
  test('should render a triangle with correct color, text, and text color', () => {
    const triangle = new Triangle();
    triangle.shapeColor('green');
    triangle.addText('Welcome!');
    triangle.addTextColor('black');
    expect(triangle.render()).toBe('<svg width="300" height="200"><polygon points="150 0, 300 200, 0 200" style="fill:green;"/><text x="50%" y="80%" dominant-baseline="middle" font-size="70px" text-anchor="middle" fill="black">Welcome!</text></svg>');
  });
});

describe('Square', () => {
  test('should render a square with correct color, text, and text color', () => {
    const square = new Square();
    square.shapeColor('blue');
    square.addText('Goodbye!');
    square.addTextColor('yellow');
    expect(square.render()).toBe('<svg width="300" height="200"><rect width="300" height="200" style="fill:blue;stroke-width:2;stroke:#FFFFFF"/><text x="50%" y="50%" dominant-baseline="middle" font-size="100px" text-anchor="middle" fill="yellow">Goodbye!</text></svg>');
  });
});

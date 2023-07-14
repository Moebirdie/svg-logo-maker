//Import constructor Shapes
const {Circle, Square, Triangle} = require('./shapes.js');
const fs = require('fs');
const userAnswers = require('../answers.json');


//Create test suite for Shapes
describe('Shapes', () => {
    //A test for Square is created
    describe('square Shape', () => {
        it('it should return a square shape if square is input as the shapeName', () => {
            const shapeName = "square";
            const newShape = new Square(shapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
            expect(newShape.render()).toEqual(
   `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect height="200" width="200" fill="${userAnswers.color}" x="50" y="0" rx="0" ry="0"/>
            <style>
                .fontAttributes {
                    font: 67px sans-serif;
                }
            </style>
            <text x="150" y="100" class="fontAttributes" dominant-baseline="middle" text-anchor="middle" fill="${userAnswers.textColor}">${userAnswers.text}</text></svg>`); 
        })
    });
    describe('circle Shape', () => {
        it('it should return a circle shape if circle is input as the shapeName', () => {
            const shapeName = "circle";
            const newShape = new Circle(shapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
            expect(newShape.render()).toEqual(
   `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <circle r="100" fill="${userAnswers.color}" cx="150" cy="100" align="center" />
          <style>
              .fontAttributes {
                  font: 67px sans-serif;
              }
          </style>
          <text x="150" y="110" class="fontAttributes" dominant-baseline="middle" text-anchor="middle" fill="${userAnswers.textColor}">${userAnswers.text}</text>
  </svg>`); 
        })
    });
    describe('triangle Shape', () => {
        it('it should return a triangle shape if triangle is input as the shapeName', () => {
            const shapeName = "triangle";
            const newShape = new Triangle(shapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
            expect(newShape.render()).toEqual(
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 0 300, 200 0, 200" fill="${userAnswers.color}" />
          <style>
              .fontAttributes {
                  font: 67px sans-serif;
               }
          </style>
          <text x="150" y="160" class="fontAttributes" text-anchor="middle" fill="${userAnswers.textColor}">${userAnswers.text}</text>
          </svg>`); 
        })
    });
});
//create COLOR tests for Shapes
describe('Colors', () => {
    describe('square Color', () => {
        it('it should return a purple colored square', () => {
           const newShape = new Square(userAnswers.shapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
           newShape.setColor("purple");
                expect(newShape.render()).toEqual(
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect height="200" width="200" fill="purple" x="50" y="0" rx="0" ry="0"/>
            <style>
                .fontAttributes {
                    font: 67px sans-serif;
                }
            </style>
            <text x="150" y="100" class="fontAttributes" dominant-baseline="middle" text-anchor="middle" fill="${userAnswers.textColor}">${userAnswers.text}</text></svg>`); 
            })
    });
    describe('circle Color', () => {
        it('it should return a yellow colored circle', () => {
            const newShape = new Circle(userAnswers.shapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
            newShape.setColor("yellow");
            expect(newShape.render()).toEqual(
   `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <circle r="100" fill="yellow" cx="150" cy="100" align="center" />
          <style>
              .fontAttributes {
                  font: 67px sans-serif;
              }
          </style>
          <text x="150" y="110" class="fontAttributes" dominant-baseline="middle" text-anchor="middle" fill="${userAnswers.textColor}">${userAnswers.text}</text>
  </svg>`); 
        })
    });
    describe('triangle Color', () => {
        it('it should return a grey colored triangle', () => {
            const newShape = new Triangle(userAnswers.shapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
            newShape.setColor("#F9F9F9");
            expect(newShape.render()).toEqual(
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 0 300, 200 0, 200" fill="#F9F9F9" />
          <style>
              .fontAttributes {
                  font: 67px sans-serif;
               }
          </style>
          <text x="150" y="160" class="fontAttributes" text-anchor="middle" fill="${userAnswers.textColor}">${userAnswers.text}</text>
          </svg>`); 
        })
    });
});
   
//   create TEXT tests for Shapes
describe('Text', () => {
    describe('square Text', () => {
        it('it should return SVG within the square', () => {
            const newShape = new Square(userAnswers.shapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
            newShape.setText("SVG");
            expect(newShape.render()).toEqual(
   `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect height="200" width="200" fill="${userAnswers.color}" x="50" y="0" rx="0" ry="0"/>
            <style>
                .fontAttributes {
                    font: 67px sans-serif;
                }
            </style>
            <text x="150" y="100" class="fontAttributes" dominant-baseline="middle" text-anchor="middle" fill="${userAnswers.textColor}">SVG</text></svg>`); 
        })
    });
    describe('circle Text', () => {
        it('it should return PNG within the circle', () => {
            const newShape = new Circle(userAnswers.shapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
            newShape.setText("PNG");
            expect(newShape.render()).toEqual(
   `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <circle r="100" fill="${userAnswers.color}" cx="150" cy="100" align="center" />
          <style>
              .fontAttributes {
                  font: 67px sans-serif;
              }
          </style>
          <text x="150" y="110" class="fontAttributes" dominant-baseline="middle" text-anchor="middle" fill="${userAnswers.textColor}">PNG</text>
  </svg>`); 
        })
    });
    describe('triangle Text', () => {
        it('it should return DOG within the Triangle', () => {
            const newShape = new Triangle(userAnswers.shapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
            newShape.setText("DOG");
            expect(newShape.render()).toEqual(
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 0 300, 200 0, 200" fill="${userAnswers.color}" />
          <style>
              .fontAttributes {
                  font: 67px sans-serif;
               }
          </style>
          <text x="150" y="160" class="fontAttributes" text-anchor="middle" fill="${userAnswers.textColor}">DOG</text>
          </svg>`); 
        })
    });
});    
// Create tests for text colors
describe('Text Colors', () => {
    describe('square textColor', () => {
        it('it should return a pink text within the square', () => {
            const logoSquare = new Square(userAnswers.shapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
            logoSquare.setTextColor("pink");
            expect(logoSquare.render()).toEqual(
   `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect height="200" width="200" fill="${userAnswers.color}" x="50" y="0" rx="0" ry="0"/>
            <style>
                .fontAttributes {
                    font: 67px sans-serif;
                }
            </style>
            <text x="150" y="100" class="fontAttributes" dominant-baseline="middle" text-anchor="middle" fill="pink">${userAnswers.text}</text></svg>`); 
        })
    });
    describe('circle textColor', () => {
        it('it should return a orange text within a circle', () => {
            const newShape = new Circle(userAnswers.shapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
            newShape.setTextColor("orange");
            expect(newShape.render()).toEqual(
   `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <circle r="100" fill="${userAnswers.color}" cx="150" cy="100" align="center" />
          <style>
              .fontAttributes {
                  font: 67px sans-serif;
              }
          </style>
          <text x="150" y="110" class="fontAttributes" dominant-baseline="middle" text-anchor="middle" fill="orange">${userAnswers.text}</text>
  </svg>`); 
        })
    });
    describe('triangle textColor', () => {
        it('it should return a red text within a triangle', () => {
            const newShape = new Triangle(userAnswers.shapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
            newShape.setTextColor("red");
            expect(newShape.render()).toEqual(
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 0 300, 200 0, 200" fill="${userAnswers.color}" />
          <style>
              .fontAttributes {
                  font: 67px sans-serif;
               }
          </style>
          <text x="150" y="160" class="fontAttributes" text-anchor="middle" fill="red">${userAnswers.text}</text>
          </svg>`); 
        })
    });
});


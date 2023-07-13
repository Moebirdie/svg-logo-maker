//Import constructor Shapes
const {Circle, Square, Triangle} = require('./shapes.js');
const fs = require('fs');
const userAnswers = require('../answers.json');


//Create test suite for Shapes
describe('Shapes', () => {
    //A test for Square is created
    describe('squareShape', () => {
        it('it should return a square shape if square is input as the shapeName', () => {
            const shapeName = "square";
            const logoSquare = new Square(shapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
            expect(logoSquare.render()).toEqual(
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
});
//create color tests for Shapes
describe('Colors', () => {
    describe('squareColor', () => {
        it('it should return a purple square shape if blue is input as color', () => {
            const shapeColor = "purple";
            const logoSquare = new Square(userAnswers.shapeName, shapeColor, userAnswers.text, userAnswers.textColor);
            expect(logoSquare.render()).toEqual(
   `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect height="200" width="200" fill="${shapeColor}" x="50" y="0" rx="0" ry="0"/>
            <style>
                .fontAttributes {
                    font: 67px sans-serif;
                }
            </style>
            <text x="150" y="100" class="fontAttributes" dominant-baseline="middle" text-anchor="middle" fill="${userAnswers.textColor}">${userAnswers.text}</text></svg>`); 
        })
    });
})


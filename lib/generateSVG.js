const { writeFile } = require('fs');
const { Circle, Square, Triangle} = require('./shapes')

function createSVG(userAnswers) {
    try {  
        if (userAnswers.shapeName === "square") {
            const newSquare = new Square(userAnswers.ShapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
            return newSquare.render();
        }
        if (userAnswers.shapeName === "circle") {
            const newCircle = new Circle(userAnswers.ShapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
            return newCircle.render();
        }
        if (userAnswers.shapeName === "triangle") {
            const newTriangle = new Triangle(userAnswers.ShapeName, userAnswers.color, userAnswers.text, userAnswers.textColor);
            return newTriangle.render();
        }
       } catch (error) {
            throw error;
        }
} 

function generateSVG () {
    return new Promise((resolve, reject) => {
        try {
        const userAnswers  = require('../answers.json');
        const newSVG = createSVG(userAnswers);
            writeFile(`./examples/${userAnswers.svgName}.svg`, newSVG, (err) => {
                if (err) {
                reject(err);
                } else {     
                    console.log(`${userAnswers.svgName}.svg has been saved!`);
                    resolve();
                }
            });
        } catch (error) {
            console.log("error");
            reject(error);
        }    
    });
}       
// uncomment to run from this file for testing purposes as it's own module
//generateSVG();

module.exports = { generateSVG };
  
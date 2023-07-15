const fs = require('fs');
const userInput = require('./lib/userinputs');
const generateSVGFiles  = require('./lib/generateSVG.js');
const { error } = require('console');


 const createNewSVG = () => {
 try {
     userInput.askQuestions().then(generateSVGFiles.generateSVG);
   //  console.log('SVG generated successfully.');
 } catch (error) {
     console.error('An error occurred:', error);
 }
}

createNewSVG();

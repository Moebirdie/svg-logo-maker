const fs = require('fs');
const inquirer = require('../node_modules/inquirer');

function askQuestions() {

const isQuesAnswered = async (input) => {
    if (input) {
      return true;
    }
    return "Answer is required."
  };

  const isGreaterThanThree = async (input) => {
    if(input.length > 3) {
        return "Maximum number of characters is 3";
    }
    return true;
  };

const questions = [
    // console.log('Please answer all questions to generate your svg image!'),
    {
      type: 'list',
      message: 'What shape would you like to create?',
      name: 'shapeName',
      choices: ['circle', 'square', 'triangle']
    },
    {
      type: 'input',
      message: 'What color should your shape be? (use literal name or hex code, i.e. blue  or #444444)',
      name: 'color',
      validate: isQuesAnswered
    },
    {
      type: 'input',
      message: 'What three letters would you like within the shape? (maximum of 3)',
      name: 'text',
      validate: isGreaterThanThree
    },
    {
      type: 'input',
      message: 'What color should your text be? (use literal name or hex code, i.e. blue or #444444)',
      name: 'textColor',
      validate: isQuesAnswered
    },
    {
        type: 'input',
        message: 'What name would you like to give your svg so you can save and open it (please include .svg)?',
        name: 'svgName',
        validate: isQuesAnswered
      }
];


inquirer.prompt(questions)
  .then((answers) => {
    const answerString = JSON.stringify(answers); 
    fs.writeFile('answers.json', answerString, 
        err => {
            if (err) {
            console.error(err)
            }
            console.log('Your answers have been recorded!')
        })
    })
};


module.exports = {askQuestions};



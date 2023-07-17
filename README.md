# svg-logo-maker
OOP Challenge using inquirer and jest  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This svg logo maker is designed to produce a 300 x 200 svg. The rendering of the svg produces an svg with the maximum height and width possible to be rendered within the defined 300x200 requirement.  The application demonstrates the use of Node.js and the Inquirer and Jest packages.  Additionally, this application demonstrates the use of classes and extended classes including the use of inheritance and polymorphism.  Promises are also used to create a proper working application.  

The specific file structure used here creates each file as a module within the library that performs a specific task, e.g. definition of the objects, generating the SVGs, asking the user for input. These modules are then called within the index.js to execute the creation of the svg.  There is also a file specific to tests, shapes.test.js, which tests each method within the class constructors, both inherited and polymorphic.  The data is stored in a .json file as a precursor to using databases.

The video recording below walks through the file structures, code, creation of an svg that meets the requirements of the project and running of the various tests.

Link to video recording: [Video Recording](https://watch.screencastify.com/v/sTpE3B3ejhGKAssi1epI)  

## Table of Contents

1. [Installation](#Installation)
2. [Usage](#Usage)
3. [Visual Description](#Visual-Description)
4. [Tests](#Tests)  
5. [Questions](#Questions)
6. [License](#License)


## Installation <a id="Installation"></a>
A user installs this application by:  

	1. Cloning the svg-logo-maker repository 

	2. Installing Node.js  

	3. Installing Inqirer.js  

  	4. Installing Jest if you want to run tests  
   
   	(2-4 can be initiated after the directory is cloned by invoking npm i at the command line prompt)  
    

## Usage <a id="Usage"></a>  
When node index.js is invoked at the command line, a series of questions will prompt the user for answers to be used in the creation of the svg logo.   
Based on the user's input:  
	1. The svg will render as a circle, square or triangle  
  	2. The color of the shape will be user defined  
   	3. The shape will display up to a maximun of 3 characters within the shape  
    	4. The color of the characters within the shape will also user defined.  
     	5. In this version of the application, the logo will be saved based on the file name provided by the user

## Visual Description <a id="Visual-Description"></a>  (see video recording for an indepth visual walk through)
### File structure - each function is separated into it's own module  
![ks2V9pH](https://github.com/Moebirdie/svg-logo-maker/assets/93432701/d5eaadbe-cbd0-487b-bd44-f7feb575968b)  

###  Question prompts
![IXEZWnZ](https://github.com/Moebirdie/svg-logo-maker/assets/93432701/96608a0b-51e7-4380-86eb-d7f01adeeeda)  

### Test results  
![aNExwgM](https://github.com/Moebirdie/svg-logo-maker/assets/93432701/9855bdfb-b5fd-40fc-85a0-f5ccb9bee379)



## Tests <a id="Tests"></a>
Tests can be invoked with npm test from the command line.  
There are 12 tests (4 tests within each shape) within this application:  
- Shapes - which test the polymorphic render function for each child class
- Colors - which test the inherited setColor function for each child class
- Text - which tests the inherited setText function for each child class
- Text Color - which tests the inherited setTextColor function for each child class

## Reference  
mdn web docs - promises() constructor: provided insight in writing the promise  [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)

  
## Questions <a id="Questions"></a>  

Questions can be directed to maureen.business@gmail.com or submitted via my Github account at [https://github.com/Moebirdie/svg-logo-maker/edit/main/README.md](https://github.com/Moebirdie/svg-logo-maker/edit/main/README.md).

    
## License <a id="License"></a>

[MIT](https://opensource.org/licenses/MIT)

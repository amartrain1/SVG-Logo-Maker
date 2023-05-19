const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle } = require('./lib/shapes.js')

logoMaker = (data) => {
    if (data.shape == 'Square') {
        const shape = new Square;
        return shape.drawSquare()
    }
}

inquirer
    .prompt([
        // prompt the user for logo text
        {
            type: 'input',
            name: 'logoText',
            message: 'Which letters would you like on your logo?',
            // check to be sure the input is at least 1 character long, and not longer than 3 characters
            //! used ChatGPT to help understand how to use validate in inquirer prompts
            validate: function (value) {
                if (value.length > 3) {
                    return 'Input must be 3 characters or less.';
                } else if (value.length === 0) {
                    return 'Input must be at least 1 character long.';
                } else {
                    return true;
                };
            }
        },
        // prompt the user for text color, specifying only keywords or hexadecimal codes
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like your text to be? (input must be a keyword or a hexadecimal code)'
        },
        // prompt the user to select one of the 3 shape options
        {
            type: 'list',
            name: 'logoShape',
            choices: ['Square', 'Circle', 'Triangle'],
            message: 'Please select a shape for your logo.'
        },
        // prompt the user for logo color, specifying only keywords or hexadecimal codes
        {
            type: 'input',
            name: 'logoColor',
            message: 'What color would you like your logo to be? (input must be a keyword or a hexadecimal code)'
        }
    ])
    // .then((data) => console.log(data.logoShape))
    .then((data) => {
        fs.writeFile('./example/logo.svg', 
        ` <svg width="300" height="200" fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${logoMaker(data.logoShape)}
        </svg>`, (err) => err ? console.log(`Error: ${err}`) : console.log("File 'logo.svg' created successfully."))
    });
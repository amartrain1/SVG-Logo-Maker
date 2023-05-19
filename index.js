const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle } = require('./lib/shapes.js')

logoMaker = (data) => {
    const SVGOpen = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">`;
    const SVGText = `<text x="150" y="120" font-size="65" text-anchor="middle" fill="${data.textColor}">${data.logoText}</text>`;
    const triangleTxt = `<text x="150" y="150" font-size="65" text-anchor="middle" fill="${data.textColor}">${data.logoText}</text>`;
    const SVGClose = `</svg>`;
    if (data.logoShape == 'Square') {
        const shape = new Square();
        const generateCode = SVGOpen + shape.drawSquare(data.logoColor) + SVGText + SVGClose
        return generateCode;
    } else if (data.logoShape == 'Circle') {
        const shape = new Circle();
        const generateCode = SVGOpen + shape.drawCircle(data.logoColor) + SVGText + SVGClose
        return generateCode;
    } else {
        const shape = new Triangle();
        const generateCode = SVGOpen + shape.drawTriangle(data.logoColor) + triangleTxt + SVGClose
        return generateCode;
    }
};


inquirer
    .prompt([
        // prompt the user for logo text
        {
            type: 'input',
            name: 'logoText',
            message: 'Which letters would you like on your logo?',
            // check to be sure the input is at least 1 character long, and no longer than 3 characters
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
        },
    ])
    .then((data) => {
        // console.log('data.logoColor --- ' + data.logoColor),
        // console.log('logoColor --- ' + logoColor)
        // console.log(logoMaker(data))
        fs.writeFile('./example/logo.svg', logoMaker(data), (err) => err ? console.log(`Error: ${err}`) : console.log("File 'logo.svg' created successfully."))
    });
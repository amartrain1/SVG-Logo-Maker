// creates shape class
class Shape {
    constructor(textColor, logoText, logoColor) {
        this.textColor = textColor;
        this.logoText = logoText;
        this.logoColor = logoColor;
    }
}

// creates square extension of parent class
class Square extends Shape {
    constructor(logoColor) {
        super(logoColor)
    };

    drawSquare(color) {
        return `<rect x="75" y="25" width="150" height="150" fill="${color}"/>`
    };
};
{/* <text x="150" y="120" font-size="60" text-anchor="middle" fill="${Shape.textColor}">${Shape.logoText}</text> */}

// creates circle extension of parent class
class Circle extends Shape {
    constructor(logoColor) {
        super(logoColor)
    };

    drawCircle(color) {
        return `<circle r="75" cx="150" cy="100" fill="${color}"/>`
    };

};

// creates triangle extension of parent class
class Triangle extends Shape {
    constructor(logoColor) {
        super(logoColor)
    };

    drawTriangle(color) {
        return `<polygon points="150 15 15 185 285 185" fill="${color}"/>`
    };
};

module.exports = { Square, Circle, Triangle }

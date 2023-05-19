// creates shape class
class Shape {
    constructor(textColor, text, logoColor) {
        this.textColor = textColor;
        this.text = text;
        this.logoColor = logoColor;
    }
}

// creates square extension of parent class
class Square extends Shape {
    constructor(textColor, text, logoColor) {
        super(textColor, text, logoColor)
    };

    drawSquare() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.logoColor}"/>
        <text x="150" y="120" font-size="65" text-anchor="middle" fill="${this.textColor}">${this.text}</svg>`
    };
};

// creates circle extension of parent class
class Circle extends Shape {
    constructor(textColor, text, logoColor) {
        super(textColor, text, logoColor)
    };

    drawSquare() {
        return `<circle r="75" cx="150" cy="100" fill="${this.logoColor}"/>
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</svg>`
    };
};

// creates triangle extension of parent class
class Triangle extends Shape {
    constructor(textColor, text, logoColor) {
        super(textColor, text, logoColor)
    };

    drawSquare() {
        return `<polygon points="150 15 15 185 285 185" fill="${this.logoColor}"/>
        <text x="150" y="155" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</svg>`
    };
};

module.exports = { Square, Circle, Triangle }

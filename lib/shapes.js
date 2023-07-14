// Exports Shapes - Shapre, 'Triangle', 'Circle' and 'Square' classes

//Parent class - includes common properties of all shapes

class Shape {
    constructor(shapeName, color, text, textColor) {
        this.shapeName = shapeName;
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    };
    setColor(color) {
        this.color = color;
    };
    setText(text) {
        this.text = text;
    };
    setTextColor(textColor) {
        this.textColor = textColor;
    };
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect height="200" width="200" fill="${this.color}" x="50" y="0" rx="0" ry="0"/>
          <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    };
};

// children (sub) classes - specific to the respective shape otherwise it is inherited from parent

class Square extends Shape {

    constructor(shapeName, color, text, textColor) {
        super(shapeName, color, text, textColor);
    };
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect height="200" width="200" fill="${this.color}" x="50" y="0" rx="0" ry="0"/>
            <style>
                .fontAttributes {
                    font: 67px sans-serif;
                }
            </style>
            <text x="150" y="100" class="fontAttributes" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    };
}

class Circle extends Shape {
    constructor(shapeName, color, text, textColor) {
        super(shapeName, color, text, textColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <circle r="100" fill="${this.color}" cx="150" cy="100" align="center" />
          <style>
              .fontAttributes {
                  font: 67px sans-serif;
              }
          </style>
          <text x="150" y="110" class="fontAttributes" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
    }
}

class Triangle extends Shape {
    constructor(shapeName, color, text, textColor) {
        super(shapeName, color, text, textColor);
    }
        render() {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 0 300, 200 0, 200" fill="${this.color}" />
          <style>
              .fontAttributes {
                  font: 67px sans-serif;
               }
          </style>
          <text x="150" y="160" class="fontAttributes" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          </svg>`;
        }
}

module.exports = { Circle, Square, Triangle }; 
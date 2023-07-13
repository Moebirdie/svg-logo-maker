// Exports Shapes - Shapre, 'Triangle', 'Circle' and 'Square' classes

//Parent class - includes common properties of all shapes

class Shape {
        constructor(shapeName, color, text, textColor) {
            this.shapeName = shapeName;
            this.color = color;
            this.text = text;
            this.textColor = textColor;
        };
        setColor (color) {
            return `${this.color}`
        };
        setText (text) {
            return `${this.text}`
        };
        setTextColor (textColor) {
            return `${this.textColor}`
        };
    }

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

// class Circle extends Shape {
//     constructor(shapeName, width, color, text, textColor, fontSize, cx, cy, r) {
//         super(shapeName, width, color, text, textColor, fontSize);
//         this.r = (width/2);
//         this.cx = cx;
//         this.cy = cy;
//     }
//     render() {
//         return  `
//         <svg version="1.1"
//              width="300" height="200"
//              xmlns="http://www.w3.org/2000/svg">
        
//         <rect heigth="${this.height}" width="${this.width}" fill="${this.color} rx="${this.rx}" ry="${this.ry}"/>
        
//           <text x="${this.x}" y="${this.y}" font-size="${this.fontSize}" text-anchor="middle" fill="${this.textColor}">SVG</text>
        
//         </svg>`;
//     }
// }
// }

// class Triangle extends Shape {
//     constructor(shapeName, height, width, color, text, textColor, fontSize, points) {
//         super(shapeName, height, width, color, text, textColor, fontSize );
//         this.points = [(width/2, 0), (width,height), (0, height)]; // or this.points = {one:((width/2),0), two:(width,height), three:(0, height)}
//     }
// }

module.exports = { Square }; 
// Exports Shapes - Shapre, 'Triangle', 'Circle' and 'Square' classes

//Parent class - includes common properties of all shapes

class Shape {
        constructor(canvasWidth, canvasHeight, width, height, color, text, textColor, fontWeight, fontStyle, fontItalic) {
            this.shapeName = shapeName;
            this.height = height;
            this.width = width;        
            this.color = color;
            this.text = text;
            this.textColor = textColor;
            this.fontSize = (width/3);
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.fontWeight = fontWeight;
            this.fontStyle = fontStyle;
            this.fontItalic = fontItalic;
        }
    }

// children (sub) classes - specific to the respective shape otherwise it is inherited from parent

class Square extends Shape {
    //inputs canvasWidth, canvasHeight, answers.width, answers.color, answers.text, answers.textColor, answers.rx, answers.fontWeight, answers.fontStyle, answers.fontItalic
    constructor(canvasWidth, canvasHeight, width, color, text, textColor, rx, fontWeight, fontStyle, fontItalic) {
        super(canvasWidth, canvasHeight, width, color, text, textColor, fontWeight, fontStyle, fontItalic);
        this.rx = rx;
    };
    setColor () {
        return color
    };
    setFontSize() {
        const fontSize = (this.width / 3)
        return fontSize
    };
    setShapePosition () {
        const posX = ((this.canvasWidth / 2) - (this.width / 2))
        return posX
    };

    render() {
        return `
        <svg version="1.1"
             width="${canvasWidth}" height="${canvasHeight}"
             xmlns="http://www.w3.org/2000/svg">
        
        <rect height="${this.width}" width="${this.width}" fill="${color}" rx="${rx}" ry="${rx} x="${posX}" y="${posX}" />
        <style>
            .fontWeight {
                font-weight: ${this.fontWeight};
            }
            .fontAttributes {
                font: ${this.fontItalic} ${fontSize} ${this.fontStyle};
            }
        </style>
        <text x="${posX}" y="${posX}" class="fontWeight fontAttributes" text-anchor="middle" fill="${this.textColor}">SVG</text>
        </svg>`;
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

module.exports = Shapes; 
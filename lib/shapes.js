// Exports Shapes - Shapre, 'Triangle', 'Circle' and 'Square' classes

//Parent class - includes common properties of all shapes

class Shape {
        constructor(width, height, color, text, textColor) {
            this.height = height;
            this.width = width;        
            this.color = color;
            this.text = text;
            this.textColor = textColor;
        }
    }

// children (sub) classes - specific to the respective shape otherwise it is inherited from parent

class Square extends Shape {
    constructor(width, height, color, text, textColor, x, y) {
        super(height, width, color, text, textColor);
        this.x = x;
        this.y = y;
    }
}

class Circle extends Shape {
    constructor(width, height, color, text, textColor, cs, cy, r) {
        super(height, width, color, text, textColor);
        this.r = (width/2);
        this.cs = cs;
        this.cy = cy;
    }
}

class Triangle extends Shape {
    constructor(height, width, color, text, textColor, points) {
        super(height, width, color, text, textColor);
        this.points = [(width/2, 0), (width,height), (0, height)]; // or this.points = {one:((width/2),0), two:(width,height), three:(0, height)}
    }
}

module.exports = Shapes; 
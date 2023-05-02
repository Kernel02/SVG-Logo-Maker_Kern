class Circle {
  constructor(text, textColor, shapeColor) {
    this.svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${shapeColor}" />

    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>`;
  }
}

class Triangle {
  constructor(text, textColor, shapeColor) {
    this.svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 25 50, 175 250, 175" fill="${shapeColor}" />

    <text x="150" y="135" font-size="35" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>`;
  }
}

class Square {
  constructor(text, textColor, shapeColor) {
    this.svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="50" y="0" width="200" height="200" fill="${shapeColor}"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>`;
  }
}

module.exports = { Circle, Triangle, Square };

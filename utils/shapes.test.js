const shapes = require("./shapes");

describe("shapes", () => {
  describe("Triangle", () => {
    it("should create syntax built for create an svg file of a triangle", () => {
      const shape = new shapes.Triangle("WOW", "white", "green");
      expect(shape.svg)
        .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 25 50, 175 250, 175" fill="green" />

    <text x="150" y="135" font-size="35" text-anchor="middle" fill="white">WOW</text>

    </svg>`);
    });
  });
  describe("Circle", () => {
    it("should create syntax built for an svg file of a circle", () => {
      const shape = new shapes.Circle("JMK", "blue", "orange");
      expect(shape.svg)
        .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="orange" />

    <text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">JMK</text>

    </svg>`);
    });
  });
  describe("Square", () => {
    it("should create syntax built for an svg file of a square", () => {
      const shape = new shapes.Square("HEY", "#000000", "#fe6f5e");
      expect(shape.svg)
        .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="50" y="0" width="200" height="200" fill="#fe6f5e"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="#000000">HEY</text>

    </svg>`);
    });
  });
});

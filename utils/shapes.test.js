const shapes = require("./shapes");

describe("shapes", () => {
  describe("Circle", () => {
    const shape = new Circle();
    expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" />');
  });
});

const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    message: "Enter up to three characters for the text of your logo.",
    name: "text",
  },
  {
    type: "input",
    message:
      "Enter a color keyword or a hexadecimal number for the text color of your logo.",
    name: "textColor",
  },
  {
    type: "list",
    choices: ["Circle", "Triangle", "Square"],
    message: "Select a shape for your logo.",
    name: "shape",
  },
  {
    type: "input",
    message:
      "Enter a color keyword or a hexadimal number for the shape color of your logo.",
    name: "shapeColor",
  },
]).then((response) => console.log(response));

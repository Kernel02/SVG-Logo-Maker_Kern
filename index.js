const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./utils/shapes");

const createLogo = () => {
  let logoText;
  inquirer
    .prompt({
      type: "input",
      message: "Enter up to three characters for the text of your logo.",
      name: "text",
    })
    .then((response) => {
      logoText = response.text;
      response.text.length < 4
        ? inquirer
            .prompt([
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
            ])
            .then((response) => {
              const { textColor, shape, shapeColor } = response;
              let logo;
              switch (shape) {
                case "Circle":
                  logo = new Circle(
                    logoText.toUpperCase(),
                    textColor,
                    shapeColor
                  );
                  fs.writeFile(
                    `./generated-logos/${logoText.toUpperCase()}-${shape}.svg`,
                    logo.svg,
                    (err) =>
                      err
                        ? console.log(err)
                        : console.log(
                            "\nYour logo, succesfully made. Open the generated-logos folder to see your personal logo!\n"
                          )
                  );
                  break;
                case "Triangle":
                  logo = new Triangle(
                    logoText.toUpperCase(),
                    textColor,
                    shapeColor
                  );
                  fs.writeFile(
                    `./generated-logos/${logoText.toUpperCase()}-${shape}.svg`,
                    logo.svg,
                    (err) =>
                      err
                        ? console.log(err)
                        : console.log(
                            "\nLogo succesfully made. Open the generated-logos folder to see your personal logo!\n"
                          )
                  );
                  break;
                case "Square":
                  logo = new Square(
                    logoText.toUpperCase(),
                    textColor,
                    shapeColor
                  );
                  fs.writeFile(
                    `./generated-logos/${logoText.toUpperCase()}-${shape}.svg`,
                    logo.svg,
                    (err) =>
                      err
                        ? console.log(err)
                        : console.log(
                            "\nLogo succesfully made. Open the generated-logos folder to see your personal logo!\n"
                          )
                  );
              }
            })
        : console.log(
            "\nPlease try again. Make sure to not enter more than three characters and give a proper color key/hexadecimal number.\n"
          );
    });
};

createLogo();

const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "option",
    message: "What do you want to do?",
    choices: [
      {
        value: "1",
        name: `${"1.".cyan} Create task`,
      },
      {
        value: "2",
        name: `${"2.".cyan} Show tasks`,
      },
      {
        value: "3",
        name: `${"3.".cyan} Show completed tasks`,
      },
      {
        value: "4",
        name: `${"4.".cyan} Show pending tasks`,
      },
      {
        value: "5",
        name: `${"5.".cyan} Complete task(s)`,
      },
      {
        value: "6",
        name: `${"6.".cyan} Delete task`,
      },
      {
        value: "0",
        name: `${"0.".cyan} Exit`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();

  console.log("==============".cyan);
  console.log("   TODO App   ".cyan);
  console.log("==============\n".cyan);

  const { option } = await inquirer.prompt(questions);
  return option;
};

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Press ${"ENTER".cyan} to continue`,
    },
  ];
  await inquirer.prompt(question);
  // return enter;
};

module.exports = {
  inquirerMenu,
  pause,
};

require("colors");

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();

    console.log("==============".cyan);
    console.log("   TODO App   ".cyan);
    console.log("==============\n".cyan);

    console.log(`${"1.".cyan} Create task`);
    console.log(`${"2.".cyan} Show tasks`);
    console.log(`${"3.".cyan} Show completed tasks`);
    console.log(`${"4.".cyan} Show pending tasks`);
    console.log(`${"5.".cyan} Complete task(s)`);
    console.log(`${"6.".cyan} Delete task`);
    console.log(`${"0.".cyan} Exit\n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Select an option: ", (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`Press ${"ENTER".cyan} to continue\n`, (opt) => {
      readLine.close();
      resolve();
    });
  });
};

module.exports = {
  showMenu,
  pause,
};

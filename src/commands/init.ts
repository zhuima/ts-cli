import chalk from "chalk";
import { createCommand, Option } from "commander";
import { spinnerError, spinnerSuccess, updateSpinnerText } from "../spinner.js";

export const init = createCommand("init");

init
  .name("init")
  .description("Initialize a new project")
  .action(async () => {
    updateSpinnerText("初始化中，请稍后...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    spinnerSuccess();
    // console.log(`Initializing project ${options.url}`);
    // console.log(`Force: ${options.iteration}`);
    await import("../utils/init.js");
  });

init.addHelpText(
  "after",
  chalk.green(`
  
Example call:
  $ my-cli init
  `),
);

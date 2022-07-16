import { createCommand } from "commander";
import { spinnerError, spinnerSuccess, updateSpinnerText } from "../spinner.js";
import chalk from "chalk";
export const lh = createCommand("lh");

lh.name("lh")
  .description("Analyze the performance of a website")
  .action(async () => {
    updateSpinnerText("初始化中，请稍后...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    spinnerSuccess();
    await import("../utils/lighthouse.js");
  });

lh.addHelpText(
  "after",
  chalk.green(`
    
  Example call:
    $ my-cli lh
    `),
);

// type Option = {
//   url: string;
//   iteration: number;
// };

// const init = (options: Option) => {
//   console.log(`Initializing project ${options.url}`);
//   console.log(`Force: ${options.iteration}`);
// };

// export default { init };

import { createCommand, Option } from "commander";
import { spinnerError, spinnerSuccess, updateSpinnerText } from "../spinner.js";

export const init = createCommand("init");

init
  .name("init")
  .description("Initialize a new project")
  // eslint-disable-next-line prettier/prettier
  .requiredOption("-u --url <url>", "Lighthouse will run the analysis on the URL.")
  // eslint-disable-next-line prettier/prettier
  .addOption(
    new Option(
      "-i, --iteration <delay>",
      "How many times Lighthouse should run the analysis per URL.",
    ).default(10, "five seconds"),
  )
  .action(async (options) => {
    updateSpinnerText("初始化中，请稍后...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    spinnerSuccess();
    console.log(`Initializing project ${options.url}`);
    console.log(`Force: ${options.iteration}`);
  });

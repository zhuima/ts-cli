// #!/usr/bin/env node
// import chalk from "chalk";
// import { Command } from "commander";
// import clear from "clear";
// import spawn from "cross-spawn";
// import figlet from "figlet";
// import { draw } from "../utils";

// const lighthouse = require.resolve("lighthouse/lighthouse-cli");

// const { computeMedianRun } = require("lighthouse/lighthouse-core/lib/median-run.js");

// function run(url, ) {

//   console.log(`🗼 Running Lighthouse for ${url}, It will take a while, please wait...`);

//   const results = [];
//   for (let i = 0; i < options.iteration; i++) {
//     const { status, stdout } = spawn.sync(process.execPath, [
//       lighthouse,
//       url,
//       "--output=json",
//       "--chromeFlags=--headless",
//       "--only-categories=performance",
//     ]);
//     if (status !== 0) {
//       continue;
//     }
//     results.push(JSON.parse(stdout.toString()));
//   }

//   const median = computeMedianRun(results);
//   console.log(`\n${chalk.green("✔")} Report is ready for ${median.finaUrl}.`);
//   console.log(
//     `🗼 Median performance score: ${draw(
//       median.categories.performance.score,
//       median.categories.performance.score * 100,
//     )}`,
//   );

//   const primaryMatrices = [
//     "first-contentful-paint",
//     "interactive",
//     "speed-index",
//     "total-blocking-time",
//     "largest-contentful-paint",
//     "cumulative-layout-shift",
//   ];

//   primaryMatrices.map((matrix) => {
//     const { title, displayValue, score } = median.audits[matrix];
//     console.log(`🗼 ${title}: ${draw(score, displayValue)}`);
//   });
// }

// run();
import { createCommand, Option } from "commander";
import spawn from "cross-spawn";
import chalk from "chalk";
import { draw } from "../utils";
// const { lighthouse } = require.resolve("lighthouse/lighthouse-cli");

import lighthouse from "lighthouse";

const { computeMedianRun } = require("lighthouse/lighthouse-core/lib/median-run.js");

import { spinnerError, spinnerSuccess, updateSpinnerText } from "../spinner.js";

// export default { lighthouse };

export const lh = createCommand("lh");

lh.name("lh")
  .description("Analyze the performance of a website")
  // eslint-disable-next-line prettier/prettier
  .requiredOption("-u --url <url>", "Lighthouse will run the analysis on the URL.")
  // eslint-disable-next-line prettier/prettier
  .addOption(
    new Option(
      "-i, --iteration <delay>",
      "How many times Lighthouse should run the analysis per URL.",
    ).default(10, "five seconds"),
  )
  .action(async (options: { url: string; iteration: number }) => {
    updateSpinnerText("初始化中，请稍后...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    spinnerSuccess();
    const results = [];
    const url = options.url;
    const iteration = options.iteration;
    for (let i = 0; i < options.iteration; i++) {
      const { status, stdout } = spawn.sync(process.execPath, [
        lighthouse,
        url,
        "--output=json",
        "--chromeFlags=--headless",
        "--only-categories=performance",
      ]);
      if (status !== 0) {
        continue;
      }
      results.push(JSON.parse(stdout.toString()));
    }

    const median = computeMedianRun(results);
    console.log(`\n${chalk.green("✔")} Report is ready for ${median.finaUrl}.`);
    console.log(
      `🗼 Median performance score: ${draw(
        median.categories.performance.score,
        median.categories.performance.score * 100,
      )}`,
    );

    const primaryMatrices = [
      "first-contentful-paint",
      "interactive",
      "speed-index",
      "total-blocking-time",
      "largest-contentful-paint",
      "cumulative-layout-shift",
    ];

    primaryMatrices.map((matrix) => {
      const { title, displayValue, score } = median.audits[matrix];
      console.log(`🗼 ${title}: ${draw(score, displayValue)}`);
    });
  });

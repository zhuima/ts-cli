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

import inquirer from "inquirer";
import ora from "ora";

const lighthouse = () => {
  const spinner = ora("初始化中，请稍后...");
  // 定义问题
  const questions = [
    {
      type: "input",
      name: "url",
      message: "url地址",
      validate: (val?: string) => {
        if (!val) {
          return "请输入url";
        }
        if (val.length === 0) {
          return "url不能为空";
        }
      },
    },
    {
      type: "input",
      name: "iteration",
      message: "iteration",
      validate: (val?: number) => {
        if (!val) {
          return "请输入时间差";
        }
      },
    },
  ];

  inquirer.prompt(questions).then(({ url, iteration }) => {
    // 获取输入结果
    spinner.start();
    spinner.color = "green";
    console.log(`${url}  is ${iteration}`);
    return;
  });
};

export default { lighthouse };

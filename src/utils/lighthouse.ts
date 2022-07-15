import chalk from "chalk";
import spawn from "cross-spawn";
import { draw } from "../utils.js";
import { spinnerError, spinnerSuccess, updateSpinnerText } from "../spinner.js";
import inquirer from "inquirer";

const lighthouse = require.resolve("lighthouse/lighthouse-cli");

const { computeMedianRun } = require("lighthouse/lighthouse-core/lib/median-run.js");

function LighthouseCmd(url: string, iteration: number) {
  console.log(`🗼 Running Lighthouse for ${url}, It will take a while, please wait...`);
  //   updateSpinnerText(`🗼 Running Lighthouse for ${url}, It will take a while, please wait...`);

  updateSpinnerText("稍等片刻。。。");
  spinnerSuccess();

  const results = [];
  for (let i = 0; i < iteration; i++) {
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

  //   console.log(JSON.stringify(median, null, 2));

  console.log(`\n${chalk.green("✔")} Report is ready for ${url}.`);
  //   updateSpinnerText(`\n${chalk.green("✔")} Report is ready for ${median.finaUrl}.`);
  console.log(
    `🗼 Median performance score: ${draw(
      median.categories.performance.score,
      median.categories.performance.score * 100,
    )}`,
  );

  //   spinnerSuccess(
  //     `🗼 Median performance score: ${draw(
  //       median.categories.performance.score,
  //       median.categories.performance.score * 100,
  //     )}`,
  //   );

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
    // updateSpinnerText(`🗼 ${title}: ${draw(score, displayValue)}`);
  });
}

const questions = [
  {
    type: "input",
    name: "url",
    message: `请输入url: `,
    default: "http://www.baidu.com",
    validate(input: string): boolean {
      // 是否存在名称
      if (input === "") {
        return false;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "iteration",
    message: `请输入iteration: `,
    default: 5,
  },
];

inquirer.prompt(questions).then((answers: { url: string; iteration: number }) => {
  // 获取答案
  updateSpinnerText("Analyzing...");
  // 开始下载模板
  LighthouseCmd(answers.url, answers.iteration);
});

"use strict";
// #!/usr/bin/env node
// import chalk from "chalk";
// import { Command } from "commander";
// import clear from "clear";
// import spawn from "cross-spawn";
// import figlet from "figlet";
// import { draw } from "../utils";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const inquirer_1 = __importDefault(require("inquirer"));
const ora_1 = __importDefault(require("ora"));
const lighthouse = () => {
    const spinner = (0, ora_1.default)("初始化中，请稍后...");
    // 定义问题
    const questions = [
        {
            type: "input",
            name: "url",
            message: "url地址",
            validate: (val) => {
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
            validate: (val) => {
                if (!val) {
                    return "请输入时间差";
                }
            },
        },
    ];
    inquirer_1.default.prompt(questions).then(({ url, iteration }) => {
        // 获取输入结果
        spinner.start();
        spinner.color = "green";
        console.log(`${url}  is ${iteration}`);
        return;
    });
};
exports.default = { lighthouse };

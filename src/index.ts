#!/usr/bin/env node
import chalk from "chalk";
import { Command } from "commander";
import clear from "clear";
import spawn from "cross-spawn";
import figlet from "figlet";
import { draw } from "./utils";

const lighthouse = require.resolve("lighthouse/lighthouse-cli");

const { computeMedianRun } = require("lighthouse/lighthouse-core/lib/median-run.js");

clear();
console.log(chalk.red(figlet.textSync("Lighthouse-cli", { horizontalLayout: "full" })));
async function run() {
  const program = new Command();

  program
    .version("0.0.1")
    .name("lighthouse-cli")
    .description("Lighthouse CLI")
    .argument("<url>", "Lighthouse will run the analysis on the URL.")
    .option(
      "-i, --iteration <type>",
      "How many times Lighthouse should run the analysis per URL.",
      "5",
    )
    .parse();

  const [url] = program.args;
  const options = program.opts();
  console.log(`🗼 Running Lighthouse for ${url}, It will take a while, please wait...`);

  const results = [];
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
}

run();

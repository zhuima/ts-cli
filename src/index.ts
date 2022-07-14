#!/usr/bin/env node
import { createCommand } from "commander";
import { init } from "./commands/init.js";
import { lh } from "./commands/lighthouse.js";
import { logo, mylogo } from "./commands/logo.js";
import chalk from "chalk";

const program = createCommand();

program
  .name("my-cli")
  .description("My CLI")
  .usage("[commands] [options]")
  .version("0.0.1")
  .helpOption("-h, --help", "输出所有命令");

// program.option("-v, --verbose", "verbose logging");

program.addCommand(init);
program.addCommand(lh);
program.addCommand(logo);

program.addHelpText("before", `${mylogo("my-cli")}`);

program.addHelpText(
  "after",
  chalk.green(`

Example call:
  $ my-cli init -u http://www.baidu.com 
  $ my-cli init -u http://www.baidu.com -i 2
`),
);

program.addHelpText(
  "afterAll",
  chalk.blue(`
Author:
  zhuima <zhuima314@gmail.com>
`),
);

async function main() {
  await program.parseAsync();
}

console.log();
main();

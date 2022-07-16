#!/usr/bin/env node
import { createCommand } from "commander";
import { init } from "./commands/init.js";
import { lh } from "./commands/lighthouse.js";
import { logo } from "./utils/logo.js";
import { getVersion } from "./utils/getversion.js";
import chalk from "chalk";

const program = createCommand();

program.version(getVersion(), "-v, --version", "output the current version");

program
  .name("my-cli")
  .description("My CLI")
  .usage("[commands] [options]")
  .helpOption("-h, --help", "输出所有命令");


program.addCommand(init);
program.addCommand(lh);

program.addHelpText("beforeAll", `${logo("my-cli")}`);

program.addHelpText(
  "after",
  chalk.green(`

Example call:
  $ my-cli init -h
  $ my-cli lh -h
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

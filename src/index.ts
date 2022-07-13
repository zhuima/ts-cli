#!/usr/bin/env node
import chalk from "chalk";
import { Command, program } from "commander";
import clear from "clear";
import spawn from "cross-spawn";
import figlet from "figlet";
import { draw } from "./utils";
import init from "./commands/init";
import lighthouse from "./commands/lighthouse";
program
  .command("init")
  .description("init templte (初始化项目)")
  .action(async () => {
    await import("./commands/init");
  });

program
  .command("lighthouse")
  .description("lighthouse url (检测url)")
  .action(() => {
    lighthouse();
  });

program.parse(process.argv);

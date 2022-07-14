#!/usr/bin/env node
import { createCommand } from "commander";
import { init } from "./commands/init.js";
import { lighthouse } from "./commands/lighthouse.js";
const program = createCommand();

program.name("my-cli").description("My CLI").version("0.0.1");

program.option("-v, --verbose", "verbose logging");

program.addCommand(init);
program.addCommand(lighthouse);
// program.addHelpCommand();
// program
//   .command("init")
//   .description("Initialize a new project")
//   // eslint-disable-next-line prettier/prettier
//   .requiredOption("-u --url <url>", "Lighthouse will run the analysis on the URL.")
//   .addOption(
//     new Option(
//       "-i, --iteration <delay>",
//       "How many times Lighthouse should run the analysis per URL.",
//     ).default(5, "five seconds"),
//   )
//   .action((options) => {
//     // console.log(`Initializing project ${options.url}`);
//     // console.log(`Force: ${options.iteration}`);
//     init(options);
//   });

// program.addHelpText(
//   "after",
//   `

// Example call:
//   $ my-cli --help`,
// );

// program.parse(process.argv);

async function main() {
  await program.parseAsync();
}

console.log();
main();

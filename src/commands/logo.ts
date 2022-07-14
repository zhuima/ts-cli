import figlet from "figlet";
import chalk from "chalk";
import { createCommand } from "commander";

export const logo = createCommand("logo");

logo
  .name("logo")
  .description("logo")
  .action(() => {
    // eslint-disable-next-line prettier/prettier
    console.log(chalk.red(figlet.textSync("my-cli", { horizontalLayout: "full" })));
  });

export function mylogo(name: string) {
  return chalk.red(figlet.textSync(`${name}`, { horizontalLayout: "full" }));
}

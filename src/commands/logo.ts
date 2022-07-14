import figlet from "figlet";
import chalk from "chalk";

export function logo(name: string) {
  // eslint-disable-next-line prettier/prettier
  return chalk.red(figlet.textSync(`${name}`, { horizontalLayout: "full" }));
}

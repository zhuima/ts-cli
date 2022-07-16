import figlet from "figlet";
import chalk from "chalk";

export function logo(name: string) {
  return chalk.red(figlet.textSync(`${name}`, { horizontalLayout: "full" }));
}

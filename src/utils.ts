import chalk from "chalk";

export function draw(score: number, value: number) {
  if (score >= 0.9 && score <= 1) {
    return chalk.green(`${value} (Good)`);
  }
  if (score >= 0.5 && score <= 0.9) {
    return chalk.yellow(`${value} (Needs Improvement)`);
  }

  return chalk.red(`${value} (Bad)`);
}

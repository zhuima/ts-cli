import * as fs from "fs";
import * as path from "path";
import chalk from "chalk";
import { logo } from "./logo.js";

export const getVersion = () => {
  const packagePath = path.resolve(__dirname, "../../package.json");
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  const name = packageJson.name;
  const version = packageJson.version;
  const author = packageJson.author;
  return chalk.green(`
${logo(name)}

${name}@${version}

Author: ${author}

`);
};

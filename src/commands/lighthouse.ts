import { createCommand } from "commander";
import inquirer from "inquirer"; // 用于和用户进行交互

import { spinnerError, spinnerSuccess, updateSpinnerText } from "../spinner.js";

// export default { lighthouse };

export const lh = createCommand("lh");

lh.name("lh")
  .description("Analyze the performance of a website")
  .action(async () => {
    updateSpinnerText("初始化中，请稍后...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    spinnerSuccess();
    const { url, iteration } = await inquirer.prompt([
      {
        type: "input",
        name: "url",
        message: `请输入url: `,
        default: "http://www.baidu.com",
        validate(input: string): boolean {
          // 是否存在名称
          if (input === "") {
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        name: "iteration",
        message: `请输入iteration: `,
        default: 5,
      },
    ]);
    console.log(`url is ${url}`);
    console.log(`iteration is ${iteration}`);
  });

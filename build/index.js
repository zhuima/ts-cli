#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const commander_1 = require("commander");
const clear_1 = __importDefault(require("clear"));
const cross_spawn_1 = __importDefault(require("cross-spawn"));
const figlet_1 = __importDefault(require("figlet"));
const utils_1 = require("./utils");
const lighthouse = require.resolve("lighthouse/lighthouse-cli");
const { computeMedianRun } = require("lighthouse/lighthouse-core/lib/median-run.js");
(0, clear_1.default)();
console.log(chalk_1.default.red(figlet_1.default.textSync("Lighthouse-cli", { horizontalLayout: "full" })));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const program = new commander_1.Command();
        program
            .version("0.0.1")
            .name("lighthouse-cli")
            .description("Lighthouse CLI")
            .argument("<url>", "Lighthouse will run the analysis on the URL.")
            .option("-i, --iteration <type>", "How many times Lighthouse should run the analysis per URL.", "5")
            .parse();
        const [url] = program.args;
        const options = program.opts();
        console.log(`🗼 Running Lighthouse for ${url}, It will take a while, please wait...`);
        const results = [];
        for (let i = 0; i < options.iteration; i++) {
            const { status, stdout } = cross_spawn_1.default.sync(process.execPath, [
                lighthouse,
                url,
                "--output=json",
                "--chromeFlags=--headless",
                "--only-categories=performance",
            ]);
            if (status !== 0) {
                continue;
            }
            results.push(JSON.parse(stdout.toString()));
        }
        const median = computeMedianRun(results);
        console.log(`\n${chalk_1.default.green("✔")} Report is ready for ${median.finaUrl}.`);
        console.log(`🗼 Median performance score: ${(0, utils_1.draw)(median.categories.performance.score, median.categories.performance.score * 100)}`);
        const primaryMatrices = [
            "first-contentful-paint",
            "interactive",
            "speed-index",
            "total-blocking-time",
            "largest-contentful-paint",
            "cumulative-layout-shift",
        ];
        primaryMatrices.map((matrix) => {
            const { title, displayValue, score } = median.audits[matrix];
            console.log(`🗼 ${title}: ${(0, utils_1.draw)(score, displayValue)}`);
        });
    });
}
run();

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.draw = void 0;
const chalk_1 = __importDefault(require("chalk"));
function draw(score, value) {
    if (score >= 0.9 && score <= 1) {
        return chalk_1.default.green(`${value} (Good)`);
    }
    if (score >= 0.5 && score <= 0.9) {
        return chalk_1.default.yellow(`${value} (Needs Improvement)`);
    }
    return chalk_1.default.red(`${value} (Bad)`);
}
exports.draw = draw;

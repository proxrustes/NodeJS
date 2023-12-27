"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JSONHandler_1 = __importDefault(require("../handlers/JSONHandler"));
function default_1(req, res) {
    (0, JSONHandler_1.default)(req, res);
}
exports.default = default_1;

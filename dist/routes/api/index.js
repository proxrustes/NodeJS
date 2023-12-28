"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const json_1 = __importDefault(require("./json"));
const router = (0, express_1.Router)();
router.use('/json', json_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map
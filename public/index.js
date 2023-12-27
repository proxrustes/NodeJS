'use strict';
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const router_1 = __importDefault(require('./api/router/router'));
function default_1 (req, res) {
  (0, router_1.default)(req, res);
}
exports.default = default_1;

'use strict';
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const JSONHandler_1 = __importDefault(require('../../handlers/JSONHandler'));
function handleRequest (req, res) {
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Welcome to main page');
      break;
    case '/json':
      (0, JSONHandler_1.default)(req, res);
  }
}
exports.default = handleRequest;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/api/index"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
var xmlparser = require('express-xml-bodyparser');
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const port = process.env.PORT || 8080;
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(xmlparser());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public/index.html'));
});
app.get('/api', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'public/api-description.html'));
});
app.use('/api', index_1.default);
server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
const gracefulShutdown = () => {
    console.log('Received kill signal, shutting down.');
    server.close(() => {
        console.log('Closed out remaining connections.');
        process.exit(0);
    });
    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 10000);
};
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
//# sourceMappingURL=index.js.map
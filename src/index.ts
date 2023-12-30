import express from 'express';
import apiRoutes from './routes/api/index';
import path from 'path';
import http from 'http';
var xmlparser = require('express-xml-bodyparser');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(xmlparser());
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/api-description.html'));
});

app.use('/api', apiRoutes);

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
    console.error(
      'Could not close connections in time, forcefully shutting down'
    );
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

import express from 'express'
import apiRoutes from './routes/api/index';
import path from 'path';
var xmlparser = require('express-xml-bodyparser');

const app = express()
const port = process.env.PORT || 8080
app.use(express.static(path.join(__dirname, 'public')))
app.use(xmlparser());
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/api-description.html'));
});

app.use('/api', apiRoutes);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})
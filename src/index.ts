import express, { Request, Response } from 'express'
import home from "./routes/home"
import apiRoutes from './routes/api';
import path from 'path';

const app = express()
const port = process.env.PORT || 8080
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/api-description.html'));
});
app.use("/", home)
app.use('/api', apiRoutes);
app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})
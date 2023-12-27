import express, { Request, Response } from 'express'
import home from "./routes/home"
import json from "./routes/json"
import xml from "./routes/xml"

const app = express()
const port = process.env.PORT || 8080
app.use(express.json())
app.use("/", home)
app.use('/xml', xml);
app.use("/json", json)

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})
import express, { Request, Response } from 'express'
import home from "./routes/home"

const app = express()
const port = process.env.PORT || 8080

app.use("/", home)
app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})
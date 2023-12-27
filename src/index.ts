import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/a', (req, res) => {
  res.send('Hello World aboba!')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})

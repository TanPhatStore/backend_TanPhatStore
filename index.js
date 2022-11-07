const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3003

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.json({
    hello : 'hi',
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
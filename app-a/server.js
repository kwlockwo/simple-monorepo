const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello from app-a!')
})

app.listen(port, () => {
  console.log(`Lstening on port ${port}`)
})

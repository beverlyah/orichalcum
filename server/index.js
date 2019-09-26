const express = require('express')
const parser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(morgan('dev'))
app.use(parser.json())

app.use(express.static(__dirname + '/../client/dist'))

let PORT = process.env.PORT || 3001

app.listen(PORT, (err) => {
  if (err) {
    console.log('ERROR connecting to server:', err)
  }
  console.log(`orichalcum is listening on port ${PORT}!`)
})
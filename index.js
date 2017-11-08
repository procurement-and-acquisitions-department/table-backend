const http = require('http')
const Router = require('router')
const mongoose = require('mongoose')

let router = Router()

mongoose.connect('mongodb://127.0.0.1/gamingTable', {
  useMongoClient: true
})

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('connected!')
})

router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('Hello World!')
})

var server = http.createServer((req, res) => {
  router(req, res, (req, res) => {})
})

server.listen(3000)

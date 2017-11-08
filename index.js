const http = require('http')
const Router = require('router')
const mongoose = require('mongoose')

let router = Router()

const userRouter = require('./routers/user')

mongoose.connect('mongodb://127.0.0.1/gamingTable', {
  useMongoClient: true
})

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('connected!')
})

var server = http.createServer((req, res) => {
  router(req, res, (err) => {
    res.end('Not Found')
  })
})

router.use('/users/', userRouter)

router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('Hello World!')
})

router.use(function (err, req, res, next) {
  res.end(err.message)
})

server.listen(3000)

const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

const userRouter = require('./routers/user')

const app = express()

mongoose.connect('mongodb://127.0.0.1/gamingTable', {
  useMongoClient: true
})

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('connected!')
})

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 60,
    jwksUri: 'https://' + process.env.AUTH0_USERNAME + '.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://localhost:3000',
  issuer: 'https://' + process.env.AUTH0_USERNAME + '.auth0.com/',
  algorithms: ['RS256']
}).unless({
  path: ['/users/list']
})

app.use(jwtCheck)
app.use(bodyParser.json())

app.use('/users/', userRouter)

app.get('/authorized', function (req, res) {
  res.send('Secured Resource')
})

app.listen(3000)

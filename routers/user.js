const Express = require('express')

const User = require('../models/user')

let userRouter = Express.Router()

userRouter.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).end(err.toString())
    }
    res.status(200).end(JSON.stringify(users))
  })
})

userRouter.get('/:userId', (req, res) => {
  res.end('get specific user')
})

userRouter.post('/', (req, res) => {
  res.end('create user')
})

userRouter.put('/:userId', (req, res) => {
  res.end('update user')
})

userRouter.delete('/:userId', (req, res) => {
  res.end('delete user')
})

module.exports = userRouter

const Express = require('express')

const User = require('../models/user')

let userRouter = Express.Router()

userRouter.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).end(err)
    }
    res.status(200).end(JSON.stringify(users))
  })
})

userRouter.get('/:username', (req, res) => {

})

userRouter.post('/', (req, res) => {
  if (!req.body.username) {
    res.status(400).end('username property required')
  } else if (!req.body.name) {
    res.status(400).end('name property required')
  }

  User.find({ username: req.body.username }, function (err, existingUser) {
    if (err) {
      res.status(500).end(err)
    }
    if (existingUser.length > 0) {
      res.status(400).end('User ' + req.body.username + ' already exists')
    }

    let user = new User({
      username: req.body.username,
      name: req.body.name
    })
    user.save(function (err, user) {
      if (err) {
        res.status(500).end(err.toString())
      }
      res.status(201).end(JSON.stringify(user))
    })
  })
})

userRouter.put('/:userId', (req, res) => {
  res.end('update user')
})

userRouter.delete('/:userId', (req, res) => {
  res.end('delete user')
})

module.exports = userRouter

const Express = require('express')
let userRouter = Express.Router()

userRouter.get('/', (req, res) => {
  res.end('user list')
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

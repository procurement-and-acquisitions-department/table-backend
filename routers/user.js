const Express = require('express')
let userRouter = Express.Router()

userRouter.get('/list', (req, res) => {
  res.end('user list')
})

module.exports = userRouter

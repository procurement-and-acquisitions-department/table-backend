const Router = require('router')

let userRouter = Router()

userRouter.get('/list', (req, res) => {
  res.end('users')
})

module.exports = userRouter

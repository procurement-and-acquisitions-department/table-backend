const Router = require('router')
const passport = require('passport')

let userRouter = Router()

userRouter.get('/', (req, res) => {
  res.end('users')
})

userRouter.get('')

// Perform the login
userRouter.get(
  '/login',
  passport.authenticate('auth0', {
    clientID: process.env.AUTH0_CLIENT_ID,
    domain: process.env.AUTH0_USERNAME + '.auth0.com',
    redirectUri: process.env.AUTH0_CALLBACK_URL,
    audience: 'https://' + process.env.AUTH0_DOMAIN + '/userinfo',
    responseType: 'code',
    scope: 'openid'
  }),
  (req, res) => {
    res.redirect('/')
  }
)

// Perform session logout and redirect to homepage
userRouter.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

// Perform the final stage of authentication and redirect to '/user'
userRouter.get(
  '/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.redirect(req.session.returnTo || '/user');
  }
)

module.exports = userRouter

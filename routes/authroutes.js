var express = require('express'),
routes = express.Router()
var authController=require('../controller/auth-controller')
routes.post('/register',authController.addUser)
routes.post('/login',authController.login)
routes.post('/getuser',authController.findUser)
module.exports = routes
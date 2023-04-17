var express = require('express'),
routes = express.Router()
var authController=require('../controller/auth-controller')
routes.post('/register',authController.addUser)
module.exports = routes
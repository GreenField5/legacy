const express = require('express');
const routers = express.Router();
const auth = require('./auth')
//User Controller 
const userController = require('./Controller/UserController')
routers.post('/signup', userController.signUpUser);
routers.post('/login', userController.loginUser);
routers.post('/logout', userController.userlogout)
routers.get('/checkuser', auth, (req, res) => {
    res.send(userController.checkuser(req, res))
})
routers.post('/getuserinfo', userController.getuserinfo)

//Restaurant Controller
const RestaurantController = require('./Controller/restaurantController')

routers.post('/filldata', RestaurantController.fillrest)



module.exports = routers;
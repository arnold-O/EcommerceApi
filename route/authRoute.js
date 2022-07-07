const express = require('express')

const router = express()
const { registerUser, loginUser, logoutuser } = require('../controllers/authController')




router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutuser)



module.exports = router
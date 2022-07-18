const express = require('express')
const { getAllUsers } = require('../controllers/usercontroller')

const router = express()





router.route('/alluser').post(getAllUsers)




module.exports = router
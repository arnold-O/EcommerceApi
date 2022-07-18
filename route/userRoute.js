const express = require('express')
const { getAllUsers, getSingleUser, showCurrentUser, updatePassword, updateUser } = require('../controllers/usercontroller')

const router = express()





router.route('/').get(getAllUsers)



// show me needs to be above 
router.route('/showme').get(showCurrentUser)

router.route('/updateUser').patch(updateUser)
router.route('/updateUserPassword').post(updatePassword)

router.route('/:id').get(getSingleUser)



module.exports = router
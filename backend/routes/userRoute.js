const express = require('express'); 

const { registerUser, sendOtp ,authenticateOtp} = require('../controllers/userController');



const router = express.Router(); 

router.route('/register').post(registerUser);
router.route('/sendotp').post(sendOtp);
router.route('/authenticateotp').post(authenticateOtp)

module.exports = router; 


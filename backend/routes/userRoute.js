const express = require('express'); 

const { registerUser, sendOtp ,authenticateOtp , sendOtpWhatsapp} = require('../controllers/userController');



const router = express.Router(); 

router.route('/register').post(registerUser);
router.route('/sendotp').post(sendOtp);
router.route('/authenticateotp').post(authenticateOtp)
router.route('/sendotpwhatsapp').post(sendOtpWhatsapp)

module.exports = router; 


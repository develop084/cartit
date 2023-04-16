const express = require('express'); 

const { registerUser, sendOtp ,authenticateOtp , sendOtpWhatsapp , checkLogic} = require('../controllers/userController');



const router = express.Router(); 

router.route('/register').post(registerUser);
router.route('/sendotp').post(sendOtp);
router.route('/authenticateotp').post(authenticateOtp)
router.route('/sendotpwhatsapp').post(sendOtpWhatsapp)
router.route('/alpha/:id').get(checkLogic)
module.exports = router; 


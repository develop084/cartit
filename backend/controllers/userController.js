const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsycErrors');
const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail'); 
const crypto = require('crypto'); 
const cloudinary = require('cloudinary'); 
const stytch = require("stytch");


// Register a user 

exports.registerUser = catchAsyncErrors(async (req, res, next) => { 
// const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
//    folders: 'avatars', 
//    width: 150, 
//    crop: "scale"
// }); 

const {name, email, password} = req.body; 
const user = await User.create({
   name, 
   email, 
   password 
});

sendToken(user, 200, res);  
})






const client = new stytch.Client({
   project_id: process.env.STYTCH_PROJECT_ID,
   secret: process.env.STYTCH_SECRET,
   env: stytch.envs.test,
 }
 );

exports.sendOtp = catchAsyncErrors(async (req, res, next) => {
  
   const {phone_number} = req.body
   const params = {
      phone_number,
    };



     // client.otps.whatsapp.loginOrCreate(params)
    client.otps.sms.loginOrCreate(params)
   .then((response) => {
      
      res.status(200).json({
         success: true,
         data: response
      })
   })
   .catch((error) => {
      res.status(400).json({
         success: false,
         data: error
      })
   });
})

exports.sendOtpWhatsapp = catchAsyncErrors(async (req, res, next) => {
     
   const {phone_number} = req.body
   const params = {
      phone_number,
    };
   client.otps.whatsapp.loginOrCreate(params)
   .then((response) => {
      res.status(200).json({
         success: true,
         data: response
      })
   })
   .catch((error) => {
      res.status(400).json({
         success: false,
         data: error
      })
   });
})

exports.authenticateOtp = catchAsyncErrors(async (req, res, next) => {
   
   
  
   // params are of type stytch.AuthenticateOTPRequest

   
   
   const params = {
     code : req.body.code,
     method_id: req.body.phoneId,
   };
 
   client.otps.authenticate(params)
     .then(resp => {
      res.status(200).json({
         success: true,
         data: resp
      })
     }).catch(err => {
      res.status(404).json({
         success: true,
         data: err
      })
     });


})


exports.checkLogic = catchAsyncErrors(async (req, res, next) => {
   console.log(req.params)
   
})
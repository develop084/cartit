const mongoose = require('mongoose')
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
   name: {
      type: String, 
      required: [true, 'Please enter your name'], 
      maxLength: [30, 'Your name cannot exceed 30 characters'], 
      minLength: [3, 'Your name must be at least 3 characters']
   }, 
   email:{
      type: String, 
      required: [true, 'Please enter your email'],
      unique: true,  
      validate: [validator.isEmail, 'Please enter a valid email address']
   }, 
   password:{
     type: String,
     required: [true, 'Please enter your password'],
     minLength: [8, 'Your password must be at least 8 characters'],
     select: false 
   },
   avatar: {
      public_id: {
        type: String,
        
      },
      url: {
        type: String,
        
      },
   },

   role: {
      type: String,
      default: 'user'
   }, 
   createdAt: {
    type: Date, 
    default: Date.now
   }, 
   resetPasswordToken: String,
   resetPasswordExpire: Date

})

// Encrypting password before saving user
userSchema.pre('save', async function(next){
   if(!this.isModified('password')){
      next()
   }
   this.password = await bcrypt.hash(this.password, 10)
})

// create the JWT 
userSchema.methods.getJWTToken = function(){
   return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_TIME
   })
}

// password reset token 

userSchema.methods.comparePassword = async function(enteredPassword){
   return  await bcrypt.compare(password, this.password)
}


// generation password reset token 

userSchema.methods.getResetPasswordToken = function(){
   const resetToken = crypto.randomBytes(20).toString('hex')
   this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')


   // reset token expire time

   this.resetPasswordExpire = Date.now() + 30 * 60 * 1000

   return resetToken
   

}

const userModel = mongoose.model('User', userSchema)

module.exports =  userModel


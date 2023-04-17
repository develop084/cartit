const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsycErrors');
const Product = require('../models/productModel');
const cloudinary = require('cloudinary')
const sendToken = require('../utils/jwtToken');
const productModel = require('../models/productModel');
const Razorpay = require('razorpay');




cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
 });
 

exports.addProduct = catchAsyncErrors(async (req, res, next) => {
 

const {name,price,description,rating,countInStock,category} = req.body
const files = req.files.image
console.log(files)
cloudinary.v2.uploader.upload(files.tempFilePath, async (err, result) => {
   if(err) throw err
   
   const product = await Product.create({
      name,
      price,
      description,
      rating,
      countInStock,
      category,
      image: {
         public_id: result.public_id,
         url: result.secure_url
      }
   })
   res.status(201).json(product)
})

//  sendToken(product, 201,res)

})

exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
   const products = await Product.find();
   res.status(200).json(products)
})

exports.getwithId = catchAsyncErrors(async (req, res, next) => {
const productID = await Product.findById(req.params.id)
res.status(200).json(productID)

})


exports.paymentProcess = catchAsyncErrors(async (req, res, next) => {
const {id} = req.body
const productExist = await productModel.findById(id) 
console.log(productExist)

if(productExist){
    // product is found, not create order form this product
    
    var instance = new Razorpay({
      key_id: process.env.RZP_KEY,
      key_secret: process.env.RZP_SECRET,
    })

    var options = {
      amount: productExist.price * 100, // amount in the smallest currency unit
      currency: 'INR',
      receipt: 'order_rcptid_11',
    }
    
    instance.orders.create(options, function (err, order) {
      if (!err) {
        res
          .status(200)
          .json({ ...order, key: process.env.RZP_KEY, name: productExist.name })
      } else {
        console.log(err)
        res.status(500).json({
          message: 'There was some error, please contact your administrator',
        })
      }
    })
}
else {
   res.status(404).json({ message: 'The requested product does not exist!' })
}

})
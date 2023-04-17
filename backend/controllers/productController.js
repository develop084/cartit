const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsycErrors');
const Product = require('../models/productModel');
const cloudinary = require('cloudinary')
const sendToken = require('../utils/jwtToken');

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
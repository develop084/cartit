const express = require('express');
const app = express(); 
const mongoose = require('mongoose')
const connectDatabase = require('./config/database')
const userModel = require('./models/userModel')
const port = process.env.PORT || 8000;
require('dotenv').config()
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors"); 
const cloudinary = require('cloudinary');
app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload(
   { 
      useTempFiles: true
   }
));


const user = require('./routes/userRoute')
const product = require('./routes/productRoute')

app.use('/api/v1', user)
app.use('/api/v1', product)




app.listen(port, ()=>{
   console.log(`server started on port ${port}`)
})
connectDatabase()





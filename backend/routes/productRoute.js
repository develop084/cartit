const express = require('express');

const {addProduct, getAllProducts} = require('../controllers/productController');

const router = express.Router();

router.route('/add').post(addProduct);
router.route('/all').get(getAllProducts)

module.exports = router;
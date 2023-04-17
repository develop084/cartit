const express = require('express');

const {addProduct, getAllProducts , getwithId} = require('../controllers/productController');

const router = express.Router();

router.route('/add').post(addProduct);
router.route('/all').get(getAllProducts);
router.route('/product/:id').get(getwithId);


module.exports = router;
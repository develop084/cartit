const express = require("express");

const {
  addProduct,
  getAllProducts,
  getwithId,
  paymentProcess,
} = require("../controllers/productController");

const router = express.Router();

router.route("/add").post(addProduct);
router.route("/all").get(getAllProducts);
router.route("/product/:id").get(getwithId);
router.route("/payment").post(paymentProcess);

module.exports = router;

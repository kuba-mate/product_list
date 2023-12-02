const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get("/add", productController.getAddProductPage);
router.post("/add", productController.addProductToList);
router.get('/:id', productController.getProductDetails);


module.exports = router;

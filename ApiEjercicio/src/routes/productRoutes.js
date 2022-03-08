const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productsControllers");

router.get("/get-products", productControllers.getProducts);
router.get("/getOne-products/:name_product", productControllers.getOneProduct);
router.post("/create-product", productControllers.createProduct);


module.exports = router;

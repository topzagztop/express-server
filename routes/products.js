const express = require("express");
const router = express.Router();
//import Controllers
const productControllers = require("../controllers/productControllers")

const { auth } = require("../middlewares/auth");

router.get("/products", auth, productControllers.listProducts);

router.get("/product/:id", productControllers.readProduct);

router.post("/product", productControllers.createProduct);

router.put("/product/:id", productControllers.updateProduct);

router.delete("/product/:id", productControllers.deleteProduct);

module.exports = router;

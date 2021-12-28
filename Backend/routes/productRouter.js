const router = require("express").Router();
const cors = require("cors");
const productController = require("../controller/productController")
router.use(cors());

router.get("/get-all-products",productController.getAllProducts);
module.exports = router;

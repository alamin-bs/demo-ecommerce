const router = require("express").Router();
const cors = require("cors");
const productController = require("../controller/productController")
const auth = require("../Middleware/auth");
router.use(cors());

router.get("/get-all-products",productController.getAllProducts);
module.exports = router;

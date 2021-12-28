const router = require("express").Router();
const cors = require("cors");
const authController = require("../controller/authController")
const auth = require("../Middleware/auth");
router.use(cors());

router.post("/login", authController.login);
module.exports = router;

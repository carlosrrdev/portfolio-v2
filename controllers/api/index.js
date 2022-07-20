const router = require("express").Router();

const userRoutes = require("./user-controller");

router.use("/admin", userRoutes);

module.exports = router;

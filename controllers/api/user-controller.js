const router = require("express").Router();
const { User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const dbData = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.json(dbData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const dbData = await User.create({
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ message: "New user was created" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const dbData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!dbData) {
      res.status(404).json({ message: "Incorrect email or password" });
      return;
    }

    const isPasswordValid = dbData.checkPassword(req.body.password);
    if (!isPasswordValid) {
      res.status(404).json({ message: "Incorrect email or password" });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;

const express = require("express");
const { User, validateAuth } = require("../models/user");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
module.exports = router.post("/login", async (req, res) => {
  // todo: check user data
  const { error } = validateAuth(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  // todo: lookup for the user with provided details
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    // return res.status(400).send("invalid email or password");
    return res.status(400).send("no user found");
  }
  // todo: verify the user password by bcrypt

  console.log(user.password);
  console.log(user.email);
  console.log(user.name);
  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) {
    return res.status(400).send("invalid email or password");
  }
  const token = jwt.sign({ _id: user._id }, "mySecret");
  res
    .header("x-auth-token", token)
    .send({ email: user.email, name: user.name });
});

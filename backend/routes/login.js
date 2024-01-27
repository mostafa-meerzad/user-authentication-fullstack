const express = require("express");
const { User, validateAuth } = require("../models/user");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
router.post("/login", async (req, res) => {
  // todo: check user data
  const { error } = validateAuth(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  // todo: lookup for the user with provided details
  const user = User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).send("invalid username or password");
  }
  // todo: verify the user password by bcrypt

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) {
    return res.status(400).send("invalid username or password");
  }
  const token = jwt.sign({ _id: user._id }, "mySecret");
  res.header("x-auth-token", token);
});

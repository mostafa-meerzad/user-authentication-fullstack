const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/user");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = router.post("/signup", async (req, res) => {
  // data sent from client-side for registering the user
  // todo: validate user data sent from client-side
  // todo: look up for the user if not exists create one

  const { error } = validateUser(req.body);
  // console.log(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(400).send("user already registered!");
  }

  user = new User(_.pick(req.body, ["name", "password", "email"]));
  // user = new User({name: req.body.name, password: req.body.password, email:req.body.email});
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = jwt.sign({ _id: user._id }, "mySecret");

  // res.send("user successfully registered");
  res.header("x-auth-token", token).send(_.pick(req.body, ["name", "email"]));
});

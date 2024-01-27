const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/user");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  // data sent from client-side for registering the user
  // todo: validate user data sent from client-side
  // todo: look up for the user if not exists create one

  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("user already registered!");
  }

  user = new User(_.pick(req.body, ["name", "password", "email"]));
  const salt = bcrypt.genSalt();
  user.password = bcrypt.hash(user.password, salt);
  await user.save();

  const token = jwt.sign({_id:user._id}, "mySecret")

//   res.send("user successfully registered");
res.header("x-auth-token", token)
});

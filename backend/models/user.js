const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 55 },
  password: { type: String, required: true, min: 5, max: 1042 },
  email: { type: String, minlength: 5, maxlength: 255, unique: true },
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(55).required(),
    password: Joi.string().min(5).max(150).required(),
    email: Joi.string().email().min(5).max(255).required(),
  });

  return schema.validate(user);
}
function validateAuth(user) {
  const schema = Joi.object({
    password: Joi.string().min(5).max(150).required(),
    email: Joi.string().email().min(5).max(255).required(),
  });

  return schema.validate(user);
}

module.exports = { validateAuth, validateUser, User };

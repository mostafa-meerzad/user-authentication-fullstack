const mongoose = require("mongoose");

module.exports = async function() {
  try {
    await mongoose.connect("mongodb://localhost:27017/userAuthTest");
    console.log("connected to DB");
  } catch (e) {
    console.log("something went wrong connecting to DB!");
  }
};

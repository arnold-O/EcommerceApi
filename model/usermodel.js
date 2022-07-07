const mongoose = require("mongoose");
const validator = require('validator')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide your name"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    unique:true,
    required: [true , 'please provide a valid email'],
    lowercase:true,
    validate: [validator.isEmail, 'please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, "please provide your password"],
    minLength: 6,
    maxLength: 12,
  },
  role:{
    type:String,
    enum:['admin', 'user'],
    default:"user"
  }
});

module.exports = mongoose.model("User", userSchema);

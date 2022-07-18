const catchAsyncErrors = require("../middlewares/catchAsyncError");

const User = require("../model/usermodel");
const { createJWT, attachCookiesResponse } = require("../utils/jwt");


exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password} = req.body;

    // first register user is an admin
    // const FirstAccountAdmin = (await User.countDocuments({})) === 0
    // const role =  FirstAccountAdmin ? "admin" : "user"



  const user = await User.create({
    name,
    email,
    password,

  });

  const UserInfo = {name:user.name, userId:user._id, role:user.role}

  // const token = createJWT({payload:UserInfo})
  attachCookiesResponse({res, user:UserInfo})

 

 
});

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
  });
});



exports.logoutuser = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({
    success: true,
  });
});

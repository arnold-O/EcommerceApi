const catchAsyncErrors = require("../middlewares/catchAsyncError");

const User = require("../model/usermodel");
const ErrorHandler = require("../utils/errorhandler");
const { createJWT, attachCookiesResponse } = require("../utils/jwt");

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  // first register user is an admin
  // const FirstAccountAdmin = (await User.countDocuments({})) === 0
  // const role =  FirstAccountAdmin ? "admin" : "user"

  const user = await User.create({
    name,
    email,
    password,
  });

  const UserInfo = { name: user.name, userId: user._id, role: user.role };

  // const token = createJWT({payload:UserInfo})
  attachCookiesResponse({ res, user: UserInfo });
});

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("please provide your email and password"));
  }
  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorHandler("please your credentials are invalid"));
  }

  const isPasswordRight = await user.correctPassword(password);

  if (!isPasswordRight) {
    return next(new ErrorHandler("please your credentials are invalid"));
  }
  const tokenUser = { name: user.name, userId: user._id, role: user.role };

  attachCookiesResponse({ res, user: tokenUser });

  res.status(200).json({
    success: true,
  });
});

exports.logoutuser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.status(200).json({
    success: true,
    message: "user logged out ",
  });
});

const catchAsyncErrors = require("../middlewares/catchAsyncError");

const User = require('../model/usermodel')



exports.registerUser = catchAsyncErrors( async(req, res, next)=>{

            const {name, email, password} = req.body

    const user = await  User.create({
        name,
        email,
        password

    })



    res.status(200).json({
        success:true,
        user
        
    })
})


exports.loginUser = catchAsyncErrors( async(req, res, next)=>{



    res.status(200).json({
        success:true,
        
    })
})
exports.logoutuser = catchAsyncErrors( async(req, res, next)=>{



    res.status(200).json({
        success:true,
        
    })
})
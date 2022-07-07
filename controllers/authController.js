const catchAsyncErrors = require("../middlewares/catchAsyncErrors");





exports.registerUser = catchAsyncErrors( async(req, res, next)=>{



    res.status(200).json({
        success:true,
        
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
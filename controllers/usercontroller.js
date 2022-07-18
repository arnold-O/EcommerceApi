const catchAsyncError = require("../middlewares/catchAsyncError");











exports.getAllUsers = catchAsyncError( async (req, res, next)=>{



    res.status(200).json({
        messages:"all user Route"
    })
})
exports.getSingleUser = catchAsyncError( async (req, res, next)=>{



    res.status(200).json({
        messages:"single  user Route"
    })
})
exports.showCurrentUser = catchAsyncError( async (req, res, next)=>{



    res.status(200).json({
        messages:"showCurrentUser user Route"
    })
})
exports.updateUser = catchAsyncError( async (req, res, next)=>{



    res.status(200).json({
        messages:"updateUser user Route"
    })
})
exports.updatePassword = catchAsyncError( async (req, res, next)=>{



    res.status(200).json({
        messages:"updatePassword user Route"
    })
})
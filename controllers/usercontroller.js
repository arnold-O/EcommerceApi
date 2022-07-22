const catchAsyncError = require("../middlewares/catchAsyncError");
const User = require("../model/usermodel");
const ErrorHandler = require("../utils/errorhandler");











exports.getAllUsers = catchAsyncError( async (req, res, next)=>{

    const users = await User.find({role:"user"}).select('-password').select("-__v")

    res.status(200).json({users})



   
})
exports.getSingleUser = catchAsyncError( async (req, res, next)=>{

    const {id} = req.params


    const user = await User.findById({_id:req.params.id}).select('-password').select("-__v")

    if(!user){
        return next(new ErrorHandler('This user does not exist', 400))
    }



    res.status(200).json({
       user
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
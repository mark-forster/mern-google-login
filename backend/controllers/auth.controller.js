
const User =require('../models/user.model');
const JWTService = require('../utils/jwt');

const loginWithGoogle = async (profile,cb) => {
    const user= await User.findOne({google_id:profile?._json.sub}) 
    if(user){
        const token = JWTService.generateToken({userId:user._id})
        cb(null, token)
        return
    }
   const loginUser= await User.create({
       google_id:profile?._json.sub,
       name:profile?._json.name,
       email:profile?._json.email,
       profile:profile?._json.picture
    })
    const token = JWTService.generateToken({userId:loginUser._id})
  cb(null, token)
   return;
};

const getProfile= async(req,res,next)=>{
        const user= await User.findById(req.user.userId);
        return res.json({user: user});
}
   
module.exports = {loginWithGoogle, getProfile}
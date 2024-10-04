const jwt= require('jsonwebtoken')


module.exports= async (req,res,next)=>{
    try{
         //get token from header
          const authToken = req.headers['authorization'] || '';
          if(!authToken || !authToken.startsWith("Bearer "))
            {
                throw new Error("please login first")
            }
            const token = authToken.split(" ")[1]
        if(!token){
            return res.json({success: false, message: "Authentication failed, Login First"})
        }
        const decodedToken= jwt.verify(token,process.env.JWT_SECRET,(err, decoded)=>{
            if(err){
                if (err) return res.json({success:false,message: "Wrong or expired token"});
            }
            else{
                req.user= decoded;
                next();
            }
            return req.user;
        });
       
    }
    catch(err){
        console.error(err);
    }
}
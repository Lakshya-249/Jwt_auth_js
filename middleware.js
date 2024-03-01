const {getuser} = require("./auth");

const restrictouser = async (req,res,next)=>{
    const userid = req.cookies?.uid;
    if(!userid){
        return res.status(404).json({success: false,message: "You need to be looged in(cookies not found)"});
    }
    const user = getuser(userid);
    // console.log(user);
    if(!user){
        return res.status(404).json({success: false,message: "You need to be looged in with user"});
    }
    req.user= user;
    next();
}

const checkauth = async (req,res,next)=>{
    const userid = req.cookies?.uid;
    
    const user = getuser(userid);
    console.log(user);
    
    req.user= user;
    next();
}

module.exports = {restrictouser,checkauth};